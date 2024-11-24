import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent

} from "@/components/ui/dialog"


import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { CircleX } from 'lucide-react';



import Version from "./version"
import { useRouter } from 'next/navigation';
import { useEffect } from "react";


export default function MenuApp({ openMenu, setOpenMenu, setIsShowDeconnexion, pathName }) {
	const router = useRouter();
	console.log("pathName", pathName);
	const goAndClose = (url: string) => {
		setOpenMenu(false);
		router.push(url);
	}
	useEffect(() => {
		if (pathName == "/identification") setOpenMenu(false);
	}, [pathName])
	return (
		<>
			<AlertDialog open={openMenu} onOpenChange={setOpenMenu}>
				{/* <AlertDialogTrigger asChild>
					<Button variant="outline">Show Dialog</Button>
				</AlertDialogTrigger> */}
				<AlertDialogContent>
					{/* <AlertDialogHeader>
						<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
						<AlertDialogDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</AlertDialogDescription>
					</AlertDialogHeader> */}
					<CircleX onClick={() => { setOpenMenu(false) }}  size={42} />
					<div className="flex flex-col h-full">
						{(pathName!="/" ) && <div onClick={() => goAndClose('/')} className={"h-20 my-2 flex place-items-center justify-start text-center  mx-5   border rounded-xl bg-blue-300 hover:bg-blue-400    text-2xl text-sky-950 "}>
							<div className="flex-auto">
								Courses
							</div>
						</div>}
						{(pathName != "/messages")  && <div onClick={() => goAndClose('/messages')} className={"h-20 my-2 flex place-items-center justify-start text-center  mx-5  h-30 border rounded-xl bg-blue-300 hover:bg-blue-400    text-2xl text-sky-950 "}>
							<div className="flex-auto">
								Messages
							</div>
						</div>}
						{(pathName != "/aide") &&  <div onClick={() => goAndClose('/aide')} className={"h-20 my-2 flex place-items-center justify-start text-center  mx-5  h-30 border rounded-xl bg-blue-300 hover:bg-blue-400   text-2xl text-sky-950 "}>
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
						<div className="text-center">
							Version <Version />
						</div>
					</div>
					{/* <AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction>Continue</AlertDialogAction>
					</AlertDialogFooter> */}
					{/* <Button onClick={() => { setOpenMenu(false) }}>Fermer</Button> */}

				</AlertDialogContent>
			</AlertDialog>
			{/* <Dialog open={open} onOpenChange={setOpenMenu}>
				<DialogContent className="sm:max-w-[425px]">
					<div className="flex flex-col h-full">
						<div onClick={() => goAndClose('/')} className={"h-20 my-2 flex place-items-center justify-start text-center  mx-5   border rounded-xl bg-blue-300 hover:bg-blue-400    text-2xl text-sky-950 "}>
							<div className="flex-auto">
								Courses
							</div>
						</div>
						<div onClick={() => goAndClose('/messages')} className={"h-20 my-2 flex place-items-center justify-start text-center  mx-5  h-30 border rounded-xl bg-blue-300 hover:bg-blue-400    text-2xl text-sky-950 "}>
							<div className="flex-auto">
								Messages
							</div>
						</div>
						<div onClick={() => goAndClose('/aide')} className={"h-20 my-2 flex place-items-center justify-start text-center mx-5  h-30 border rounded-xl bg-blue-300 hover:bg-blue-400   text-2xl text-sky-950 "}>
							<div className="flex-auto">
								Aide
							</div>
						</div>

					</div>
				</DialogContent>
			</Dialog> */}
		</>
	)
}

