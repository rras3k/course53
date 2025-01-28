"use client";

import React from "react";
import "./globals.css";
import { useRouter, usePathname } from "next/navigation";
import {  TOKEN } from "@/lib/artaxi";
import { get } from "idb-keyval";

export default function LayoutRedirect({ children}: { children: React.ReactNode }) {
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
					console.log(e)
				})
		}
	},
		);
		// [router, pahtName]);
	return (
		<>
			{children}
		</>
	);
}
