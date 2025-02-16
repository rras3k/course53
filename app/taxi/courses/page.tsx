"use client"

import CourseAffichage from '@/components/course-affichage'
import { useRef, useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { getFiltreCourse } from '@/lib/affinis'
import { useCourseTaxiContext } from '@/providers/course-taxi-provider'

export default function Courses() {

   const [datas, setDatas] = useState(null)
   const [wait, setWait] = useState(true)
   // const [fetchDataTrigger, setFetchDataTrigger] = useState(0)
   // let dataCourses = null
   // const dejaFait = useRef<boolean>(false)
   const { courses, setCourses } = useCourseTaxiContext()



   const searchParams = useSearchParams();
   const filtre = getFiltreCourse(searchParams.get('filtre'))

   // if (!dejaFait.current) {
   //    dejaFait.current = true
   //    const channel = new BroadcastChannel('sw-courses-data')

   //    channel.addEventListener('message', event => {
   //       console.log('Received course-data', event.data)
   //       setDatas(event.data.datas)
   //       setWait(false)
   //    })
   // }
   useEffect(() => {
      if (courses?.datas) {
         setDatas(courses.datas)
         setWait(false)
      }
   }, [courses])

   return (
      <>
         {wait}
         {!wait && <CourseAffichage filtreCourse={filtre} datas={datas} />}
         {wait && <div>Récupération des courses</div>}
      </>


   )
}
