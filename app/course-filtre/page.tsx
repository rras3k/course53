"use client"

import Link from "next/link";


export default function CourseFiltre() {
	
	return (
		<div className="hiden md:flex flex-col items-center h-full ">
			<Link href={"/?filtre=a-faire-et-propositions"} className={"h-20 my-4 flex place-items-center justify-start text-center md:w-6/12 mx-5   border rounded-xl bg-green-300 hover:bg-green-400   text-2xl text-green-950 "}>
				<div className="flex-auto">
					Normal
				</div>
			</Link>
			<Link href={"/?filtre=propositions"} className={"h-20 my-4 flex place-items-center justify-start text-center md:w-6/12 mx-5  h-30 border rounded-xl bg-yellow-300 hover:bg-yellow-400   text-2xl text-yellow-950 "}>
				<div className="flex-auto">
					Propositions
				</div>
			</Link>
			<Link href={"/?filtre=cloturees"} className={"h-20 my-4 flex place-items-center justify-start text-center md:w-6/12 mx-5  h-30 border rounded-xl bg-blue-300 hover:bg-blue-400   text-2xl text-yellow-950 "}>
				<div className="flex-auto">
					Clôturées
				</div>
			</Link>
			<Link href={"/?filtre=annulees"} className={"h-20 my-4 flex place-items-center justify-start text-center md:w-6/12 mx-5  h-30 border rounded-xl bg-gray-300 hover:bg-gray-400   text-2xl text-yellow-950 "}>
				<div className="flex-auto">
					Annulées
				</div>
			</Link>
			<Link href={"/?filtre=toutes"} className={"h-20 my-4 flex place-items-center justify-start text-center md:w-6/12 mx-5  h-30 border rounded-xl bg-red-300 hover:bg-red-400   text-2xl text-yellow-950 "}>
				<div className="flex-auto">
					Toutes
				</div>
			</Link>
		</div>
	);
}

