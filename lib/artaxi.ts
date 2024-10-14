// ==================================================================== URL
export const URL_COURSE53_API = "https://api.laval-test.algozzy.ovh/identification"

// ==================================================================== ROUTE
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

// ==================================================================== COURSE
export const COURSE_STATUT_ANNULEE = "0";
export const COURSE_STATUT_A_FAIRE = "1";
export const COURSE_STATUT_CLOTUREE = "2";

import { listAll } from "@/data/example/list-all";
export const loadExampleListAll = () => {
	const data = listAll;
	return data;
}

// ==================================================================== FILTRE COURSE
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
	return searchParams.get('filtre') ? searchParams.get('filtre') : COURSE_FILTRE_A_FAIRE;
}
export const getFiltreCourseColor = () => {
	const filtrecourse: string | null = getFiltreCourse();
	if (filtrecourse) return colorFiltre[filtrecourse];
	return 'green';
}
export const getFiltreCourseFillColor = () => {
	const filtrecourse: string | null = getFiltreCourse();
	if (filtrecourse) return 'fill-' + colorFiltre[filtrecourse] + '-200';
	return '';
}

// ==================================================================== CONNEXION
export const deleteToken = (): void => {

}
export const isAuthentificated = (): boolean => {

	return true;
}

// =========================={========================================== APPEL API
type TypeIdentificationApi = {
	login: string;
	mdp: string;
	version_app_mobile: string;
}
export  async function identification(login: string | null, password: string | null) {
	const data = await fetch(
		`${URL_COURSE53_API}/identification`
		, {
			method: 'POST',
			body: '{"login":${login}, "password":${password}, "version_app_mobile":"1.0.0"}'
			// body: '{"login":${login}, "password":${password}, "version_app_mobile":"1.0.0"}'
		}
	)
	let posts = await data.json();
	console.log(posts);
}


export async function aIdentificationBis() {
	console.log("aIdentificationBis")
	const data = await fetch(
		'https://api.laval-test.algozzy.ovh/identification'
		, {
			method: 'POST',
			body: '{"login":"artaxi", "password":"6808", "version_app_mobile":"1.0.0"}'
		}
	)
	const posts = await data.json()
	// return (
	// 	<>
	// 	Message: { posts.message }
	// 	{ JSON.stringify(posts) }
	// </>
	// )
}
