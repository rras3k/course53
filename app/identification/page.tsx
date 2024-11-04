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
import {identification, identSetToken } from "@/lib/artaxi";
import { useState } from 'react';
import { useRouter } from "next/navigation"




const getLoginValue = (): string | null => {
		return (document.querySelector("#login") == null ? null : document.querySelector("#login").value);
}
const getMdpValue = (): string | null => {
		return (document.querySelector("#mdp") == null ? null : document.querySelector("#mdp").value);
}

export default function Identification() {
	
	const router = useRouter();
	const [isErrorMsg, setIsErrorMsg] = useState(false);
	const  submit = () => {
		askIdent(getLoginValue(), getMdpValue());
	}


	async function askIdent(login: string, mdp: string): Promise<void> {
		let res;
		try {
			console.log("askIdent")
			res = await identification(login, mdp);
			console.log("retour", res.retour);
			setIsErrorMsg(res.retour == false);
			if (res.retour == true) {
				// stocke ele token
				identSetToken(res.data.jwt);
				console.log("go to racine");
				console.log("go to racine1");
				// on va a la racine
				// return redirect('/');
				// router.push('/');
				router.push('/');
				console.log("apres redirect ");

			}
				
		} catch (e) {
			console.error(e);
		}

		// enregistre token
		// const res = await identification('artaxi', '6808');
		// return true;
	}
	


	return (
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
							<Input id="login" type="text" placeholder="Saisissez votre login" value="artaxi"/>
						</div>
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="mdp">Mot de passe</Label>
							<Input id="mdp" placeholder="Saisissez votre mot de passe" value="6808"/>
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
	)
}
