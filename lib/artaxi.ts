// COURSE
export const COURSE_STATUT_ANNULEE = "0";
export const COURSE_STATUT_A_FAIRE = "1";
export const COURSE_STATUT_CLOTUREE = "2";

import { listAll } from "@/data/example/list-all";
export const loadExampleListAll = () => {
	// const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
	// const data = JSON.parse(file);
	const data = listAll;
	return data;
}

// ROUTE
const route: { [key: string]: string } = {};
route['/'] = 'COURSES';
route['/course-filtre'] = 'FILTRE';
route['/messages'] = 'MESSAGES';
route['/aide'] = 'AIDE';
route['/plus'] = 'PLUS+';
route['/identification'] = 'IDENTIFICATION';
export const getTitle = (pathname: string) => {
	return route[pathname];
}



// FILTRE COURSE
import { useRouter, useSearchParams } from 'next/navigation';
export const COURSE_FILTRE_A_FAIRE = 'a-faire-et-propositions';
export const COURSE_FILTRE_PROPOSITION = 'propositions';
export const COURSE_FILTRE_CLOTUREE = 'cloturees';
export const COURSE_FILTRE_ANNULEE = 'annulees';
export const COURSE_FILTRE_TOUTE = 'toutes';

export const colorFiltre: { [key: string]: string } = {};
colorFiltre[COURSE_FILTRE_A_FAIRE] = 'green';
colorFiltre[COURSE_FILTRE_PROPOSITION] = 'yellow';
colorFiltre[COURSE_FILTRE_CLOTUREE] = 'blue';
colorFiltre[COURSE_FILTRE_ANNULEE] = 'gray';
colorFiltre[COURSE_FILTRE_TOUTE] = 'red';

export const getFiltreCourse = (): string | null => {
	const searchParams = useSearchParams();
	// const paraFiltre: string | null = searchParams.get('filtre');

	return searchParams.get('filtre') ? searchParams.get('filtre') : COURSE_FILTRE_A_FAIRE;
}
export const getFiltreCourseColor = () => {
	const filtrecourse: string | null = getFiltreCourse();
	// console.log('filtrecourse', filtrecourse)
	if (filtrecourse) return colorFiltre[filtrecourse];
	return 'green';
}
export const getFiltreCourseFillColor = () => {
	const filtrecourse: string | null = getFiltreCourse();
	// console.log('filtrecourse', filtrecourse)
	if (filtrecourse) return 'fill-' + colorFiltre[filtrecourse] + '-400';
	return '';
}


// CONNEXION
export const deleteToken = ():void => {

}
export const isAuthentificated = (): boolean => {
	
	return true;
}



// export default async function Page() {
// 	const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
// 	const data = JSON.parse(file);

// 	return (
// 		<div>
// 		<h1>{ data.title } </h1>
// 		< p > { data.content } </p>
// 		</div>
// 	);
// }

// type TypeCourseFiltreInfo = {
// 	color: string;
// 	url: string;
// 	label: string;
// 	bg_color: string;
// 	stroke_color: string;
// 	fill_color: string;
// }
// const coursFiltreInfo: { [key: string]: TypeCourseFiltreInfo } = {};
// coursFiltreInfo['a-faire'] = { label: "A faire", color: "green", isToDo: false };


// export const getCourseFiltreInfo = (): TypeCourseFiltreInfo => {
// 	let ret: TypeCourseFiltreInfo = { color:'green'};
// 	return ret;
// }