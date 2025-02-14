'use client'

import { getAppVersion } from "./rrasb2k/app";
// import { set, del, clear } from 'idb-keyval';
import { token, Ident} from "./affinis";

// ==================================================================== URL
export const cacheName = "cache_" + getAppVersion()

// ==================================================================== IDENTIFICATION

export function identSet(identData: Ident): boolean {

	//indexDB pour le service worker
	// set(token, identData.token);
	// set("profilId", identData.profilId);
	// set("nom", identData.nom);
	// set("prenom", identData.prenom);

	// Local storage pour le reste de l'application
	localStorage.setItem(token, identData.token);
	localStorage.setItem("profilId", identData.profilId);
	localStorage.setItem("lastname", identData.nom);
	localStorage.setItem("firstname", identData.prenom);


	// set(token, "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxIiwiZGF0ZUNyZWF0aW9uIjoiMjAyNC0xMS0yMCAwMzowMDowMCJ9.9Rwd_JiW85VciNoSpm-kQMJdlMuRXULnXQhCxl8RNn8");
	return true;
}

export async function identClear() {
	// Suppression du cache: Appels API serveur
	caches.delete(cacheName) 

	// Suppression dans IndexedDB 
	//clear()

	// Suppression local.storage
	localStorage.clear();
}

// export function hasPropositionDelete(): void {
// 	del("hasProposition");
// }


export function identGetProfilId() {
	return localStorage.getItem("profilId")
}


