"use client"

import ChoixLuminosite from "@/components/choix-luminosite";
import { Encart, EncartLabel, EncartContent } from "@/components/rrasb2k/encart";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { get } from "idb-keyval";

function ask() {
	let promise = Notification.requestPermission();
}



function getStateNotificationUser() {
	get("stateNotificationUser").then(() => {

	});
}


let deferredEvent;

window.addEventListener('beforeinstallprompt', (e) => {
  // prevent the browser from displaying the default install dialog
  e.preventDefault();
  
  // Stash the event so it can be triggered later when the user clicks the button
  deferredEvent = e;
});

installButton.addEventListener('click', () => {
  // if the deferredEvent exists, call its prompt method to display the install dialog
  if(deferredEvent) {
    deferredEvent.prompt();
  }
});

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
					<Encart>
						<EncartLabel>
							Afficher des notfications
						</EncartLabel>
						<EncartContent>
							<Switch id="notification" />
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