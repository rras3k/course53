"use client"

import { Button } from "@/components/ui/button";
import { get } from "idb-keyval";


function ask() {
	let promise = Notification.requestPermission();
}



function getStateNotificationUser() {
	get("stateNotificationUser").then(() => {
		
	});
}


const Parametrage = () => {
	return (
		<>
			Parametrage
			<Button onClick={ask}>ask</Button>
			<Button onClick={unSubscribe}>unSubscribe</Button>
		</>
	)
}
export default Parametrage;




// self.addEventListener('pushsubscriptionchange', function () {
// 	// remove the entry from DB
// });