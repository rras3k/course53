"use client";

import React from "react";
import "./globals.css";
import { redirect, useRouter, usePathname } from "next/navigation";
import { identIsAut, TOKEN } from "@/lib/artaxi";
import { get } from "idb-keyval";

export default function LayoutRedirect({ children, path }: { children: React.ReactNode, path: string }) {
	// export default function LayoutRedirect({ children, }: { children: React.ReactNode; }) {
	const router = useRouter();
	// console.log("path", path)
	const pahtName = usePathname();
	// console.log("LayoutRedirect pahtName", pahtName)


	React.useEffect(() => {
		// console.log("LayoutRedirect")
		get(TOKEN)
			.then(value => {
				// console.log("value = ", value);
				if (value == undefined) {
					// console.log("middleware identification undefinied")
					router.push("/identification")
				}
				else {
					// console.log("middleware identification  ok")
				}
			})
			.catch(e => {
			})
	}, [router, pahtName]);
	return (
		<>
			{children}
		</>
	);
}
