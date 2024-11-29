"use client"


import * as React from "react"

import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { identification, identSetToken } from "@/lib/artaxi";
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation"




const getLoginValue = (): string | null => {
	return (document.querySelector("#login") == null ? null : document.querySelector("#login")?.value);
}
const getMdpValue = (): string | null => {
	return (document.querySelector("#mdp") == null ? null : document.querySelector("#mdp")?.value);
}

export default function Identification() {

	const router = useRouter();
	const [isErrorMsg, setIsErrorMsg] = useState(false);
	const [isRedirect, setIsRedirect] = useState(false);

	// useEffect(() => {
	// 	if (isRedirect) {
	// 		//router.push('/');
	// 	}
	// }, [isRedirect, router]);

	const submit = () => {
		askIdent(getLoginValue(), getMdpValue()).then((reponse) => {
			if (reponse === true) {
				// setIsRedirect(true);
				router.push('/');

			}
			console.log("reponse", reponse);
		})
	}


	async function askIdent(login: string, mdp: string): Promise<boolean> {
		try {
			console.log("askIdent")


			const data = await fetch(
				process.env.NEXT_PUBLIC_API_URL + '/identification'
				, {
					method: 'POST',
					body: '{"login":"' + login + '", "password":"' + mdp + '", "version_app_mobile":"1.0.0"}'
				}
			)
			const dj = await data.json();
			if (dj?.retour) {
				console.log("identification ok")
				// stocke le token
				identSetToken(dj.data.jwt);
				// router.push('/');
				return true;
			}
			else (
				console.log("identification pas ok")
			)
		} catch (e) {
			console.log("identification pas ok avec erreur", e)
		}
		return false;
	}

	return (
		<>
			<Card className="w-[340px] mx-auto my-10">
				<CardHeader>
					<CardTitle>Identification Course 53</CardTitle>
					<CardDescription>Saisir vos identifiants</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Login</Label>
								<Input id="login" type="text" placeholder="Saisissez votre login" defaultValue="artaxi" />
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="mdp">Mot de passe</Label>
								<Input id="mdp" placeholder="Saisissez votre mot de passe" defaultValue="6808" />
							</div>
						</div>
					</form>
					{isErrorMsg &&

						<div className="text-red-700 font-bold my-3">
							Saisie incorrect, veuillez recommencer
						</div>
					}
				</CardContent>
				<CardFooter className="flex justify-between">
					{/* <Button variant="outline">Cancel</Button> */}
					<Button onClick={submit} className="bg-primary w-20 mx-auto">Ok</Button>
				</CardFooter>
			</Card>
		</>
	)
}
