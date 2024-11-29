const CACHE_NAME = "CACHE_V_1.00";
const DELAI_API_GET_COURSE = 15000;
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
	// console.log("toto,",)
	// toto();
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

self.addEventListener('load', () => {

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
			if (!dcIsIdent(data)) { // la requete échoue par mauvaise identification
				del('token') // on supprime le token encours pour ne plus refaire de requete
			}
			else {
				cache.put('/getListeCourses.json', new Response(JSON.stringify(data)));
				set('course_in_date', Date.now());
				if (dcHasProposition(data)) {

					showNotification();
				}
			}
			// console.log("isIDent", isIdent);
		});
	}
	catch (e) {
		console.error("SEB", e);
	}
}
getListecourses();

/* 
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxIiwiZGF0ZUNyZWF0aW9uIjoiMjAyNC0xMS0yMCAwMzowMDowMCJ9.9Rwd_JiW85VciNoSpm-kQMJdlMuRXULnXQhCxl8RNn8
*/


const dcIsIdent = (data) => {
	console.log(data)
	if (data?.retour) return true;
	return false;
}

const dcHasProposition = (datas) => {
	let hasProposition = false;

	datas.data.courses.map((course) => {
		hasProposition = hasProposition || (course.course_status == "1" && (course.taxi_name == "" || course.taxi_name == null));
	});
	console.log("hasProposition", hasProposition);
	set('hasProposition', hasProposition);
	sendNotification("Nouvelles proposition", "Affichez les courses jaunes");
	return hasProposition;
}


const sendNotification = async (title, text) => {
	if (Notification.permission === 'granted') {
		showNotification(title, text);
	}
	else {
		if (Notification.permission !== 'denied') {
			const permission = await Notification.requestPermission();

			if (permission === 'granted') {
				showNotification(title, text);
			}
		}
	}
};
const showNotification = async (title, text) => {
	if (title && text) {
		const payload = {
			body: String(text),
			icon: "/icons/icon-192x192.png",
			requireInteraction: true

		};
		if ('showNotification' in registration) {
			registration.showNotification(String(title), payload);
		}
		else {
			new Notification(String(title), payload);
		}
	}
};

// const payload = {
// 	body: text,
// 	icon: "/icons/icon-192x192.png",
// 	requireInteraction: true,
// 	tag: "vibration-sample",
// 	renotify: true
// tag: 'renotify',
// 	renotify: true
// };


// actions: [
// 	{
// 		action: 'coffee-action',
// 		title: 'Coffee',
// 		type: 'button',
// 		icon: '/images/demos/action-1-128x128.png',
// 	}
// ]