"use client";

import React from "react";
import "./globals.css";
import { redirect, useRouter, usePathname } from "next/navigation";
import { identIsAut } from "@/lib/artaxi";


export default function LayoutRedirect({ children, path}: { children: React.ReactNode, path:string }) {
// export default function LayoutRedirect({ children, }: { children: React.ReactNode; }) {
	const router = useRouter();
	console.log("path", path)
	const pahtName = usePathname();


	React.useEffect(() => {
		console.log("LayoutRedirect")

		identIsAut
			.then(value => {
				console.log("LayoutRedirect",value)
				if (value == true) {
					console.log("middleware identification ok")
				}
				else {
					console.log("middleware identification PAS ok")
					router.push("/identification")

				}
			})
			.catch((e) => {
				console.error("LayoutRedirect",e)	
			})
	}, [router,pahtName]);
	return (
		<>
			{children}
		</>
	);
}
