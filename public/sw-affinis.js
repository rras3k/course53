let cacheName = "CACHE_V_1.00"
let delaiApiGetCourse = 15000
let token = ""
let profilId = ""
let profilTaxi = "1"
let urlApi = ""

// Mis en place du lecteur  de message pour l'initialisation des variables pour le worker
const channelInitVar = new BroadcastChannel('sw-initvar')
channelInitVar.addEventListener('message', event => {
    console.log('Received sw-initvar', event.data)
    initVar(event.data)
});


function initVar(initDatas) {
    cacheName = initDatas.cacheName
    delaiApiGetCourse = initDatas.delaiApiGetCourse
    token = initDatas.token
    profilId = initDatas.profilId
    urlApi = initDatas.urlApi
}