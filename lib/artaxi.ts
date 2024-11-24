'use client'
import { useSearchParams } from 'next/navigation';
// import { cache } from "react";
import { getAppVersion } from "./app";
import { set, get, del } from 'idb-keyval';
// import util from 'node:util';




// ==================================================================== URL
export const CACHE_NAME = "cache_" + getAppVersion()

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
import { isUndefined } from 'util';
export const loadExampleListAll = () => {
	// 
	const data = listAll;
	return data;
}

// ==================================================================== FILTRE COURSE

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
export const TOKEN: string = "token";

export const identDeleteToken = (): void => {
	del(TOKEN);
}

export const identSetToken = (token: string): boolean => {
	set(TOKEN, token);
	// set(TOKEN, "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxIiwiZGF0ZUNyZWF0aW9uIjoiMjAyNC0xMS0yMCAwMzowMDowMCJ9.9Rwd_JiW85VciNoSpm-kQMJdlMuRXULnXQhCxl8RNn8");
	return true;
}

export const identGetToken = new Promise<string | null>((resolve, reject) => {
	get(TOKEN)
		.then(value => {
			if (value.isUndefined) reject(null)
			else resolve(value);
		})
		.catch(e => {
			// reject(null)
			throw new Error('Pas de encore de token enregistré');
		})
})

export const identIsAut = new Promise<boolean>((resolve, reject) => {
	// console.log("identIsAut" )

	get(TOKEN)
		.then(value => {
			// console.log("identIsAut then", TOKEN)
			if (value == undefined) resolve(false)
			if (value == null) resolve(false)
			else resolve(true);
		})
		.catch(e => {
			console.log("identIsAut catch", TOKEN)
			reject(e)
		})
})


// ==================================================================== APPEL API
export async function identAskServer(login: string, mdp: string) {
	const data = await fetch(
		process.env.NEXT_PUBLIC_API_URL + '/identification'
		, {
			method: 'POST',
			body: '{"login":"' + login + '", "password":"' + mdp + '", "version_app_mobile":"1.0.0"}'
		}
	)
	return await data.json();
}


export const dcIsEmpty= () => {

}