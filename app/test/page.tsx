"use client"

import { Button } from "@/components/ui/button"
import { identGetToken, identIsAut } from "@/lib/artaxi";
import { useEffect } from "react";

let registration;

const sendNotification = async () => {
	if (Notification.permission === 'granted') {
		showNotification("notification.value");
	}
	else {
		if (Notification.permission !== 'denied') {
			const permission = await Notification.requestPermission();

			if (permission === 'granted') {
				showNotification("notification.value");
			}
		}
	}
};

const showNotification = body => {
	const title = 'What PWA Can Do Today';

	const payload = {
		body
	};

	if ('showNotification' in registration) {
		registration.showNotification(title, payload);
	}
	else {
		new Notification(title, payload);
	}
};

export default function Getall() {
	// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxIiwiZGF0ZUNyZWF0aW9uIjoiMjAyNC0xMS0wNCAwMzowMDowMCJ9.Z6nepIuIczFPYnrKwo6rK7bNde8HD2jqHNZlwvz-Wnc'
	// let data = await fetch(
	// 	'https://api.laval-test.algozzy.ovh/trips/today/'
	// 	, {
	// 		headers: {
	// 			Authorization: `Bearer ${token}`
	// 		},
	// 		method: 'GET'
	// 	}
	// )
	// let posts = await data.json()
	// oo()s

	const test3 = () => {
		Notification.requestPermission().then(permission => {
			if (permission == 'granted') {
				new Notification("Example Notification", {
					body: "The content of the notification.",
					icon: "/icons/icon-192x192.png",
					tag: "vibration-sample",
				})
			}
		})
	}


	const test4 = () => {
		navigator.serviceWorker.getRegistration().then(() => {
			
		})
	}

	const tt = async () => {
		registration = await navigator.serviceWorker.getRegistration();

	}

	useEffect(() => {

	})



	return (
		<>
			coucou
			{/* Message: {posts.message}
			{JSON.stringify(posts)} */}
			<Button onClick={test2}>test2</Button>
			<Button onClick={test3}>test3</Button>
			<Button onClick={showNotification}>test4</Button>
		</>
	)
}




function test2() {
	identIsAut
		.then((value) => {
			console.log("test2", value)
		})
		.catch((e) => {
			console.log("e", e)
		})
}


async function test1() {
	const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxIiwiZGF0ZUNyZWF0aW9uIjoiMjAyNC0xMS0wNCAwMzowMDowMCJ9.Z6nepIuIczFPYnrKwo6rK7bNde8HD2jqHNZlwvz-Wnc'
	console.log("oo")
	try {
		const data = await fetch(
			'https://api.laval-test.algozzy.ovh/trips/today/'
			, {
				headers: {
					"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxIiwiZGF0ZUNyZWF0aW9uIjoiMjAyNC0xMS0wNSAwMzowMDowMCJ9.fFqAmQuPaFMpD_BSKGaxvVmBlhB6w0HUhsXT7oQCeyU",
					"Content-Type": "application/json",
				},
				method: 'GET',
			}
		)
	}
	catch (e) {
		console.log("log", e)
		console.error("error", e)
	}

}

/*
mode: "cors",
					"Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",

					"Access-Control-Allow-Credentials":true

				credentials: "include",
					"Access-Control-Allow-Headers": "Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",

"Access-Control-Allow-Credentials":"true",
					"Access-Control-Allow-Origin":"*",
					"Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
					"Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
*/