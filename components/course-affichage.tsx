"use client"

import { loadExampleListAll } from "@/lib/artaxi";
import { COURSE_STATUT_ANNULEE, COURSE_STATUT_CLOTUREE, COURSE_STATUT_A_FAIRE } from "@/lib/artaxi";
import { COURSE_FILTRE_A_FAIRE, COURSE_FILTRE_PROPOSITION, COURSE_FILTRE_CLOTUREE, COURSE_FILTRE_ANNULEE, COURSE_FILTRE_TOUTE } from "@/lib/artaxi";
import { clsx } from 'clsx';
// import { type ClassValue, clsx } from 'clsx';
import { twMerge } from "tailwind-merge";
import CourseAction from "./course-action";
import { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import { set, get, del } from 'idb-keyval';


export default function CourseAffichage({ filtreCourse }) {
	// let datas = loadExampleListAll();
	const [datas, setDatas] = useState(null);
	const [open, setOpen] = useState(false);
	const [erreur, setErreur] = useState(true);
	const [courseInDate, setCourseInDate] = useState(null);

	useEffect(() => {
		const CACHE_NAME = "CACHE_V_1.00";
		console.log("lecture cache =========")
		get("course_in_date")
			.then(value => {
				setCourseInDate(value);
				console.log("lecture cache avec course_in_date", value);

				if ((+(value) + 3600000) < Date.now()) {
					console.info("problème de date ****");
					setErreur(true);
				}
				else {
					caches.open(CACHE_NAME).then((cache) => {
						cache.match('/getListeCourses.json')
							.then((response) => {
								response?.json().then((data => {
									console.info("info ----", data);
									setErreur(false);
									setDatas(data);
								}))
							})
							.catch((e) => {
								setErreur(true);
							})
					})
				}
			})
			.catch(e => {
				console.error("lecture cache errreur", e);
				setErreur(true);
			})
	}, [courseInDate])




	const clickRegroupement = () => {
		setOpen(true);
	}

	// if (!datas.retour) {
	// 	return ("Erreur retour <> TRUE");
	// }

	let cpt: number = 0;
	let rgp_course_id_before: string = "";
	let isCourseToDo: boolean;
	return (
		<>
			{
				erreur && <div className="">Courses pas encore chargées</div>
			}
			{
				!erreur && <div className="flex flex-col text-xl">
					{datas.data.courses.map((course) => {
						isCourseToDo = false;
						// console.log(filtreCourse);
						switch (filtreCourse) {
							case COURSE_FILTRE_A_FAIRE:
								if (course.course_status == "1")
									isCourseToDo = true;
								break;
							case COURSE_FILTRE_PROPOSITION:
								if (course.course_status == "1" && course.taxi_name == "")
									isCourseToDo = true;
								break;
							case COURSE_FILTRE_ANNULEE:
								if (course.course_status == "0")
									isCourseToDo = true;
								break;
							case COURSE_FILTRE_CLOTUREE:
								if (course.course_status == "2")
									isCourseToDo = true;
								break;
							case COURSE_FILTRE_TOUTE:
								isCourseToDo = true;
								break;
							default:
								break;
						}

						if (isCourseToDo) {
							const divLevel1_className = clsx(
								'border-t border-b border-black border-solid py-1',
								{
									'bg-green-200': course.course_status == COURSE_STATUT_A_FAIRE,
									'bg-blue-200': course.course_status == COURSE_STATUT_CLOTUREE,
									'bg-gray-200': course.course_status == COURSE_STATUT_ANNULEE,
									'bg-yellow-200': course.course_status == COURSE_STATUT_A_FAIRE && course.taxi_name == "",
									'mt-4': rgp_course_id_before != course.rgp_course_id,
									'border-t-0 border-black border-solid': rgp_course_id_before == course.rgp_course_id,
								}
							);
							rgp_course_id_before = course.rgp_course_id;
							cpt++;

							return (
								<div onClick={clickRegroupement} key={course.course_id} className={twMerge(divLevel1_className)} >
									<div className="flex">
										<div className="w-20 text-center font-bold">{course.first_takeover_date.substring(11, 16)}</div>
										<div className="col-span-4">{course.first_takeover_arret_libelle}</div>
									</div>
									<div className="flex">
										<div className="w-20 text-center text-gray-700">{course.last_dropoff_date.substring(11, 16)}</div>
										<div className="text-gray-700">{course.last_dropoff_arret_libelle}</div>
									</div>
									<div className="flex flex-row-reverse text-base h-5 text-gray-500">
										<div className="w-20 text-center">
											<Users strokeWidth={1} className="mr-2 inline mx-auto" size={17} />
											{course.client_nb}
										</div>
										<div className="">
											{course.client_nom}
										</div>
									</div>
								</div>
							);
						}
					})}
				</div>
			}
			{
				open && <CourseAction open={open} setOpen={setOpen} />
			}
		</>
	)
}



