"use client"

// import CourseFiltre from '@/components/course-filtre';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import CourseAffichage from '@/components/course-affichage';
import { getFiltreCourse } from '@/lib/artaxi';

export default function Home() {
  console.log("Home")
  const [iconFiltreColor, setIconFiltreColor] = useState("bg-green-300");
  const [isVisibleFiltre, setIsVisibleFiltre] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const paraFiltre: string | null = searchParams.get('filtre');

  const toggleFiltre = () => {
    setIsVisibleFiltre(!isVisibleFiltre);
  }

  return (
    <>
      <CourseAffichage filtreCourse={getFiltreCourse()} />
    </>

  );
}

