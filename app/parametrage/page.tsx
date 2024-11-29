"use client"

import { Button } from "@/components/ui/button";


function ask() {
	let promise = Notification.requestPermission();
}

async function  unSubscribe() {
	const registration = await navigator.serviceWorker.ready;
	const subscription = await registration.pushManager.getSubscription();
	await subscription.unsubscribe();
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