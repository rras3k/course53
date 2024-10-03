import Link from "next/link";
import { Car, X, CircleHelp } from 'lucide-react';

interface GrosBoutonInterface {
	type: string;
	title: string;
	linkBg: string;
	linkHoverBg: string;
	linkTextColor: string;
	iconFillColor: string;
	iconStrokeColor: string;
}

export function GrosBouton(props: GrosBoutonInterface) {

	return (
		<>
			<Link href={"/"} className={
				props.linkBg + " " +
				props.linkHoverBg + " " +
				props.linkTextColor +
				" py-6 flex text-center  h-50 border rounded-xl  md:mx-4   text-2xl text-green-950 justify-self-auto"
			}>
				{props.type == "Car" &&
					<div className="flex-initial w-52">
						{ if(props.type == "Car") {}
							<Car strokeWidth={0.5} className={props.iconFillColor + " inline " + props.iconStrokeColor} size={70} />
							|| props.type == "CircleHelp" &&
							<X strokeWidth={0.5} className={props.iconFillColor + " inline " + props.iconStrokeColor} size={70} />}
					</div>
				}
				<div>{props.title}</div>
			</Link>
		</>
	);

}