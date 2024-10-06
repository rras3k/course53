"use client"

import Link from "next/link";
import { ListPlus, ListX, ListChecks, AlignJustify, List } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function CourseFiltre({ click }) {
	const linkHight: string = 'h-20 ';
	const linkMy: string = 'my-4 ';
	const router = useRouter();

	const clickAndGo = (url: string) => {
		click();
		router.push(url);
	}

	return (
		<div className="hiden md:grid  h-full mx-4 my-8">
			{/* <div className="hiden md:grid w-[768px] mx-auto grid-cols-2 gap-10  content-center h-full bg-sky-100"> */}


			{/* <Link href={"/?filtre=a-faire"} onClick={click} className={linkHight + linkMy + " flex place-items-center justify-start text-center md:w-6/12 mx-auto   border rounded-xl bg-green-300 border-green-500 hover:bg-green-400   text-2xl text-green-950 "}> */}
			<div onClick={() => clickAndGo("/?filtre=a-faire")} className={linkHight + linkMy + " flex place-items-center justify-start text-center md:w-6/12 mx-auto   border rounded-xl bg-green-300 border-green-500 hover:bg-green-400   text-2xl text-green-950 "}>
				<div className="flex-initial ">
					<AlignJustify strokeWidth={0.5} className=" inline fill-yellow-200 stroke-green-700" size={100} />
				</div>
				<div className="flex-auto">
					A faire
				</div>
			</div>
			<div onClick={() => clickAndGo("/?filtre=propositions")}  className={linkHight + linkMy + " flex place-items-center justify-start text-center md:w-6/12 mx-auto  h-30 border rounded-xl bg-yellow-300 border-yellow-500 hover:bg-yellow-400   text-2xl text-yellow-950 "}>
				<div className="flex-initial ">
					<ListPlus strokeWidth={0.5} className=" inline stroke-yellow-700" size={100} />
				</div>
				<div className="flex-auto">
					Propositions
				</div>
			</div>
			<div onClick={() => clickAndGo("/?filtre=cloturees")}  className={linkHight + linkMy + " flex place-items-center justify-start text-center md:w-6/12 mx-auto  h-30 border rounded-xl bg-blue-300  border-blue-500 hover:bg-blue-400   text-2xl text-yellow-950 "}>
				<div className="flex-initial ">
					<ListChecks strokeWidth={0.5} className=" inline stroke-blue-700" size={100} />
				</div>
				<div className="flex-auto">
					Clôturées
				</div>
			</div>
			<div onClick={() => clickAndGo("/?filtre=annulees")} className={linkHight + linkMy + " flex place-items-center justify-start text-center md:w-6/12 mx-auto  h-30 border rounded-xl bg-gray-300 border-gray-500 hover:bg-gray-400   text-2xl text-yellow-950 "}>
				<div className="flex-initial ">
					<ListX strokeWidth={0.5} className=" inline stroke-gray-700" size={100} />
				</div>
				<div className="flex-auto">
					Annulées
				</div>
			</div>
			<div onClick={() => clickAndGo("/?filtre=toutes")}  className={linkHight + linkMy + " flex place-items-center justify-start text-center md:w-6/12 mx-auto  h-30 border rounded-xl bg-red-300 border-red-500  hover:bg-red-400   text-2xl text-yellow-950 "}>
				<div className="flex-initial ">
					<List strokeWidth={0.5} className=" inline stroke-red-700" size={100} />
				</div>
				<div className="flex-auto">
					Toutes
				</div>
			</div>



			{/* 			
			<Link href={"/"} className="flex-col mx-auto h-50 bg-yellow-300 hover:bg-yellow-400 h-56 w-9/12 text-2xl text-yellow-950 justify-self-auto">
			<Car strokeWidth={0.5} className="  fill-yellow-200 stroke-yellow-700" size={150} />
			<div>Propositions</div>
			</Link>
			<Link href={"/"} className="flex-col mx-auto h-50 bg-gray-300 hover:bg-gray-400 h-56 w-9/12 text-2xl text-gray-950 justify-self-auto">
			<Car strokeWidth={0.5} className="  fill-gray-200 stroke-gray-700" size={150} />
			<div>Annulées</div>
			</Link>
			<Link href={"/"} className="flex-col mx-auto h-50 bg-blue-300 hover:bg-blue-400 h-56 w-9/12 text-2xl text-blue-950 justify-self-auto">
			<Car strokeWidth={0.5} className="  fill-blue-200 stroke-blue-700" size={150} />
			<div>Cloturées</div>
			</Link>
			<Link href={"/"} className="flex-col mx-auto h-50 bg-green-300 hover:bg-green-400 h-56 w-9/12 text-2xl text-blue-950 justify-self-auto">
			<Car strokeWidth={0.5} className="  fill-gray-200 stroke-yellow-700" size={150} />
			<div>Toutes</div>
			</Link>  */}

		</div>

	);
}

