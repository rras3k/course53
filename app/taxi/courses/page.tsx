"use client"

import CourseAffichage from '@/components/course-affichage'
import {  useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { getFiltreCourse } from '@/lib/affinis'

export default function Courses() {

   const [datas, setDatas] = useState(null)
   const [wait, setWait] = useState(true)
   // const [fetchDataTrigger, setFetchDataTrigger] = useState(0)
   // let dataCourses = null
   const dejaFait = useRef<boolean>(false)



   const searchParams = useSearchParams();
   const filtre = getFiltreCourse(searchParams.get('filtre'))

   if (!dejaFait.current) {
      dejaFait.current = true
      const channel = new BroadcastChannel('sw-courses-data')

      channel.addEventListener('message', event => {
         console.log('Received course-data', event.data)
         setDatas(event.data.datas)
         setWait(false)
      })
   }

   return (
      <>
         {wait}
         {!wait && <CourseAffichage filtreCourse={filtre} datas={datas} />}
         {wait && <div>Récupération des courses</div>}
      </>


   )
}
