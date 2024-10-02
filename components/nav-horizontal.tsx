import Link from "next/link";
import { Car, Filter, Mail, SquareMenu, Info } from 'lucide-react';
import Image from "next/image";
import imgHome from "@/public/icons/icon-48x48.png"
import { Button } from "./ui/button";

export function NavHor() {


	return (
		<nav className="  h-14  bg-sky-900">

			
			

			{/* Version mobile */}
			<div className="md:hidden">
				<Image className=" my-auto" src={imgHome} alt="Home" />

				<Link className="my-auto hover:text-blue-300" href="/"><SquareMenu strokeWidth={0.5} className=" navicon" size={48} /></Link>
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
				<Link className="hover:text-blue-300 my-auto" href="/course-filtre">
					<Button className="bg-sky-400">
						Filtres <Filter strokeWidth={0.5} className="fill-blue-500" size={30} />
					</Button>

				</Link>
				<Link className="hover:text-blue-300 my-auto" href="/">
					<Button className="bg-sky-400">
						Messages
						<Mail strokeWidth={0.5}  className="fill-blue-500" size={48} />
					</Button>

				</Link>
				<Link className="hover:text-blue-300 my-auto" href="/">
					<Button className="bg-sky-400">
						Plus
						<Info strokeWidth={0.5}  className="fill-blue-500" size={30} />
					</Button>

				</Link>
			</div>


		</nav>
	)
}

