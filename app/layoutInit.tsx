"use client";

// import React from "react";
import "./globals.css";
import { usePathname, useRouter } from "next/navigation";

import { getPWADisplayMode, isPwaInstalled } from "@/lib/rrasb2k/app";

import { useState, useEffect } from 'react';


import "./globals.css";
import { identIsAut, TOKEN } from "@/lib/artaxi";
import { get } from "idb-keyval";

export default function LayoutInit({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const pahtName = usePathname();


	// useEffect(() => {
	// 	if (!isPwaInstalled() && pahtName !== "/installation") {
	// 		console.log("ooooo", isPwaInstalled(), getPWADisplayMode())
	// 		router.push("/installation")
	// 	}
	// },);

	const pathExcept = ["/test", "/aide"];

	useEffect(() => {
		if (!isPwaInstalled() && pahtName !== "/installation") {
			console.log("Pas installé !!!!!!", isPwaInstalled(), getPWADisplayMode())
			router.push("/installation")
		}
		else {
			console.log("installé !!! ou sur la page installation")
		}
		// else {
		// 	console.log("installation faite")
		// 	if (!pathExcept.includes(pahtName)) {
		// 		get(TOKEN)
		// 			.then(value => {
		// 				if (value == undefined) {

		// 					router.push("/identification")
		// 				}
		// 			})
		// 			.catch(e => {

		// 			})
		// 	}
		// }
	},
		[ pahtName]);
		// [router, pahtName]);
	return (
		<>
			{children}
			{/* <button id="install" hidden>Install</button> */}

		</>
	);
}
