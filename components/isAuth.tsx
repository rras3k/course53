"use client";
import { identIsAut } from "@/lib/artaxi";
import { useEffect } from "react";
import { redirect } from "next/navigation";


export default function isAuth(Component: any) {
	return function IsAuth(props: any) {
		const auth = identIsAut();


		useEffect(() => {
			if (!auth) {
				return redirect("/identification");
			}
		}, []);


		if (!auth) {
			return null;
		}

		return <Component {...props} />;

	};
}


