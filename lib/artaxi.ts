'use client'

import { getAppVersion } from "./rrasb2k/app";
import { set, del, clear } from 'idb-keyval';
import { TOKEN, Ident, Filtre_course_url_query } from "./affinis";

// ==================================================================== URL
export const CACHE_NAME = "cache_" + getAppVersion()

// ==================================================================== IDENTIFICATION

export function identSet(identData: Ident): boolean {

	//indexDB pour le service worker
	set(TOKEN, identData.token);
	set("profilId", identData.profilId);
	set("nom", identData.nom);
	set("prenom", identData.prenom);

	// Local storage pour le reste de l'application
	localStorage.setItem(TOKEN, identData.token);
	localStorage.setItem("profilId", identData.profilId);
	localStorage.setItem("nom", identData.nom);
	localStorage.setItem("prenom", identData.prenom);


	// set(TOKEN, "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxIiwiZGF0ZUNyZWF0aW9uIjoiMjAyNC0xMS0yMCAwMzowMDowMCJ9.9Rwd_JiW85VciNoSpm-kQMJdlMuRXULnXQhCxl8RNn8");
	return true;
}

export async function identClear() {
	// Suppression du cache: Appels API serveur
	caches.delete(CACHE_NAME) 

	// Suppression dans IndexedDB 
	clear()

	// Suppression local.storage
	localStorage.clear();
}

export function hasPropositionDelete(): void {
	del("hasProposition");
}


export function identGetProfilId() {
	return localStorage.getItem("profilId")
}


