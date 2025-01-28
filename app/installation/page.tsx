"use client"

import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import {  useRouter } from "next/navigation";


let deferredEvent: typeof event | undefined = undefined;

const Installation = () => {
	const router = useRouter();
	


	const [installClick, setinstallClick] = useState(false);

	const [allreadyInstall, setallreadyInstall] = useState(true);

	const installAppClick = () => {
		console.log("installAppClick deferredEvent", deferredEvent)
		if (deferredEvent) {
			deferredEvent.prompt();
			setinstallClick(true)
		}
		else {
			console.log(" deferredEvent undefined")
		}
	}

	useEffect(() => {

		window.addEventListener('beforeinstallprompt', (e) => {
			// prevent the browser from displaying the default install dialog
			e.preventDefault();

			// Stash the event so it can be triggered later when the user clicks the button
			deferredEvent = e;
			setallreadyInstall(deferredEvent === undefined)
		});
	})
	return (
		<>
			{installClick && <Button onClick={() => { router.push("/identification") }}>Continuer...</Button>}
			{!installClick && <Button onClick={installAppClick} className={allreadyInstall ? " hidden" : ""}>Installation de l&apos;application Course 53 </Button>}
			<div className={allreadyInstall ? " " : " hidden"}>Lancer Course 53 depuis la liste de vos applications</div>
		</>
	)
}
export default Installation



