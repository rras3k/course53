"use client"

import CourseFiltre from '@/components/course-filtre';
import { Button } from '@/components/ui/button';
import {  Filter } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

type typeFiltreInfo = {
  name: string;
  color: string;
}

const filtreInfo: { [key: string]: typeFiltreInfo } = {};
filtreInfo['a-faire'] = { name: "A faire", color: "green" };
filtreInfo['propositions'] = { name: "PropositionsA faire", color: "yellow" };
filtreInfo['cloturees'] = { name: "Clôturées", color: "blue" };
filtreInfo['annulees'] = { name: "Annulées", color: "gray" };
filtreInfo['toutes'] = { name: "Toutes", color: "red" };

const getIconFiltreColor = (paraFiltre: string | null) => {
  let ret: string = "green";
  if (paraFiltre) {
    if (paraFiltre in filtreInfo) {
      ret = filtreInfo[paraFiltre].color;
    }
  }
  return ret;
}

const getIconBgColor = (color: string) => {
  return "bg-" + color + "-300";
}
const getIconStrokeColor = (color: string) => {
  return "stroke-" + color + "-700";
}
const getIconHoverColor = (color: string) => {
  return "hover:bg-" + color + "-500";
}
const getIconBorderColor = (color: string) => {
  return "border-" + color + "-500";
}
const getIconColors = (color: string) => {
  // return  getIconStrokeColor(color);
  return getIconBgColor(color) + " " + getIconStrokeColor(color) + " " + getIconBorderColor(color) + " " + getIconHoverColor(color);
}

export default function Home() {
  console.log("Home")
  const [iconFiltreColor, setIconFiltreColor] = useState("bg-green-300");
  const [isVisibleFiltre, setIsVisibleFiltre] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const paraFiltre: string | null = searchParams.get('filtre');
  const filtreInfoColor = getIconFiltreColor(paraFiltre);
  useEffect(() => {
    setIconFiltreColor(filtreInfoColor);
  }, [filtreInfoColor]);
  const toggleFiltre = () => {
    setIsVisibleFiltre(!isVisibleFiltre);
  }

  return (
    <>
      <div className="flex justify-center items-center bg-sky-100 h-14 ">
        <Button onClick={() => toggleFiltre()} className={getIconColors(iconFiltreColor) +" border h-12"}>
          <Filter strokeWidth={0.5} size={37} className={getIconStrokeColor(iconFiltreColor) + " align-middle content-center  rounded-lg "} />
        </Button>
        {/* <> courses....{search}</> */}
      </div>
      {isVisibleFiltre &&
        <CourseFiltre click={() => setIsVisibleFiltre(false)} />}
    </>

  );
}