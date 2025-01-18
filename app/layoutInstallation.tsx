"use client";

import React from "react";
import "./globals.css";
import { usePathname, useRouter } from "next/navigation";

import { getPWADisplayMode, isPwaInstalled } from "@/lib/rrasb2k/app";

import { useState, useEffect } from 'react';




export default function LayoutInstallation({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const pahtName = usePathname();

	useEffect(() => {
		if (!isPwaInstalled() && pahtName!=="/installation") {
			console.log("ooooo", isPwaInstalled(), getPWADisplayMode())
			router.push("/installation")
		}
	},);
	// window.addEventListener("beforeinstallprompt", (event) => {
	// 	event.preventDefault();
	// 	router.push("/installation")
	// });




	// async function  AArrowDown(){
	// 	const relatedApps = await navigator.getInstalledRelatedApps();
	// 	console.log("hhhhhhhh", relatedApps)
	// 	relatedApps.forEach((app) => {
	// 		console.log("////////",app.id, app.platform, app.url);
	// 	});
	// }

	// AArrowDown()
	// React.useEffect(() => {
	// 	AArrowDown()
	// },);
	return (
		<>
			{children}
			{/* <button id="install" hidden>Install</button> */}

		</>
	);
}
