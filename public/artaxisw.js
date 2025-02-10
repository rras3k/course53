

importScripts("/compat.js");

const CACHE_NAME = "CACHE_V_1.00"
const DELAI_API_GET_COURSE = 15000
let token = ""
let profilId = ""
const PROFIL_TAXI = "1"


// function resetData() {
//     // Suppression du cache: Appels API serveur
//     caches.delete(CACHE_NAME).then(() => {
//         // le cache est maintenant supprimé
//         console.log('app/identification/page.tsx > CACHE_NAME est supprimé', CACHE_NAME);
//     });
//     // Suppression IndexedDB 
//     clear()
// }

function identClear() {
	logSW(" ============== RESET ===============")

	profilId = ""
	token = ""

	// Suppression du cache: Appels API serveur
	caches.delete(CACHE_NAME).then(() => {
		// le cache est maintenant supprimé
		console.log('app/identification/page.tsx > CACHE_NAME est supprimé', CACHE_NAME);
	});
	// Suppression IndexedDB 
	clear()
	// Suppression local.storage
	localStorage.clear();
}



// -------------------------------------------------  COURSES POUR UN TAXI ---------------------------------------------------------------------

const affConsoleSW = false;
function logSW(message, value){
	if(affConsoleSW)  console.log("SW  ----- "+message, value)
}

// Récupération toutes les 60 secondes d'un fichier JSON et mise en cache

function getListecourses() {
	logSW("SW getListecourses")
	const interval = setInterval(async () => {
		logSW("SW token 1", token)
		if (token === "") {
			get('token')
				.then((tokenBD) => {
					logSW("SW token 2",tokenBD)

					if (tokenBD != undefined) {
						logSW("SW récupération du token")
						token = tokenBD
						getListecourses2()
					}
				})
				.catch(e => {
					logSW("lecture token cache errreur", e);
					identClear() // On supprime tout dans indexDB et cache pour être rediriger par un middleware vers identification
				})
		}
		else {
			getListecourses2()
		}
	}, DELAI_API_GET_COURSE);
	return () => clearInterval(interval)
}

function getListecourses2() {
	logSW("SW getListecourses2")

	if (URL_API === "") {
		get('URL_API')
			.then((url) => {
				if (url != undefined) {
					URL_API = url
					getListecourses3()
				}
			})
			.catch(e => {
				console.error("lecture URL_API cache errreur", e);
				identClear() // On supprime tout dans indexDB et cache pour être rediriger par un middleware vers identification
			})
	}
	else
		getListecourses3()
}

function getListecourses3() {
	logSW("SW getListecourses3")

	if (profilId === "") {
		get('profilId')
			.then((profilIdVal) => {
				if (profilIdVal != undefined) {
					profilId = profilIdVal
					getListecourses4()
				}
			})
			.catch(e => {
				console.error("lecture token cache errreur", e);
				identClear() // On supprime tout dans indexDB et cache pour être rediriger par un middleware vers identification
			})
	}
	else {
		getListecourses4()
	}
}

async function getListecourses4() {
	logSW("SW getListecourses4")

	if (profilId === PROFIL_TAXI) {
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
				if (!data?.retour) { // la requete échoue par mauvaise identification
					identClear() // On supprime tout dans indexDB et cache pour être rediriger par un middleware vers identification
					token = ""
				}
				else {
					logSW("SW data ok")

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
}
getListecourses();



// const dcIsIdent = (data) => {
// 	console.log('public/sw.js > data', data);

// 	if (data?.retour) return true;
// 	return false;
// }

// -------------------------------------------------  NOTIFICATION ---------------------------------------------------------------------


const dcHasProposition = (datas) => {
	let hasProposition = false;

	datas.data.courses.map((course) => {
		hasProposition = hasProposition || (course.course_status == "1" && (course.taxi_name == "" || course.taxi_name == null));
	});
	console.log('public/sw.js > hasProposition', hasProposition);

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

