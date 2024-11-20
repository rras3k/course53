"use client"

import { Filter, Menu, X, RefreshCw } from 'lucide-react';
import Image from "next/image";
import imgHome from "@/public/icons/icon-48x48.png";
import { Button } from "./ui/button";
import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { getFiltreCourseColor, getFiltreCourseFillColor, getTitle } from "@/lib/artaxi";
import { identDeleteToken } from "@/lib/artaxi";
import { clsx } from 'clsx';
import { twMerge } from "tailwind-merge";
import Version from "./version";
import MenuApp from './menu-app';

export function NavHor() {

	const router = useRouter();

	const [openMenu, setOpenMenu] = useState(false);

	// navigation mobile
	const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);
	// affichage de la deconnexion
	const [isShowDeconnexion, setIsShowDeconnexion] = useState(false);
	const [filtreCourseFillColor, setFiltreCourseFillColor] = useState('');
	const [filtreCourseColor, setFiltreCourseColor] = useState('bg-green-400');
	const [updateCourseColor, setUpdateCourseColor] = useState('bg-green-400');
	const [afficheUpdate, setAfficheUpdate] = useState(true);

	const goAndClose = (url: string) => {
		setIsNavMobileOpen(false);
		router.push(url);
	}

	const clickUpdate = () => {

	}

	// titre de la barre
	const path = usePathname();
	const [title, setTitle] = useState("Courses");
	useEffect(() => {
		setTitle(getTitle(path));
	}, [path]);

	// Couleur du filtre course
	const myFiltreCourseFillColor = getFiltreCourseFillColor();
	const searchParams = useSearchParams();
	const filtre = searchParams.get('filtre');
	useEffect(() => {
		setFiltreCourseFillColor(myFiltreCourseFillColor);
	}, [filtre]);

	const filtreColor = getFiltreCourseColor();
	useEffect(() => {
		setFiltreCourseColor('bg-' + filtreColor + '-200');
	}, [filtreColor]);

	const iconHome_className = clsx(
		'mx-3 flex-none',
		{
			'bg-yellow-200': false,
		}
	);
	const pahtName = usePathname();
	const isShowFiltre: boolean = (pahtName == "/" || pahtName == "");
	console.log("openMenu", openMenu);
	return (
		<>
			{
				openMenu && <MenuApp openMenu={openMenu} setOpenMenu={setOpenMenu} pathName={pahtName} setIsShowDeconnexion={setIsShowDeconnexion} />
			}
			<nav className="h-12 fixed w-full bg-sky-700">

				{/* Version mobile */}
				{/* <div className="md:hidden flex content-center"> */}

				<div className="flex content-center mx-auto md:w-[768px]">
					<Image className={twMerge(iconHome_className)} src={imgHome} alt="Home" />
					<div className="flex-auto flex items-center justify-center">
						<div className=" text-lg content-center text-center font-bold text-white">
							{title}
						</div>
					</div>
					{afficheUpdate &&
						<div onClick={() => router.push('/filtre=' + { filtre })} className={` ${updateCourseColor}  mx-2 w-10 flex-none  border rounded-md h-10 content-center my-auto  border-0`} >
							<RefreshCw strokeWidth={1} className={` ${filtreCourseFillColor} stroke-sky-700 mx-auto`} size={32} />
						</div>
					}
					{isShowFiltre &&
						<div onClick={() => router.push('/course-filtre')} className={` ${filtreCourseColor}  mx-2 w-10 flex-none  border rounded-md h-10 content-center my-auto  border-0`} >
							<Filter strokeWidth={1} className={` ${filtreCourseFillColor} stroke-sky-700 mx-auto`} size={32} />
						</div>
					}
					{isNavMobileOpen && <div onClick={() => setIsNavMobileOpen(false)} className="mx-2 w-10 flex-none border-sky-100 border rounded-md h-10 content-center my-auto border-0" >
						<X strokeWidth={1} className="stroke-white mx-auto" size={36} />
					</div>}

					{/* {!isNavMobileOpen && <div onClick={() => setIsNavMobileOpen(true)} className="mx-2 w-10 flex-none border-sky-100 border rounded-md h-10 content-center my-auto border-0" >
						<Menu strokeWidth={1} className="stroke-white mx-auto" size={36} />
					</div>} */}
					<div onClick={() => setOpenMenu(true)} className="mx-2 w-10 flex-none border-sky-100 border rounded-md h-10 content-center my-auto border-0" >
						<Menu strokeWidth={1} className="stroke-white mx-auto" size={36} />
					</div>
				</div>

				{/* Version ecran large */}
				{/* <div className="hidden md:flex justify-between w-[768px] mx-auto h-full   justify-items-center  align-baseline ">
					<div className="">
						<Image className=" my-auto" src={imgHome} alt="Home" />
						<Version />
					</div>
					<div onClick={() => goAndClose('/')} className=" my-auto" >
						<Button className="bg-orange-500 w-32 flex  text-lg p-0 font-bold">
							Courses
						</Button>
					</div>
					{isShowFiltre &&
						<div onClick={() => router.push('/course-filtre')} className={` ${filtreCourseColor}  mx-2 w-10 flex-none  border rounded-md h-10 content-center my-auto  border-0`} >
							<Filter strokeWidth={1} className={` ${filtreCourseFillColor} stroke-sky-700 mx-auto`} size={32} />
						</div>
					}
					<div onClick={() => goAndClose('/messages')} className=" my-auto" >
						<Button className="bg-orange-500 w-32 flex  text-lg  p-0 font-bold">
							Messages
						</Button>
					</div>
					<div onClick={() => goAndClose('/aide')} className=" my-auto" >
						<Button className="bg-orange-500 w-32 flex  text-lg  p-0 font-bold">
							Aide
						</Button>
					</div>
					<div onClick={() => setIsShowDeconnexion(true)} className=" my-auto" >
						<Button className="bg-orange-500 w-32 flex  text-lg  p-0 font-bold">
							Déconnexion
						</Button>
					</div>
				</div> */}

				{/* Menu */}
				{isNavMobileOpen &&
					<div className="fixed bg-white h-full top-13 inset-x-0 p-2 transition transform origin-top-right md:hidden">
						<div className="flex flex-col h-full">
							<div onClick={() => goAndClose('/')} className={"h-20 my-2 flex place-items-center justify-start text-center md:w-6/12 mx-5   border rounded-xl bg-blue-300 hover:bg-blue-400    text-2xl text-sky-950 "}>
								<div className="flex-auto">
									Courses
								</div>
							</div>
							<div onClick={() => goAndClose('/messages')} className={"h-20 my-2 flex place-items-center justify-start text-center md:w-6/12 mx-5  h-30 border rounded-xl bg-blue-300 hover:bg-blue-400    text-2xl text-sky-950 "}>
								<div className="flex-auto">
									Messages
								</div>
							</div>
							<div onClick={() => goAndClose('/aide')} className={"h-20 my-2 flex place-items-center justify-start text-center md:w-6/12 mx-5  h-30 border rounded-xl bg-blue-300 hover:bg-blue-400   text-2xl text-sky-950 "}>
								<div className="flex-auto">
									Aide
								</div>
							</div>
							<div onClick={() => setIsShowDeconnexion(true)} className={"h-20 my-2 flex place-items-center justify-start text-center md:w-6/12 mx-5  h-30 border rounded-xl bg-blue-300 hover:bg-blue-400   text-2xl text-sky-950 "}>
								<div className="flex-auto">
									Deconnexion
								</div>
							</div>
							<div className="text-center">
								Version <Version />
							</div>
						</div>
					</div>
				}

				{/* Deconnexion */}
				{isShowDeconnexion &&
					<div className="mx-auto md:w-[768px] fixed bg-white  h-full top-13 inset-x-0 p-2 transition transform origin-top-right ">
						<span className="text-2xl my-20">
							Voulez vous vous déconnecter de l'application ?
						</span>
						<div className="flex justify-around text-lg">
							<Button onClick={() => {
								setIsNavMobileOpen(false);
								setIsShowDeconnexion(false);
							}} className="h-14 w-36 text-lg bg-secondary">Non</Button>
							<Button onClick={() => {
								setIsNavMobileOpen(false);
								identDeleteToken();
								setIsShowDeconnexion(false);
								router.push("/identification")
							}
							} className="h-14 w-36 text-lg bg-primary">Oui</Button>
						</div>
					</div>
				}
			</nav>
		</>
	)
}
