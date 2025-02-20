"use client"
import { Button } from "@/components/ui/button"
import CourseAffichage from '@/components/course-affichage'
import { notFound } from 'next/navigation'


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
import { tokenName } from "@/lib/affinis"



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
	const [isButtonsVisible, setIsButtonsVisible] = useState<boolean>(true)
	const [message, setMessage] = useState("")
	const [refresh, setRefresh] = useState<number>(0)



	let rgpId: string = "";

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


	function analyseRgp(datas): void {
		console.log("------------------------------------------------------- ANALYSED ------------------------------")
		datas.map((course) => {
			if (course.course_status !== "0") {
				if (course.course_status == "1" && course.taxi_name !== "" && course.taxi_name !== null) {
					console.log("------------------------------------------------------- A cloturer", course.taxi_name)
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

	async function buttonActionProposition(value: string) {
		setIsButtonsVisible(false)
		console.log("action proposition")
		const reponse = await fetch(
			process.env.NEXT_PUBLIC_API_URL + '/trip/proposal/answer'
			, {
				headers: {
					'Authorization': `Bearer ${localStorage.getItem(tokenName)}`,
					"Content-Type": "application/json",
				},
				method: 'POST',
				body: '{"rideId":"' + rgpId + '", "password":"' + value + '" }'
			}
		)
		const retour = await reponse.json();
		return retour

		// console.log("retour", rgpId, value, retour)
		// if (retour?.message) {
		// 	console.log("message", message)
		// 	setMessage(retour?.message)
		// }
		// setRefresh(Date.now())
	}




	function buttonActionCloturer() {

	}

	// analyseRgp(datas)
	useEffect(() => {
		console.log("-------------------------- USEEFFECT CourseAction -------------------------------")
		analyseRgp(datas)
		// setTitlea("Proposition de courses")
	}, [])

	// proposition
	useEffect(() => {
		console.log("-------------------------- USEEFFECT CourseAction refresh -------------------------------")

		async function doRequete() {
			const reponse = await fetch(
				process.env.NEXT_PUBLIC_API_URL + '/trip/proposal/answer'
				, {
					headers: {
						'Authorization': `Bearer ${localStorage.getItem(tokenName)}`,
						"Content-Type": "application/json",
					},
					method: 'POST',
					body: '{"rideId":"' + rgpId + '", "password":"' + value + '" }'
				}
			)
			const retour = await reponse.json();

			console.log("retour", rgpId, value, retour)
			if (retour?.message) {
				console.log("message", message)
				setMessage(retour?.message)
			}
		}
	}, [refresh])

	return (
		<>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>{title}</DialogTitle>
						<DialogDescription>{description}</DialogDescription>
					</DialogHeader>
					<CourseAffichage filtreCourse={filtre} datas={datas} clickable={false} />
					{!isButtonsVisible &&
						<div className="text-center">
							En attente d'une réponse du serveur
						</div>

					}
					<DialogFooter>
						{isButtonsVisible &&
							<>
								<Button className="mr-3" onClick={() => { setOpen(false) }}>Fermer</Button>
								{(typeAction === ActionType.Proposition) &&
									<>
										<Button onClick={() => { buttonActionProposition("0") }}>Refuser</Button>
										<Button onClick={() => { buttonActionProposition("1") }}>Accepter</Button>
									</>
								}
								{(typeAction === ActionType.ACloturer) &&
									<>
										<Button onClick={() => { buttonActionCloturer() }}>Cloturer</Button>
									</>
								}
							</>
						}
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	)
}

