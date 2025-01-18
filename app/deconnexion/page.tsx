"use client"

import { Button } from "@/components/ui/button";
import { identDeleteToken,hasPropositionDelete } from "@/lib/artaxi";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';



export default function Deconnexion() {
	const router = useRouter();

	return (
		<>
			<div className="mx-auto md:w-[768px] fixed bg-white  h-full top-13 inset-x-0 p-2 transition transform origin-top-right ">
				<span className="text-2xl my-20">
					Voulez vous vous déconnecter de l'application ?
				</span>
				<div className="flex justify-around text-lg">
					<Button onClick={() => {
						router.back();
					}} className="h-14 w-36 text-lg bg-secondary">Non</Button>
					<Button onClick={() => {
						identDeleteToken();
						hasPropositionDelete();
						router.push("/identification")
					}
					} className="h-14 w-36 text-lg bg-primary">Oui</Button>
				</div>
			</div>
		</>
	);
}