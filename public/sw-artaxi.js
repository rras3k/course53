// Import des variables de base
importScripts("/sw-affinis.js");
importScripts("/compat.js");

// Mis en place du lecteur de message pour l'initialisation des variables pour le worker
const channelInitVar = new BroadcastChannel('sw-initvar')
channelInitVar.addEventListener('message', event => {
	console.log('Received sw-initvar', event.data)
	initVar(event.data)
	console.log("ca marche token = ", token)
});


function identClear() {
	logSW(" ============== RESET ===============")
	profilId = ""
	token = ""
	
	// Suppression du cache: Appels API serveur
	caches.delete(cacheName).then(() => {
		// le cache est maintenant supprimé
		console.log('app/identification/page.tsx > cacheName est supprimé', cacheName);
	});
	cacheName = ""
	// Suppression IndexedDB 
	// clear()
	// Suppression local.storage
	//localStorage.clear();
}

const affConsoleSW = false;
function logSW(message, value) {
	if (affConsoleSW) console.log("SW  ----- " + message, value)
}

// Récupération toutes les 60 secondes d'un fichier JSON et mise en cache
const channelHasNotification = new BroadcastChannel('sw-hasNotification');
const channelCourseData = new BroadcastChannel('sw-courses-data');
const channelToDeconnect = new BroadcastChannel('sw-to-deconnect');


function getListecourses() {
	logSW("SW getListecourses")
	const interval = setInterval(async () => {
		logSW("SW token 1", token)
		if (token === "" || profilId !== profilTaxi || urlApi === "") {
			// On supprime tout dans indexDB et cache pour être rediriger par un middleware vers identification
			identClear()
		}
		else {
			try {
				const response = await fetch(
					urlApi + "/trips/today/",
					{
						headers: {
							'Authorization': `Bearer ${token}`,
							"Content-Type": "application/json",
						},
						method: 'GET'
					}
				);
				const data = await response.json();
				if (!data?.retour) { // la requete échoue par mauvaise identification
					channelToDeconnect.postMessage({deconnect:true})
					identClear() // On supprime tout dans indexDB et cache pour être rediriger par un middleware vers identification
					token = ""
				}
				else {
					logSW("SW data ok")
					constdateNow = Date.now()
					console.log('public/artaxisw.js ------------------- > data', constdateNow)
					channelCourseData.postMessage({ datas: data, date: constdateNow })

					// cache.put('/getListeCourses.json', new Response(JSON.stringify(data)));
					lastCoursesDatasReceive = Date.now()
					// set('course_in_date', Date.now());
					if (dcHasProposition(data)) {
						console.log('public/artaxisw.js ------------------- > has notification', constdateNow)
						sendNotification("Nouvelles proposition", "Affichez les courses jaunes");
						channelHasNotification.postMessage({ hasProposition: true, date: constdateNow })
						// showNotification();
					}
				}



				// caches.open(cacheName).then((cache) => {
				// 	// del('course_in_date');
				// 	if (!data?.retour) { // la requete échoue par mauvaise identification
				// 		identClear() // On supprime tout dans indexDB et cache pour être rediriger par un middleware vers identification
				// 		token = ""
				// 	}
				// 	else {
				// 		logSW("SW data ok")
				// 		constdateNow = Date.now()
				// 		channelCourseData.postMessage({ datas: data, date: constdateNow })
				// 		console.log('public/artaxisw.js ------------------- > data', constdateNow)

				// 		// cache.put('/getListeCourses.json', new Response(JSON.stringify(data)));
				// 		lastCoursesDatasReceive = Date.now()
				// 		// set('course_in_date', Date.now());
				// 		if (dcHasProposition(data)) {
				// 			console.log('public/artaxisw.js ------------------- > has notification', hasProposition, constdateNow)
				// 			sendNotification("Nouvelles proposition", "Affichez les courses jaunes");
				// 			channelHasNotification.postMessage({ hasProposition: true, date: constdateNow })
				// 			showNotification();
				// 		}
				// 	}
				// });
			}
			catch (e) {
				console.error("ERREUR /trips/today/", e);
			}
		}
	}, delaiApiGetCourse);
	return () => clearInterval(interval)
}
getListecourses();

const dcHasProposition = (datas) => {
	let hasProposition = false;
	datas.data.courses.map((course) => {
		hasProposition = hasProposition || (course.course_status == "1" && (course.taxi_name == "" || course.taxi_name == null));
	});
	return hasProposition;
}

const sendNotification = async (title, text) => {
	get("stateDisplayNotification")
		.then((value) => {
			// console.log("stateDisplayNotification value = ", value)
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
			console.log("error get(stateDisplayNotification)", e)
			set("stateDisplayNotification",true)

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

