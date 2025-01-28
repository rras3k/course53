"use client"




export default function coursesToutes() {
	   
	   const [datas, setDatas] = useState(null);
	   const [erreurState, setErreurState] = useState(true);
	   const erreurRef = useRef(1)
	   let filtre = getFiltreCourse()
	   
	   
	   // const [data, setData] = useState([]);
	   const [fetchDataTrigger, setFetchDataTrigger] = useState(0);
	   const fetchDataIntervalId = useRef<ReturnType<typeof setTimeout> | undefined>();
	   const justOnce = useRef(true)
	   
	   console.log('app/page.tsx > ----------------------------- PAGE---------------------------------',fetchDataIntervalId.current);
	
	
	   const setFetchDataInterval = (interval: number) => {
		  // Clear old interval
		  if (fetchDataIntervalId.current) {
			 console.log('app/page.tsx > clearinterval 1', fetchDataIntervalId.current);
			 clearInterval(fetchDataIntervalId.current);
			 fetchDataIntervalId.current = undefined;
		  }
	
		  // Set new interval
		  if (!fetchDataIntervalId.current) {
			 console.log('app/page.tsx > ********* création interval *****************');
			 fetchDataIntervalId.current = setTimeout(() => {
				console.log('app/page.tsx > NEW interval', fetchDataIntervalId.current);
				setFetchDataTrigger(Date.now());
			 }, interval);
		  }
	   };
	
	   useEffect(() => {
		  console.log('app/page.tsx > ----------------------------- USEEFFECT---------------------------------', fetchDataIntervalId.current );
	
		  try {
			 get("course_in_date")
				.then(value => {
				   if ((+(value) + 3600000) < Date.now()) {
					  console.log('erreur');
				   }
				   else {
					  const CACHE_NAME = "CACHE_V_1.00";
					  caches.open(CACHE_NAME)
						 .then((cache) => {
							cache.match('/getListeCourses.json')
							   .then((response) => {
								  response?.json().then((data => {
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
		  }
	   }, [fetchDataTrigger]);
	
	   setFetchDataInterval(15000)
	
	   return (
		  <>
			 {erreurRef.current == 2 && <CourseAffichage filtreCourse={filtre} datas={datas} />}
			 {erreurRef.current != 2 && <div>Erreur de récupération des courses</div>}
		  </>
	   )
}

