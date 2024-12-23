"use client"

import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';

let deferredEvent:typeof event | undefined = undefined;

const Installation = () => {

	const [allreadyInstall, setallreadyInstall] = useState(true);

	const installAppClick = () => {
		console.log("installAppClick deferredEvent", deferredEvent)
		if (deferredEvent) {
			deferredEvent.prompt();
		}
		else {
			console.log(" deferredEvent undefined")
		}
	}

	useEffect(()=> {

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
			<Button onClick={installAppClick} className={allreadyInstall ? " hidden" : ""}>Installation de l'application Course 53 </Button>
			<div className={allreadyInstall ? " " : " hidden"}>Lancer Course 53 depuis la liste de vos applications</div>
		</>
	)
}
export default Installation



