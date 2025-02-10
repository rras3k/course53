"use client";

import { usePathname} from "next/navigation"
import { getPWADisplayMode, isPwaInstalled } from "@/lib/rrasb2k/app"
import { useEffect } from 'react'

export default function LayoutInstall({ children }: { children: React.ReactNode }) {
	const pahtName = usePathname()

	useEffect(() => {
		if (process.env.NEXT_PUBLIC_APP_ONLY === "true" && !isPwaInstalled()) {
			if (pahtName !== "/installation") {
				console.log("Pas installé !!!!!!", isPwaInstalled(), getPWADisplayMode())
			}
		}
	})
	return (
		<>
			{children}
		</>
	)
}