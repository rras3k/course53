"use client"
import Link from "next/link";
import { Car, Filter, Mail, Menu, Info, SquareAsterisk, X } from 'lucide-react';
import Image from "next/image";
import imgHome from "@/public/icons/icon-48x48.png";
import { Button } from "./ui/button";
import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { deleteToken, getFiltreCourseColor, getFiltreCourseFillColor, getFiltreCourse, getTitle } from "@/lib/artaxi";
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from "tailwind-merge";
import Version from "./version";

export function NavHor() {

	const linkHight: string = 'h-20 ';
	const linkMy: string = 'my-2 ';
	const router = useRouter();

	// navigation mobile
	const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);
	// affichage de la deconnexion
	const [isShowDeconnexion, setIsShowDeconnexion] = useState(false);
	const [filtreCourseFillColor, setFiltreCourseFillColor] = useState('');
	const [filtreCourseColor, setFiltreCourseColor] = useState('bg-green-400');

	// const toggleMenu = () => setIsNavMobileOpen(!isNavMobileOpen);
	const goAndClose = (url: string) => {
		setIsNavMobileOpen(false);
		router.push(url);
	}

	// titre de la barre
	const path = usePathname();
	const [title, setTitle] = useState("Courses");
	useEffect(() => {
		setTitle(getTitle(path));
	}, [path]);
	// console.log('......', usePathname())

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
	console.log('============', getFiltreCourse(), getFiltreCourseColor());

	const iconHome_className = clsx(
		'mx-3 flex-none',
		{
			'bg-yellow-200': false,
		}
	);
	return (
		// <div className="fill-red-200 fill-blue-200 fill-green-200 fill-yellow-200 fill-gray-200"></div>
		// <div className="bg-red-200 bg-blue-200 bg-green-200 bg-yellow-200 bg-gray-200"></div>
		<>
			<nav className="h-12 fixed w-full bg-sky-700">

				{/* Version mobile */}
				<div className="md:hidden flex content-center">
					<Image className={twMerge(iconHome_className)} src={imgHome} alt="Home" />
					{/* <Image className="mx-3 flex-none " src={imgHome} alt="Home" /> */}
					<div className="flex-auto flex items-center justify-center">
						<div className=" text-lg content-center text-center font-bold text-white">
							{title}
						</div>
					</div>
					{usePathname() == "/" &&
						<div onClick={() => router.push('/course-filtre')} className={` ${filtreCourseColor}  mx-2 w-10 flex-none  border rounded-md h-10 content-center my-auto  border-0`} >
							<Filter strokeWidth={1} className={` ${filtreCourseFillColor} stroke-sky-700 mx-auto`} size={32} />
						</div>
					}
					{isNavMobileOpen && <div onClick={() => setIsNavMobileOpen(false)} className="mx-2 w-10 flex-none border-sky-100 border rounded-md h-10 content-center my-auto border-0" >
						<X strokeWidth={1} className="stroke-white mx-auto" size={36} />
					</div>}

					{!isNavMobileOpen && <div onClick={() => setIsNavMobileOpen(true)} className="mx-2 w-10 flex-none border-sky-100 border rounded-md h-10 content-center my-auto border-0" >
						<Menu strokeWidth={1} className="stroke-white mx-auto" size={36} />
					</div>}
				</div>

				{/* Version ecran large */}
				<div className="hidden md:grid w-[768px] mx-auto h-full  grid-cols-4 justify-items-center  align-baseline ">
					<Image className=" my-auto" src={imgHome} alt="Home" />

					<Link className=" my-auto" href="/">
						<Button className="bg-orange-500 w-36 flex  text-lg p-0 font-bold">
							Courses
							<Car strokeWidth={0.5} className="ml-1 fill-orange-700 stroke-orange-400" size={36} />
						</Button>
					</Link>
					<Link className=" my-auto" href="/messages">
						<Button className="bg-orange-500 w-36 flex  text-lg  p-0 font-bold">
							Messages
							<Mail strokeWidth={0.5} className="ml-1 fill-orange-700 stroke-orange-400" size={32} />
						</Button>

					</Link>
					<Link className=" my-auto" href="/plus">
						<Button className="bg-orange-500 w-36 flex  text-lg  p-0 font-bold">
							Aide
							<Info strokeWidth={0.5} className="ml-1 fill-orange-700 stroke-orange-400" size={36} />
						</Button>
					</Link>
					<Link className=" my-auto" href="/plus">
						<Button className="bg-orange-500 w-36 flex  text-lg  p-0 font-bold">
							Plus
							<Info strokeWidth={0.5} className="ml-1 fill-orange-700 stroke-orange-400" size={36} />
						</Button>
					</Link>
				</div>

				{isNavMobileOpen &&
					<div className="fixed bg-white h-full top-13 inset-x-0 p-2 transition transform origin-top-right md:hidden">
						{/* <div className="grid justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"> */}
						{/* <div onClick={toggleMenu} className="" >
								<SquareAsterisk />
							</div> */}

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
						{/* </div> */}
					</div>
				}

				{isShowDeconnexion &&
					<div className="fixed bg-white  h-full top-13 inset-x-0 p-2 transition transform origin-top-right md:hidden">
						<span className="text-2xl py-8">

							Voulez vous vous déconnecter de l'application ?
						</span>
						<div className="flex justify-around text-lg">
							<Button onClick={() => {
								setIsNavMobileOpen(false);
								setIsShowDeconnexion(false);
							}} className="h-14 w-36 text-lg bg-secondary">Non</Button>
							<Button onClick={() => {
								setIsNavMobileOpen(false);
								deleteToken();
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

