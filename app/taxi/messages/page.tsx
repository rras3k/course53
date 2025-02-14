"use client"

// import isAuth from "@/components/isAuth";
import { useCourseTaxiContext } from "@/components/course-taxi-provider"
import { Button } from "@/components/ui/button";

export default function Messages() {
	const {hasProposition, setHasProposition} = useCourseTaxiContext()

	return (
		<>
			messages
			---{hasProposition && "ooooo"}----
			<Button onClick={()=>{setHasProposition(!hasProposition)}}>Inverse</Button>
		</>
	)
}
