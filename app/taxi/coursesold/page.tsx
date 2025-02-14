"use client"

import CourseAffichage from '@/components/course-affichage';
// import isAuth from '@/components/isAuth';
// import { getFiltreCourse } from '@/lib/affinis';
import { useEffect, useState, useRef } from 'react';

import { get } from 'idb-keyval';
import { getHHMMSS } from '@/lib/rrasb2k/dateTime';
import {  useSearchParams } from 'next/navigation';
import { getFiltreCourse } from '@/lib/affinis';

// import { useRouter } from "next/navigation"
// import { getFirstTimeOutcourse, setFirstTimeOutcourse } from "@/lib/global";





function Home() {

   const [datas, setDatas] = useState(null);
   const [erreurState, setErreurState] = useState(true);
   const erreurRef = useRef(1)
   // const filtre = getFiltreCourse()

   const searchParams = useSearchParams();
	const filtre = getFiltreCourse(searchParams.get('filtre'));

   // const [data, setData] = useState([]);
   const [fetchDataTrigger, setFetchDataTrigger] = useState(0);
   const fetchDataIntervalId = useRef<ReturnType<typeof setTimeout> | undefined>();
   // const justOnce = useRef(true)

   console.log('app/taxi/page.tsx > ----------------------------- PAGE---------------------------------', fetchDataIntervalId.current);


   const setFetchDataInterval = (interval: number) => {
      // Clear old interval
      if (fetchDataIntervalId.current) {
         console.log('app/page.tsx > clearinterval 1', fetchDataIntervalId.current);
         clearInterval(fetchDataIntervalId.current);
         fetchDataIntervalId.current = undefined;
      }

      // Set new interval
      if (!fetchDataIntervalId.current) {
         // if (interval > 0) {
         // if (getFirstTimeOutcourse()) {
         //    setFirstTimeOutcourse(false)
         console.log('app/page.tsx > ********* création interval *****************');
         fetchDataIntervalId.current = setTimeout(() => {
            // console.log('app/page.tsx > NEW interval', fetchDataIntervalId.current);
            setFetchDataTrigger(Date.now());
         }, interval);
         // fetchDataIntervalId.current = setInterval(() => {
         //    console.log('app/page.tsx > NEW interval', fetchDataIntervalId.current);
         //    setFetchDataTrigger(Date.now());
         // }, interval);
         // }
      }
   };

   useEffect(() => {
      console.log('app/taxi/courses/page.tsx > ----------------------------- USEEFFECT---------------------------------', fetchDataIntervalId.current);

      try {
         get("course_in_date")
            .then(value => {
               console.log("course_in_date : ",value)
               if ((+(value) + 3600000) < Date.now()) {
                  console.log('erreur');
               }
               else {
                  const cacheName = "CACHE_V_1.00";
                  caches.open(cacheName)
                     .then((cache) => {
                        cache.match('/getListeCourses.json')
                           .then((response) => {
                              response?.json().then((data => {
                                 // setErreur(false)
                                 setErreurState(false)
                                 console.log('app/page.tsx > Et pourtant', erreurState);
                                 console.log("récupération des datas du cache ! ", getHHMMSS())
                                 setDatas(data);
                                 console.log('app/page.tsx > datas', datas);
                                 erreurRef.current = 2
                                 console.log('app/page.tsx > erreurRef.current', erreurRef.current);

                              }))
                           })
                           .catch((e) => {
                              console.log("erreur ", e)
                           })
                     })
                     .catch((e) => {
                        console.log("erreur ", e)
                     })
               }
            })
            .catch((e) => {
               console.log("erreur ", e)
            })
      }
      catch (e) {
         console.error("lecture cache errreur", e);
         console.log("erreur ")
      }

      // Clean up for unmount to prevent memory leak
      return () => {
         console.log('app/page.tsx > clearinterval 2', fetchDataIntervalId.current);
         // clearInterval(fetchDataIntervalId.current);
      }
   }, [fetchDataTrigger]);

   // if (getFirstTimeOutcourse()){
   // setFirstTimeOutcourse(true)
   setFetchDataInterval(15000)
   // }




   // useEffect(() => {
   //    console.log('app/page.tsx > ----------------------------- USEEFFECT---------------------------------');
   //    console.log('app/page.tsx > debu useeffect datas', datas);

   //    async function getCacheCourses() {
   //       try {
   //          get("course_in_date")
   //             .then(value => {
   //                if ((+(value) + 3600000) < Date.now()) {
   //                   console.log('erreur');
   //                }
   //                else {
   //                   const cacheName = "CACHE_V_1.00";
   //                   caches.open(cacheName)
   //                      .then((cache) => {
   //                         cache.match('/getListeCourses.json')
   //                            .then((response) => {
   //                               response?.json().then((data => {
   //                                  // setErreur(false)
   //                                  setErreurState(false)
   //                                  console.log('app/page.tsx > Et pourtant', erreurState);
   //                                  console.log("récupération des datas du cache ! ", getHHMMSS())
   //                                  setDatas(data);
   //                                  console.log('app/page.tsx > datas', datas);
   //                                  erreurRef.current = 2
   //                                  console.log('app/page.tsx > erreurRef.current', erreurRef.current);

   //                               }))
   //                            })
   //                            .catch((e) => {
   //                               console.log("erreur ", e)
   //                            })
   //                      })
   //                      .catch((e) => {
   //                         console.log("erreur ", e)
   //                      })
   //                }
   //             })
   //             .catch((e) => {
   //                console.log("erreur ", e)
   //             })
   //       }
   //       catch (e) {
   //          console.error("lecture cache errreur", e);
   //          console.log("erreur ")
   //       }
   //    }

   //    if (getFirstTimeOutcourse()) {
   //       setFirstTimeOutcourse(false)

   //       const interval = setInterval(async () => {
   //          console.log('~/projets/course53/app - page.tsx    interval', interval);
   //          getCacheCourses()
   //          return () => clearInterval(interval)
   //       }, 5000)
   //    }

   // }, [])


   // useEffect(() => {
   //    function getCacheCourses() {
   //       get("course_in_date")
   //          .then(value => {
   //             if ((+(value) + 3600000) < Date.now()) {
   //                console.log('erreur');
   //             }
   //             else {
   //                const cacheName = "CACHE_V_1.00";
   //                caches.open(cacheName).then((cache) => {
   //                   cache.match('/getListeCourses.json')
   //                      .then((response) => {
   //                         response?.json().then((data => {
   //                            // setErreur(false)
   //                            setErreurState(false)
   //                            console.log('app/page.tsx > Et pourtant', erreurState);
   //                            console.log("récupération des datas du cache ! ", getHHMMSS())
   //                            setDatas(data);
   //                            console.log('app/page.tsx > data', data);
   //                         }))
   //                      })
   //                      .catch((e) => {
   //                         console.log("erreur ")
   //                      })
   //                })
   //             }
   //          })
   //          .catch(e => {
   //             console.error("lecture cache errreur", e);
   //             console.log("erreur ")
   //          })
   //    }

   //    if (getFirstTimeOutcourse()) {
   //       setFirstTimeOutcourse(false)

   //       const interval = setInterval(async () => {
   //          console.log('~/projets/course53/app - page.tsx    interval', interval);
   //          getCacheCourses()
   //          return () => clearInterval(interval)
   //       }, 5000)
   //    }
   // }, [datas])
   // }, [])




   // useEffect(() => {
   //   if (getFirstTimeOutcourse()) {
   //     setFirstTimeOutcourse(false)
   //     const interval = setInterval(async () => {
   //       console.log('~/projets/course53/app - page.tsx    interval',interval);
   //       get("course_in_date")
   //         .then(value => {
   //           if ((+(value) + 3600000) < Date.now()) {
   //             console.log('erreur');
   //           }
   //           else {
   //             const cacheName = "CACHE_V_1.00";
   //             caches.open(cacheName).then((cache) => {
   //               cache.match('/getListeCourses.json')
   //                 .then((response) => {
   //                   response?.json().then((data => {
   //                     // setErreur(false)
   //                     erreurRef.current = 2
   //                     testRef.current =15
   //                     console.log('app/page.tsx > Et pourtant',erreurRef.current);

   //                     console.log("récupération des datas du cache ! ", getHHMMSS())
   //                     setDatas(data);
   //                     console.log('app/page.tsx > datas',datas);
   //                   }))
   //                 })
   //                 .catch((e) => {
   //                   console.log("erreur ")
   //                 })
   //             })
   //           }
   //         })
   //         .catch(e => {
   //           console.error("lecture cache errreur", e);
   //           console.log("erreur ")
   //         })
   //       return () => clearInterval(interval)
   //     }, 5000)
   //   }
   // }, [datas])
   // console.log('app/page.tsx > erreurRef.current', erreurRef.current);


   return (

      <>
         {erreurRef.current == 2 && <CourseAffichage filtreCourse={filtre} datas={datas} />}
         {erreurRef.current != 2 && <div>Récupération des courses</div>}
      </>


   )
}
export default Home;
