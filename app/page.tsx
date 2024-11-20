"use client"

import CourseAffichage from '@/components/course-affichage';
import isAuth from '@/components/isAuth';
import { getFiltreCourse } from '@/lib/artaxi';


function Home() {
  return (
    <>
      <CourseAffichage filtreCourse={getFiltreCourse()} />
    </>

  );
}
export default Home;
