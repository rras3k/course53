"use client";

import React from "react";
import "./globals.css";
import { redirect, useRouter, usePathname } from "next/navigation";
import { identIsAut, TOKEN } from "@/lib/artaxi";
import { get } from "idb-keyval";

export default function LayoutRedirect({ children, path }: { children: React.ReactNode, path: string }) {
	const router = useRouter();
	const pahtName = usePathname();
	const pathExcept = ["/test", "/aide"];

	React.useEffect(() => {
		if (!pathExcept.includes(pahtName)) {

			get(TOKEN)
				.then(value => {
					if (value == undefined) {
						router.push("/identification")
					}
				})
				.catch(e => {
				})
		}
	},
		[router, pahtName]);
	return (
		<>
			{children}
		</>
	);
}
