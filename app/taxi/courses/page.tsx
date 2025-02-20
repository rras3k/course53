"use client"

import CourseAffichage from '@/components/course-affichage'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { getFiltreCourse } from '@/lib/affinis'
import { useCourseTaxiContext } from '@/providers/course-taxi-provider'

export default function Courses() {

   const [datas, setDatas] = useState(null)
   const [wait, setWait] = useState(true)
   const { courses, setCourses } = useCourseTaxiContext()
   const searchParams = useSearchParams();
   const filtre = getFiltreCourse(searchParams.get('filtre'))

   useEffect(() => {
      if (courses?.datas) {
         setDatas(courses.datas)
         setWait(false)
      }
   }, [courses])

   return (
      <>
         {wait}
         {!wait && <CourseAffichage filtreCourse={filtre} datas={datas.data.courses} clickable={true}/>}
         {/* {!wait && <CourseAffichage filtreCourse={filtre} datas={datas} clickable={true}/>} */}
         {wait && <div>Récupération des courses</div>}
      </>


   )
}
