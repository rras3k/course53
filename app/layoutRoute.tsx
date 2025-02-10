"use client";

import { usePathname, useRouter } from "next/navigation"
import { useEffect } from 'react'
import { TOKEN } from "@/lib/affinis"

export default function LayoutRoute({ children }: { children: React.ReactNode }) {
	const router = useRouter()
	const pahtName = usePathname()
	const pathExcept = ["/test", "/aide"]

	useEffect(() => {
		if (!pathExcept.includes(pahtName)) {
			const token: string | null = localStorage.getItem(TOKEN)
			if (token === null && pahtName !== "/identification") {
				console.log("Vers identification, car aucun TOKEN")
				return router.push("/identification")
			}
		}
	})
	return (
		<>
			{children}
		</>
	)
}