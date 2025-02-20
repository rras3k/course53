"use client"
import { Button } from "@/components/ui/button"
import CourseAffichage from '@/components/course-affichage'

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { useEffect, useState } from "react";


export default function CourseAction({ open, setOpen, datas, filtre }) {
	console.log("------------------------------------------------------- CourseAction ------------------------------")

	enum ActionType {
		Inconnue = 0,
		ACloturer = 2,
		Proposition = 1,
	}
	const [typeAction, setTypeAction] = useState<number>(ActionType.Inconnue)
	const [title, setTitle] = useState<string>("")
	const [titlea, setTitlea] = useState<string>("")
	const [description, setDescription] = useState<string>("")
	const [buttonLabel, setButtonLabel] = useState<string>("")



	let rgpId = null;

	function setACloturer() {
		setTypeAction(ActionType.ACloturer)
		setButtonLabel("Oui, je cloture !")
		setTitle("Cloture de regroupement")
		setDescription("Voulez vous cloturer ce regroupement de courses ?")
	}
	function setProposition() {
		setTypeAction(ActionType.Proposition)
		setButtonLabel("Oui je prends !")
		setTitle("Proposition de courses")
		setDescription("Voulez vous prendre ce regroupement de courses ?")
	}


	function analyseRgp(datas):void {
		console.log("------------------------------------------------------- ANALYSED ------------------------------")
		datas.map((course) => {
			if (course.course_status !== "0") {
				if (course.course_status == "1" && course.taxi_name !== "" ) {
					console.log("------------------------------------------------------- A cloturer")
					setACloturer()
					return null
				}
				if (course.course_status == "1" && (course.taxi_name == "" || course.taxi_name == null)) {
					console.log("------------------------------------------------------- proposition")
					setProposition()
				}
				rgpId = course.rgp_course_id
			}
		})
	}

	// useEffect(() => {
	// 	console.log("---------------------- USEEFFECT ---------------------------")
	// 	switch (typeAction) {
	// 		case ActionType.ACloturer:
	// 			console.log("---------------------- USEEFFECT A CLOTURER ---------------------------")
	// 			setButtonLabel("Oui, je cloture !")
	// 			setTitle("Cloture de regroupement")
	// 			setDescription("Voulez vous cloturer ce regroupement de courses ?")
	// 			break;

	// 		case ActionType.Proposition:
	// 			setButtonLabel("Cloturer ce regroupement ?Oui je prends !")
	// 			setTitle("Proposition de courses")
	// 			setDescription("Voulez vous prendre ce regroupement de courses ?")
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// }, [typeAction])

	function ouiJeFais() {

		switch (typeAction) {
			case ActionType.Proposition:
				console.log("action proposition")
				break;
			case ActionType.ACloturer:
				console.log("action cloturer")
				break;

			default:
				break;
		}
		if (typeAction === 0) {
			// probleme
		}
		else {

		}

	}

	// analyseRgp(datas)
	useEffect(()=>{
		analyseRgp(datas)
		// setTitlea("Proposition de courses")
	},[])

	return (
		<>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>{title}</DialogTitle>
						<DialogDescription>{description}</DialogDescription>
					</DialogHeader>
					<CourseAffichage filtreCourse={filtre} datas={datas} clickable={false} />
					<DialogFooter>
						<Button className="mr-3" onClick={() => { setOpen(false) }}>Fermer</Button>
						<Button onClick={() => { ouiJeFais() }}>{buttonLabel}</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	)
}

