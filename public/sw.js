// const CACHE_NAME = "CACHE_V_1.00";
// const DELAI_API_GET_COURSE = 15000;
// const URL_API_GET_ALL = "https://api.laval-test.algozzy.ovh/trips/today/"


importScripts("/artaxisw.js");
// importScripts("/compat.js");

// let a = process.env.NEXT_PUBLIC_APP_ONLY
// console.log("aaa",a)

/*
vedayex428@gufutu.com
Wqa12zsx
https://tk14.info6.lnkml.com/r/?id=h554970bb,cc766bf,187167&p1=www.disonsdemain.fr/authent/mat.php?ibl=1430876347&enc=179478E4538FE7D19429AA5D6E08EAA64A7FC0F9ECDC1C010CB5DFB7751FB820430C538293A77083844C180DFEFAD7093DCC747C769CC1DA8CD852004272C5B744B0274D8EB29AE7D6D119D9727648F5&co=4001011&target=/home/index.php
*/

// -------------------------------------------------  GESTION SERVICE WORKER ---------------------------------------------------------------------


let URL_API = ""

const ASSETS_TO_CACHE = [
	'/manifest.json'
];

// Install the service worker and cache assets
self.addEventListener('install', (event) => {
	console.log('========================================== service worker ========= INSTALL');
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
	);
});

// Activate the service worker and clear old caches
self.addEventListener('activate', (event) => {
	console.log('========================================== service worker ========= ACTIVATE');
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames
					.filter((cacheName) => cacheName !== CACHE_NAME)
					.map((cacheName) => caches.delete(cacheName))
			);
		})
	);
});

self.addEventListener('fetch', (event) => {
	if (event.request.method === "GET") {
		event.respondWith(
			caches.match(event.request).then((response) => {
				return (
					response ||
					fetch(event.request)
						.then((fetchResponse) => {
							return caches.open(CACHE_NAME).then((cache) => {
								cache.put(event.request, fetchResponse.clone());
								return fetchResponse;
							});
						})
						.catch(e => {
							console.error("lecture cache errreur", e);
						})
				);
			})
		);
	}
});
self.addEventListener('load', () => {
});

