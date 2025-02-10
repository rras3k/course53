"use client"


import { useState, useRef, useEffect } from "react";
import { url_api_today_all, interval } from "@/lib/affinis";




function CoursesToutes() {

	const [fetchDataTrigger, setFetchDataTrigger] = useState(0);
	const fetchDataIntervalId = useRef<ReturnType<typeof setTimeout> | undefined>();

	const [dataCourses, setDataCourses] = useState(null);
	const erreurRef = useRef(1)
	// const justOnce = useRef(false)



	console.log("coursesToutes ----------------------------------------------------")

	function declencheur(): void {
		if (fetchDataIntervalId.current) {
			console.log('app/page.tsx > clearinterval 1', fetchDataIntervalId.current);
			clearInterval(fetchDataIntervalId.current);
			fetchDataIntervalId.current = undefined;
		}
		if (!fetchDataIntervalId.current) {
			// if (interval > 0) {
			// if (getFirstTimeOutcourse()) {
			//    setFirstTimeOutcourse(false)
			console.log('app/page.tsx > ********* création interval *****************');
			fetchDataIntervalId.current = setTimeout(() => {
				setFetchDataTrigger(Date.now())
			}, interval)
		}
	}


	useEffect(() => {
		console.log("UseEffect ----------------------------------------------------")
		fetch(process.env.NEXT_PUBLIC_API_URL + url_api_today_all, { method: 'GET' })
			.then((data) => {
				data.json()
					.then((value) => {
						console.log("today-all data", value)
						if (value.message === "") {
							setDataCourses(value.data);
						}
					})
					.catch((e) => {
						console.log("erreur json", e)
					})
			})
			.catch((e) => {
				console.log("erreur json", e)
			})
	}, [fetchDataTrigger])

	declencheur()

	return (
		<>
			Toutes les courses {erreurRef.current}
			{erreurRef.current == 2 && JSON.stringify(dataCourses)}
			{erreurRef.current != 2 && "Erreur"}
		</>
	)
}

export default CoursesToutes;