"use client"

import ChoixLuminosite from "@/components/choix-luminosite";
import { Encart, EncartLabel, EncartContent } from "@/components/rrasb2k/encart";
import { Button } from "@/components/ui/button";
import { get } from "idb-keyval";

function ask() {
	let promise = Notification.requestPermission();
}



function getStateNotificationUser() {
	get("stateNotificationUser").then(() => {

	});
}


const Parametrage = () => {
	return (
		<>
			<Button onClick={ask}>ask</Button>
			{/* <Button onClick={unSubscribe}>unSubscribe</Button> */}
			<div className="flex flex-1 flex-col gap-4 px-4 py-10 items-center ">
				{/* <div className="mx-auto h-24 w-full max-w-3xl rounded-xl bg-muted/50">
					Mode de luminosité
					<ChoixLuminosite />
				</div>
				<div className="mx-auto h-full w-full max-w-3xl rounded-xl bg-muted/50" >
					<Encart className="bg-muted text-red-700">
						Mode de luminosité
						<ChoixLuminosite />

					</Encart>
				</div> */}
				<div className="mx-auto h-full w-full max-w-3xl rounded-xl bg-muted/50" >

					<Encart>
						<EncartLabel>
							Mode de luminosité
						</EncartLabel>
						<EncartContent>
							<ChoixLuminosite />

						</EncartContent>

					</Encart>

				</div>
			</div>
		</>
	)
}
export default Parametrage;




// self.addEventListener('pushsubscriptionchange', function () {
// 	// remove the entry from DB
// });