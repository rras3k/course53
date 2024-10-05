"use client"

import CourseFiltre from '@/components/course-filtre';
import { useSearchParams } from 'next/navigation';

import { useState, useEffect } from 'react';


export default function Home(isShow: boolean) {
  const searchParams = useSearchParams();
  let search: string | null;
  search = searchParams.get('filtre');



  return (
    <>
       {/* <> courses....{search}</> */}
      {isShow &&
        <CourseFiltre />}
    </>

  );
}
