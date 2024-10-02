import Link from "next/link";
import { Car } from "lucide-react";


export default function CourseFiltre() {
	return (
		<div className="hiden md:grid w-[768px] mx-auto grid-cols-2 gap-10  content-center h-full bg-sky-100">

			<Link href={"/"} className="flex-col mx-auto h-50 border rounded-xl bg-green-300 hover:bg-green-400 h-56 w-9/12 text-2xl text-green-950 justify-self-auto">
					<Car strokeWidth={0.5} className="  fill-yellow-200 stroke-green-700" size={150} />
					<div>A faire + Propositions</div>
			</Link>
			<Link href={"/"}  className="flex-col mx-auto h-50 bg-yellow-300 hover:bg-yellow-400 h-56 w-9/12 text-2xl text-yellow-950 justify-self-auto">
					<Car strokeWidth={0.5} className="  fill-yellow-200 stroke-yellow-700" size={150} />
					<div>Propositions</div>
				</Link>
			<Link href={"/"}  className="flex-col mx-auto h-50 bg-gray-300 hover:bg-gray-400 h-56 w-9/12 text-2xl text-gray-950 justify-self-auto">
					<Car strokeWidth={0.5} className="  fill-gray-200 stroke-gray-700" size={150} />
					<div>Annulées</div>
			</Link>
			<Link href={"/"}  className="flex-col mx-auto h-50 bg-blue-300 hover:bg-blue-400 h-56 w-9/12 text-2xl text-blue-950 justify-self-auto">
					<Car strokeWidth={0.5} className="  fill-blue-200 stroke-blue-700" size={150} />
					<div>Cloturées</div>
			</Link>
			<Link href={"/"}  className="flex-col mx-auto h-50 bg-green-300 hover:bg-green-400 h-56 w-9/12 text-2xl text-blue-950 justify-self-auto">
					<Car strokeWidth={0.5} className="  fill-gray-200 stroke-yellow-700" size={150} />
					<div>Toutes</div>
			</Link>

		</div>
	);
}