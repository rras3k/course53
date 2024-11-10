"use client";
import { identIsAut } from "@/lib/artaxi";
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";


export default function isAuth(Component: any) {
	return function IsAuth(props: any) {
		const router = useRouter();

		identIsAut()
			.then(value => {
				if (value == true) {
					console.log("middleware identification ok")
					return <Component {...props} />;
				}
			}
		)
		// return router.push("/identification");
		console.log("direction identification ")

		return redirect("/identification");
	}
}


  