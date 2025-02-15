let cacheName = "CACHE_V_1.00"
let delaiApiGetCourse = 15000
let token = ""
let profilId = ""
let profilTaxi = "1"
let urlApi = ""

let lastCoursesDatasReceive =null



function initVar(initDatas) {
    cacheName = initDatas.cacheName
    delaiApiGetCourse = initDatas.delaiApiGetCourse
    token = initDatas.token
    profilId = initDatas.profilId
    urlApi = initDatas.urlApi
}