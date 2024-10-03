import { GrosBouton } from "@/components/gros-bouton";


export default function CourseFiltre() {
	return (
		<div className="hiden md:flexx  mx-auto  gap-10  content-center h-full bg-sky-100">
			{/* <div className="hiden md:grid w-[768px] mx-auto grid-cols-2 gap-10  content-center h-full bg-sky-100"> */}

			<GrosBouton title="A faire + propositions" type="Car" linkBg="bg-green-300" linkHoverBg="hover:bg-green-400" linkTextColor="text-green-950" iconFillColor="fill-yellow-200" iconStrokeColor="stroke-green-700" />
			<GrosBouton title="Propositions" type="CircleHelp" linkBg="bg-yellow-300" linkHoverBg="hover:bg-yellow-400" linkTextColor="text-yellow-950" iconFillColor="fill-yellow-200" iconStrokeColor="stroke-yellow-700" />
			<GrosBouton title="Annulées" type="X" linkBg="bg-gray-300" linkHoverBg="hover:bg-gray-400" linkTextColor="text-gray-950" iconFillColor="fill-gray-200" iconStrokeColor="stroke-gray-700" />
			<GrosBouton title="Cloturées" type="Car" linkBg="bg-blue-300" linkHoverBg="hover:bg-blue-400" linkTextColor="text-blue-950" iconFillColor="fill-blue-200" iconStrokeColor="stroke-blue-700" />
			<GrosBouton title="Toutes" type="Car" linkBg="bg-red-300" linkHoverBg="hover:bg-red-400" linkTextColor="text-red-950" iconFillColor="fill-red-200" iconStrokeColor="stroke-red-700" />

			{/* <Link href={"/"} className="flex text-center  mx-4 h-50 border rounded-xl bg-green-300 hover:bg-green-400 h-56  text-2xl text-green-950 ">
				<div className="flex-initial w-52">
					<Car strokeWidth={0.5} className=" inline fill-yellow-200 stroke-green-700" size={150} />
				</div>
				<div className="flex-auto">A faire + Propositions</div>
			</Link>
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
			</Link> */}

		</div>
	);
}

