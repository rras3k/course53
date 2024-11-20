const CACHE_NAME = "CACHE_V_1.00";
const DELAI_API_GET_COURSE = 6000;
const URL_API_GET_ALL = "https://api.laval-test.algozzy.ovh/trips/today/"

importScripts("/compat.js");

const ASSETS_TO_CACHE = [
	'/manifest.json'
];


// Install the service worker and cache assets
self.addEventListener('install', (event) => {
	console.log('========================================== service worker ========= INSTALL');
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
	);
	// createStore('dbName', 'storeName')
	// set('token', 'worfezfezfzeld');

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
	// console.log('event ============================', event)
	if (event.request.method === "GET") {
		event.respondWith(
			caches.match(event.request).then((response) => {
				return (
					response ||
					fetch(event.request).then((fetchResponse) => {
						return caches.open(CACHE_NAME).then((cache) => {
							cache.put(event.request, fetchResponse.clone());
							return fetchResponse;
						});
					})
				);
			})
		);
	}
});

// Récupération toutes les 60 secondes d'un fichier JSON et mise en cache
function getListecourses() {
	// console.log("getListecourses")
	setInterval(async () => {
		get('token').then((token) => {
			// console.log("Demande des courses ? ", token)
			if (token != null) {
				// console.log("Envoi de la demande des courses ", token);
				getListecourses2(token)
				
			}
		});
	}, DELAI_API_GET_COURSE);
}
async function getListecourses2(token) {
	try {
		const response = await fetch(
			URL_API_GET_ALL,
			{
				headers: {
					'Authorization': `Bearer ${token}`,
					"Content-Type": "application/json",
				},
				method: 'GET'
			}
		);
		const data = await response.json();
		caches.open(CACHE_NAME).then((cache) => {
			del('course_in_date');
			cache.put('/getListeCourses.json', new Response(JSON.stringify(data)));
			set('course_in_date', Date.now());
		});
	}
	catch (e) {
		console.error("SEB",e);
	}
}
getListecourses();
