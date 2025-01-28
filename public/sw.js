const CACHE_NAME = "CACHE_V_1.00";
const DELAI_API_GET_COURSE = 15000;
// const URL_API_GET_ALL = "https://api.laval-test.algozzy.ovh/trips/today/"

let URL_API = ""
let token = ""

importScripts("/compat.js");

// let a = process.env.NEXT_PUBLIC_APP_ONLY
// console.log("aaa",a)

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


// Récupération toutes les 60 secondes d'un fichier JSON et mise en cache
function getListecourses() {
	const interval = setInterval(async () => {
		if (token === "") {
			get('token')
				.then((tokenBD) => {
					if (tokenBD != undefined) {
						token = tokenBD
						getListecourses2()
					}
				})
				.catch(e => {
					console.error("lecture cache errreur", e);
				})
		}
		else {
			getListecourses2()
		}
	}, DELAI_API_GET_COURSE);
	return () => clearInterval(interval)
}




function getListecourses2() {
	if (URL_API === "") {
		get('URL_API')
			.then((url) => {
				// console.log("Demande des courses ? ", token)
				if (url != undefined) {
					URL_API = url
					// console.log("Envoi de la demande des courses ", token);
					getListecourses3()

				}
			})
			.catch(e => {
			})
	}
	else
		getListecourses3()

}


async function getListecourses3() {
	try {
		const response = await fetch(
			URL_API + "/trips/today/",
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
				token = ""
				del('hasProposition')
				del('URL_API')
			}
			else {
				cache.put('/getListeCourses.json', new Response(JSON.stringify(data)));
				set('course_in_date', Date.now());
				if (dcHasProposition(data)) {
					console.log('public/sw.js > has notification')	
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



const dcIsIdent = (data) => {
	console.log('public/sw.js > data', data);

	if (data?.retour) return true;
	return false;
}

const dcHasProposition = (datas) => {
	let hasProposition = false;

	datas.data.courses.map((course) => {
		hasProposition = hasProposition || (course.course_status == "1" && (course.taxi_name == "" || course.taxi_name == null));
	});
	console.log('public/sw.js > hasProposition',hasProposition);
	
	set('hasProposition', hasProposition);
	sendNotification("Nouvelles proposition", "Affichez les courses jaunes");
	return hasProposition;
}


const sendNotification = async (title, text) => {
	get("stateDisplayNotification")
		.then((value) => {
			console.log("stateDisplayNotification value = ", value)
			if (value) {
				if (Notification.permission === 'granted') {
					showNotification(title, text);
				}
				else {
					if (Notification.permission !== 'denied') {
						Notification.requestPermission()
							.then((permission) => {
								if (permission === 'granted') {
									showNotification(title, text);
								}
							})
					}
				}
			}
		})
		.catch((e) => {
			console.log("error get(stateDisplayNotification)")
		})
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

