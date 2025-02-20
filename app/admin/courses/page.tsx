"use client"

import AllCourseAffichage from '@/components/all-course-affichage'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { getFiltreCourse } from '@/lib/affinis'
import { useAllCourseTaxiContext } from '@/providers/course-all-taxi-provider'


export default function Courses() {

   const [datas, setDatas] = useState(null)
   const [wait, setWait] = useState(true)
   const { courses, setCourses } = useAllCourseTaxiContext()
   const searchParams = useSearchParams();
   const filtre = getFiltreCourse(searchParams.get('filtre'))


   useEffect(() => {
      console.log("useeffect page admin/courses")
      if (courses) {
         setDatas(courses?.datas)
         setWait(false)
      }
   }, [courses])

   return (
      <>
         {wait}
         {!wait && <AllCourseAffichage filtreCourse={filtre} datas={datas} />}
         {wait && <div>Récupération des courses</div>}
      </>


   )
}
