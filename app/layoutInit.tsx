"use client";

// import React from "react";
import "./globals.css";
import { usePathname, useRouter } from "next/navigation";

import { getPWADisplayMode, isPwaInstalled } from "@/lib/rrasb2k/app";

import { useState, useEffect, useMemo, useLayoutEffect } from 'react';


import "./globals.css";
import { identIsAut, TOKEN } from "@/lib/artaxi";
import { get } from "idb-keyval";

process.env.NEXT_PUBLIC_APP_ONLY

export default function LayoutInit({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const pahtName = usePathname();
	const pathExcept = ["/test", "/aide"];

	useEffect(() => {
		if (process.env.NEXT_PUBLIC_APP_ONLY === "true" && !isPwaInstalled()) {
			if (pahtName !== "/installation") {
				console.log("Pas installé !!!!!!", isPwaInstalled(), getPWADisplayMode())
				router.push("/installation")
			}
		}
		else {
			console.log("installé !!! ou sur la page installation")
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
		}
	}, [pahtName]);
	return (
		<>
			{children}
		</>
	);
}


/*
if (!isPwaInstalled() && pahtName !== "/installation") {
			console.log("Pas installé !!!!!!", isPwaInstalled(), getPWADisplayMode())
			router.push("/installation")
		}
		else {
			console.log("installé !!! ou sur la page installation")
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
		}
*/