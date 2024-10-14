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
import {identification,  aIdentificationBis } from "@/lib/artaxi";
import { useState } from 'react';



const getLoginValue = (): string | null => {
		return (document.querySelector("#login") == null ? null : document.querySelector("#login").value);
}
const getMdpValue = (): string | null => {
		return (document.querySelector("#mdp") == null ? null : document.querySelector("#mdp").value);
}

export default function Identification() {
	
	const [isErrorMsg, setIsErrorMsg] = useState(false);
	const submit = () => {
		console.log("rrrr", getLoginValue(), getMdpValue());
		setIsErrorMsg(true);

		aIdentificationBis();
		// identification(getLoginValue(), getMdpValue());
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
							<Input id="login" type="text" placeholder="Saisissez votre login" />
						</div>
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="mdp">Mot de passe</Label>
							<Input id="mdp" placeholder="Saisissez votre mot de passe" />
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
