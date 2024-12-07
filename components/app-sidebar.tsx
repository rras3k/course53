"use client"

import * as React from "react"
import imgHome from "@/public/icons/icon-48x48.png";
import { twMerge } from "tailwind-merge";
import { clsx } from 'clsx';
import { useState, useEffect } from 'react';
import { get } from 'idb-keyval';
import Image from "next/image";


import {
	Frame,
	Map,
	PieChart,
	Settings2,
	SquareTerminal,
	MessageSquareMore,
	Car,
	CircleHelp,
	Settings
} from "lucide-react"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import {
	Sidebar,
	SidebarMenu,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
	SidebarMenuItem,
	SidebarMenuButton
} from "@/components/ui/sidebar"
import { getAppVersion } from "@/lib/rrasb2k/app";

const version = getAppVersion();

// const data = {
// 	user: {
// 		name: "shadcn",
// 		email: "m@example.com",
// 		avatar: "/avatars/shadcn.jpg",
// 	},
// 	team:
// 	{
// 		name: "Course 53",
// 		logo: imgHome,
// 		comment: "Artaxi, " + version,
// 	},


// 	navMain: [
// 		{
// 			title: "Courses",
// 			url: "/",
// 			icon: Car,
// 			isActive: true,
// 			items: [
// 				{
// 					title: "A faire",
// 					url: "/",
// 				},
// 				{
// 					title: "Propositions",
// 					url: "/",
// 				},
// 				{
// 					title: "Annulées",
// 					url: "/",
// 				},
// 				{
// 					title: "Cloturées",
// 					url: "/",
// 				},
// 				{
// 					title: "Toutes",
// 					url: "/",
// 				},
// 			],
// 		},
// 		{
// 			title: "Messages",
// 			url: "/messages",
// 			icon: MessageSquareMore,
// 		},
// 		{
// 			title: "Documentation",
// 			url: "/aide",
// 			icon: CircleHelp,
// 			items: [
// 				{
// 					title: "Introduction",
// 					url: "/aide",
// 				},
// 				{
// 					title: "Get Started",
// 					url: "#",
// 				},
// 				{
// 					title: "Tutorials",
// 					url: "#",
// 				},
// 				{
// 					title: "Changelog",
// 					url: "#",
// 				},
// 			],
// 		},
// 		{
// 			title: "Paramètres",
// 			url: "/parametres",
// 			icon: Settings2,
// 			items: [
// 				{
// 					title: "General",
// 					url: "#",
// 				},
// 				{
// 					title: "Team",
// 					url: "#",
// 				},
// 				{
// 					title: "Billing",
// 					url: "#",
// 				},
// 				{
// 					title: "Limits",
// 					url: "#",
// 				},
// 			],
// 		},
// 	],
// 	projects: [
// 		{
// 			name: "Design Engineering",
// 			url: "#",
// 			icon: Frame,
// 		},
// 		{
// 			name: "Sales & Marketing",
// 			url: "#",
// 			icon: PieChart,
// 		},
// 		{
// 			name: "Travel",
// 			url: "#",
// 			icon: Map,
// 		},
// 	],
// }
export function AppSidebar({ data, ...props }: React.ComponentProps<typeof Sidebar>) {
	const [hasProposition, setHasProposition] = useState(false);

	useEffect(() => {
		get('hasProposition').then((value) => {
			if (value != null && value) {
				setHasProposition(true);
			}
		});
	}, [hasProposition])
	const iconHome_className = clsx(
		'mx-3 flex-none',
		{
			'bg-yellow-200': hasProposition,
		}
	);
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<a href="#">
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg  text-sidebar-primary-foreground">
									<Image className={twMerge(iconHome_className)} src={imgHome} alt="Home" />
								</div>
								<div className="flex flex-col gap-0.5 leading-none">
									<span className="font-semibold">{data.team.name}</span>
									<span className="">{data.team.comment}</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				{/* <NavProjects projects={data.projects} /> */}
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}
