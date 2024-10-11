import { loadExampleListAll } from "@/lib/artaxi";
import { COURSE_STATUT_ANNULEE, COURSE_STATUT_CLOTUREE, COURSE_STATUT_A_FAIRE } from "@/lib/artaxi";
import { COURSE_FILTRE_A_FAIRE, COURSE_FILTRE_PROPOSITION, COURSE_FILTRE_CLOTUREE, COURSE_FILTRE_ANNULEE, COURSE_FILTRE_TOUTE } from "@/lib/artaxi";
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from "tailwind-merge";

export default function CourseAffichage({ filtreCourse }) {

	const datas = loadExampleListAll();


	// 			const buttonClass = clsx(
	// 				'px-4 py-2 rounded transition-colors',
	// 				{
	// 					'bg-blue-500 hover:bg-blue-600 text-white': primary,
	// 					'bg-gray-300 hover:bg-gray-400 text-gray-600':
	// 						!primary && !disabled,
	// 					'bg-gray-200 text-gray-400 pointer-events-none': disabled,
	// 				},
	//     ** props.className **
	// );


	if (!datas.retour) {
		return ("Erreur retour <> TRUE");
	}

	let rgp_course_id_before: string = "";
	let cpt: number = 0;
	let isCourseToDo: Boolean;
	return (
		<div className="flex flex-col text-xl">
			{datas.data.courses.map((course) => {
				isCourseToDo = false;
				console.log(filtreCourse);
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
						<div key={course.course_id} className={twMerge(divLevel1_className)} >
							<div className="flex">
								<div className="w-20 text-center font-bold">{course.first_takeover_date.substring(11, 16)}</div>
								<div className="col-span-4">{course.first_takeover_arret_libelle}</div>
							</div>
							<div className="flex">
								<div className="w-20 text-center text-gray-700">{course.last_dropoff_date.substring(11, 16)}</div>
								<div className="">{course.last_dropoff_arret_libelle}</div>
							</div>
							<div className="flex flex-row-reverse text-base h-5">
								<div className="w-20 text-center">{course.client_nb}</div>
								<div className="">{course.client_nom}</div>
							</div>
						</div>
					);
				}
			})}
		</div>
	)

}


