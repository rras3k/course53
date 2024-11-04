"use client"

import { Button } from "@/components/ui/button"

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
	return (
		<>
			coucou
			{/* Message: {posts.message}
			{JSON.stringify(posts)} */}
			<Button onClick={oo}>test</Button>
		</>
	)
}


async function oo() {
	// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxIiwiZGF0ZUNyZWF0aW9uIjoiMjAyNC0xMS0wNCAwMzowMDowMCJ9.Z6nepIuIczFPYnrKwo6rK7bNde8HD2jqHNZlwvz-Wnc'
	// console.log("oo")
	// try {
	// 	const data = await fetch(
	// 		'https://api.laval-test.algozzy.ovh/trips/today/'
	// 		, {
	// 			headers: {
	// 				"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxIiwiZGF0ZUNyZWF0aW9uIjoiMjAyNC0xMS0wNSAwMzowMDowMCJ9.fFqAmQuPaFMpD_BSKGaxvVmBlhB6w0HUhsXT7oQCeyU",
	// 				"Content-Type": "application/json",
	// 			},
	// 			method: 'GET',
	// 		}
	// 	)
	// }
	// catch (e) {
	// 	console.log("log",e)
	// 	console.error("error",e)
	// }

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