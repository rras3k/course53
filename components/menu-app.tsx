// import { Button } from "@/components/ui/button"
// import { Dialog, DialogContent } from "@/components/ui/dialog"

// import { logWrite, LogLevel } from "@/lib/rrasb2k/log"
import {
	AlertDialog,
	// AlertDialogAction,
	// AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	// AlertDialogHeader,
	// AlertDialogTitle,
	// AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { CircleX } from 'lucide-react';



import Version from "./version"
import { useRouter } from 'next/navigation';
// import {  useState } from "react";
// import { identGetProfilId } from "@/lib/artaxi";
// import { ProfilEnum } from "@/lib/affinis";


export default function MenuApp({ openMenu, setOpenMenu, setIsShowDeconnexion, pathName }) {
	const router = useRouter();
	console.log("pathName", pathName);
	// const [profilId, setProfilId] = useState<string | null>("1");

	const goAndClose = (url: string) => {
		setOpenMenu(false);
		router.push(url);
	}

	// useEffect(() => {
	// 	if (pathName === "/identification") setOpenMenu(false);
	// }, [pathName])

	// useEffect(() => {
	// 	setProfilId(identGetProfilId())
	// })
	return (
		<>
			{/* {(profilId === ProfilEnum.Admin) &&
				<AlertDialog open={openMenu} onOpenChange={setOpenMenu}>
					<AlertDialogContent>
						<AlertDialogDescription>
							<CircleX onClick={() => { setOpenMenu(false) }} size={42} />
							<div className="flex flex-col h-full">
								{(pathName != "/admin/courses") && <div onClick={() => goAndClose('/artaxi/courses')} className={"h-20 my-2 flex place-items-center justify-start text-center  mx-5  h-30 border rounded-xl bg-blue-300 hover:bg-blue-400    text-2xl text-sky-950 "}>
									<div className="flex-auto">
										Courses
									</div>
								</div>}
								{(pathName != "/admin/aide") && <div onClick={() => goAndClose('/artaxi/aide')} className={"h-20 my-2 flex place-items-center justify-start text-center  mx-5  h-30 border rounded-xl bg-blue-300 hover:bg-blue-400   text-2xl text-sky-950 "}>
									<div className="flex-auto">
										Aide
									</div>
								</div>}
								{<div onClick={() => {
									setOpenMenu(false);
									setIsShowDeconnexion(true)
								}} className={"h-20 my-2 flex place-items-center justify-start text-center  mx-5  h-30 border rounded-xl bg-blue-300 hover:bg-blue-400   text-2xl text-sky-950 "}>
									<div className="flex-auto">
										Deconnexion
									</div>
								</div>}
							</div>
						</AlertDialogDescription>
						<AlertDialogFooter>
							Version <Version />
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			} */}
			{/* {(profilId === ProfilEnum.Artaxi) &&
				<AlertDialog open={openMenu} onOpenChange={setOpenMenu}>
					<AlertDialogContent>
						<AlertDialogDescription>
							<CircleX onClick={() => { setOpenMenu(false) }} size={42} />
							<div className="flex flex-col h-full">
								{(pathName != "/artaxi/courses") && <div onClick={() => goAndClose('/artaxi/courses')} className={"h-20 my-2 flex place-items-center justify-start text-center  mx-5  h-30 border rounded-xl bg-blue-300 hover:bg-blue-400    text-2xl text-sky-950 "}>
									<div className="flex-auto">
										Courses
									</div>
								</div>}
								{(pathName != "/artaxi/aide") && <div onClick={() => goAndClose('/artaxi/aide')} className={"h-20 my-2 flex place-items-center justify-start text-center  mx-5  h-30 border rounded-xl bg-blue-300 hover:bg-blue-400   text-2xl text-sky-950 "}>
									<div className="flex-auto">
										Aide
									</div>
								</div>}
								{<div onClick={() => {
									setOpenMenu(false);
									setIsShowDeconnexion(true)
								}} className={"h-20 my-2 flex place-items-center justify-start text-center  mx-5  h-30 border rounded-xl bg-blue-300 hover:bg-blue-400   text-2xl text-sky-950 "}>
									<div className="flex-auto">
										Deconnexion
									</div>
								</div>}
							</div>
						</AlertDialogDescription>
						<AlertDialogFooter>
							Version <Version />
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			} */}

			{/* {(profilId === ProfilEnum.Taxi) && */}
				<AlertDialog open={openMenu} onOpenChange={setOpenMenu}>
					<AlertDialogContent>
						<AlertDialogDescription>
							<CircleX onClick={() => { setOpenMenu(false) }} size={42} />
							<div className="flex flex-col h-full">
								{(pathName != "/taxi/courses") && <div onClick={() => goAndClose('/taxi/courses')} className={"h-20 my-2 flex place-items-center justify-start text-center  mx-5   border rounded-xl bg-blue-300 hover:bg-blue-400    text-2xl text-sky-950 "}>
									<div className="flex-auto">
										Courses
									</div>
								</div>}
								{(pathName != "/taxi/messages") && <div onClick={() => goAndClose('/taxi/messages')} className={"h-20 my-2 flex place-items-center justify-start text-center  mx-5  h-30 border rounded-xl bg-blue-300 hover:bg-blue-400    text-2xl text-sky-950 "}>
									<div className="flex-auto">
										Messages
									</div>
								</div>}
								{(pathName != "/taxi/aide") && <div onClick={() => goAndClose('/taxi/aide')} className={"h-20 my-2 flex place-items-center justify-start text-center  mx-5  h-30 border rounded-xl bg-blue-300 hover:bg-blue-400   text-2xl text-sky-950 "}>
									<div className="flex-auto">
										Aide
									</div>
								</div>}
								{(pathName != "/parametrage") && <div onClick={() => goAndClose('/parametrage')} className={"h-20 my-2 flex place-items-center justify-start text-center  mx-5  h-30 border rounded-xl bg-blue-300 hover:bg-blue-400   text-2xl text-sky-950 "}>
									<div className="flex-auto">
										Parametrage
									</div>
								</div>}

								{<div onClick={() => {
									setOpenMenu(false);
									setIsShowDeconnexion(true)
								}} className={"h-20 my-2 flex place-items-center justify-start text-center  mx-5  h-30 border rounded-xl bg-blue-300 hover:bg-blue-400   text-2xl text-sky-950 "}>
									<div className="flex-auto">
										Deconnexion
									</div>
								</div>}

							</div>
						</AlertDialogDescription>
						<AlertDialogFooter>
							Version <Version />
						</AlertDialogFooter>

					</AlertDialogContent>
				</AlertDialog>
				{/* } */}
		</>
	)
}

