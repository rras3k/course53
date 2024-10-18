"use client"

import { Identification } from "@/lib/artaxi";
import { useState, useEffect } from 'react'

// import Identification2 from "@/lib/artaxi";



export default function Test() {

	// let [posts, setPosts] = useState(null)


	useEffect(() => {
		async function fetchPosts() {
			const res = await Identification('artaxi', '6808');
			// setPosts(res)
		}
		fetchPosts()
	}, [])

	// const posts = await Identification2();
	// console.log(posts)


	return (
		<>
			yyyy
			{/* Message:{posts.message} */}
			{/* {JSON.stringify(posts)} */}
		</>
	)
}
