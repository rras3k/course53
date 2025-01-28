"use client"

import { Button } from "@/components/ui/button"
import { getHHMM, getHHMMSS } from "@/lib/rrasb2k/dateTime";
import { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getFirstTimeOutcourse, setFirstTimeOutcourse } from "@/lib/global";



export default function test() {
	const router = useRouter()
	const [state1, setstate1] = useState<string>("")
	const [state2, setstate2] = useState<string>("")
	const [heure, setheure] = useState<string>("")
	const [intervalEncours, setintervalEncours] = useState(false)
	const testRef = useRef(1)
	// const [interval, setinterval] = useState<(NodeJS.Timeout)[]>([])



	console.log("-------------------------------------------------------------------- log 1")
	console.log("state1", state1)

	const btnClick = () => {
		 setstate1(getHHMMSS())
		// setstate2(getHHMMSS())
		// document.location.replace("/aide")


	}

	const btnClick2 = () => {
		router.push("/aide");
	}


	// console.log("getFirstTimeOutcourse", getFirstTimeOutcourse())
	// if (getFirstTimeOutcourse()) {
	// 	setFirstTimeOutcourse(false)
	// 	console.log("Dans getFirstTimeOutcourse", getFirstTimeOutcourse())
	// 	const intervalTmp = setInterval(async () => {
	// 		console.log("interval", intervalTmp)
	// 		setheure(getHHMMSS())
	// 		return () => clearInterval(intervalTmp)
	// 	}, 5000)
	// }


	return (
		<>
			<div>
				State 1 : {state1}
			</div>
			<div>
				State 2 : {state2}
			</div>
			<div>
				Heure : {heure}
			</div>
			<Button onClick={btnClick}>Test</Button>
			<Button onClick={btnClick2}>Push Aide</Button>
			<Link href="/aide">link</Link>


		</>
	)
}




