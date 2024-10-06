"use client"
import Link from "next/link";
import { Car, Filter, Mail, SquareMenu, Info, SquareAsterisk } from 'lucide-react';
import Image from "next/image";
import imgHome from "@/public/icons/icon-48x48.png";
import { Button } from "./ui/button";
import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const route: { [key: string]: string } = {};
route['/'] = 'Courses';
route['/course-filtre'] = 'Filtres';
route['/messages'] = 'Messages';
route['/plus'] = 'Plus';

const getTitle = (pathname: string) => {
	return route[pathname];
}

export function NavHor() {

	const linkHight: string = 'h-20 ';
	const linkMy: string = 'my-2 ';
	const router = useRouter();


	// navigation mobile
	const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);
	const toggleMenu = () => setIsNavMobileOpen(!isNavMobileOpen);
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

	

	return (
		<>
			<nav className="  h-14  bg-sky-900">

				{/* Version mobile */}
				<div className="md:hidden flex content-center">
					<Image className="mx-3 flex-none " src={imgHome} alt="Home" />
					<div className="flex-auto flex items-center justify-center gap-3">

						<div className=" text-lg content-center text-center  text-white">
							{title}
						</div>
						{/* <Button onClick={() => goAndClose('/course-filtre')} className={"align-middle content-center border rounded-xl bg-sky-300 hover:bg-gray-400 "}>
								<Filter strokeWidth={0.5} className=" inline fill-sky-200 stroke-sky-700" size={35} />
						</Button> */}

						{/* {(path == '/') &&
							<>
								<Filter onClick={() => goAndClose('/course-filtre')} strokeWidth={0.5} size={37} className={iconFiltreColor + " align-middle content-center border rounded-lg  hover:bg-gray-400"} />
							</>
						} */}
					</div>


					<div onClick={() => setIsNavMobileOpen(true)} className="mx-2 flex-none  hover:text-blue-300 " >
						<SquareMenu strokeWidth={1} className="stroke-white" size={48} />
					</div>
				</div>

				{/* Version ecran large */}
				<div className="hidden md:grid w-[768px] mx-auto h-full  grid-cols-5 justify-items-center  align-baseline  bg-sky-200">
					{/* <div className="hidden md:grid w-[1200px] mx-auto h-full grid grid-cols-5 justify-items-center  align-baseline  bg-sky-200"> */}

					<Image className=" my-auto" src={imgHome} alt="Home" />

					<Link className="hover:text-blue-300 my-auto" href="/">
						<Button className="bg-sky-400">
							Courses
							<Car strokeWidth={0.5} className="  fill-blue-200 stroke-sky-700" size={48} />
						</Button>
					</Link>
					{/* <Link className="hover:text-blue-300 my-auto" href="/course-filtre"  >
						<Button className="bg-sky-400">
							Filtres <Filter strokeWidth={0.5} className="fill-blue-500" size={30} />
						</Button>

					</Link> */}
					<Link className="hover:text-blue-300 my-auto" href="/messages">
						<Button className="bg-sky-400">
							Messages
							<Mail strokeWidth={0.5} className="fill-blue-500" size={48} />
						</Button>

					</Link>
					<Link className="hover:text-blue-300 my-auto" href="/plus">
						<Button className="bg-sky-400">
							Plus
							<Info strokeWidth={0.5} className="fill-blue-500" size={30} />
						</Button>

					</Link>
				</div>

				{isNavMobileOpen &&
					<div className="absolute bg-white top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
						<div className="grid justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
							<div onClick={toggleMenu} className="" >
								<SquareAsterisk />
							</div>
							<div className="grid">

								<div className="  mx-auto h-full bg-sky-100">
									<div onClick={() => goAndClose('/')} className={linkHight + linkMy + " flex place-items-center justify-start text-center md:w-6/12 mx-auto   border rounded-xl bg-green-300 hover:bg-green-400   text-2xl text-green-950 "}>
										<div className="flex-initial ">
											<Car strokeWidth={0.5} className=" inline fill-yellow-200 stroke-green-700" size={100} />
										</div>
										<div className="flex-auto">
											Courses
										</div>
									</div>
								</div>
								{/* <div className=" md:grid mx-auto h-full bg-sky-100">
									<div onClick={() => goAndClose('/course-filtre')} className={linkHight + linkMy + " flex place-items-center justify-start text-center md:w-6/12 mx-auto   border rounded-xl bg-green-300 hover:bg-green-400   text-2xl text-green-950 "}>
										<div className="flex-initial ">
											<Filter strokeWidth={0.5} className=" inline fill-yellow-200 stroke-green-700" size={100} />
										</div>
										<div className="flex-auto">
											Filtres
										</div>
									</div>
								</div> */}
								<div className=" md:grid mx-auto h-full bg-sky-100">
									<div onClick={() => goAndClose('/messages')} className={linkHight + linkMy + " flex place-items-center justify-start text-center md:w-6/12 mx-auto   border rounded-xl bg-green-300 hover:bg-green-400   text-2xl text-green-950 "}>
										<div className="flex-initial ">
											<Mail strokeWidth={0.5} className=" inline fill-yellow-200 stroke-green-700" size={100} />
										</div>
										<div className="flex-auto">
											Messages
										</div>
									</div>
								</div>
								<div className=" md:grid mx-auto h-full bg-sky-100">
									<div onClick={() => goAndClose('/plus')} className={linkHight + linkMy + " flex place-items-center justify-start text-center md:w-6/12 mx-auto   border rounded-xl bg-green-300 hover:bg-green-400   text-2xl text-green-950 "}>
										<div className="flex-initial ">
											<Info strokeWidth={0.5} className=" inline fill-yellow-200 stroke-green-700" size={100} />
										</div>
										<div className="flex-auto">
											Plus
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				}

				
			</nav>
		</>
	)
}

