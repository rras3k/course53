"use client"

import * as React from "react"
import {
	BookOpen,
	Bot,
	Command,
	Frame,
	LifeBuoy,
	Map,
	PieChart,
	Send,
	Settings2,
	SquareTerminal,
	CircleFadingArrowUp,
	Car,
	MessageSquareMore
} from "lucide-react" 
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar"

import { getAppVersion } from "@/lib/app"


const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	navMain: [
		{
			title: "Courses",
			url: "/",
			icon: Car,
			isActive: false,
			items: [
				{
					title: "Normales",
					url: "/",
				},
				{
					title: "Propositions",
					url: "/course?filtre=",
				},
				{
					title: "Clôturées",
					url: "#",
				},
				{
					title: "Annulées",
					url: "#",
				},
				{
					title: "Toutes",
					url: "#",
				},
			],
		},
		{
			title: "Messages",
			url: "/messages",
			icon: MessageSquareMore,
			
		},
		{
			title: "Documentation",
			url: "#",
			icon: BookOpen,
			items: [
				{
					title: "Introduction",
					url: "#",
				},
				{
					title: "Get Started",
					url: "#",
				},
				{
					title: "Tutorials",
					url: "#",
				},
				{
					title: "Changelog",
					url: "#",
				},
			],
		},
		{
			title: "Paramètres",
			url: "/parametres",
			icon: Settings2,
			items: [
				{
					title: "Notifications",
					url: "/parametres/#",
				},
				
			],
		},
	],
	navSecondary: [
		{
			title: getAppVersion(),
			url: "https://artaxi-laval.fr/chancelog",
			icon: CircleFadingArrowUp,
		},
		
	],
	projects: [
		{
			name: "Test",
			url: "/test",
			icon: Frame,
		},
		
	],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar variant="inset" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<a href="#">
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
									<Command className="size-4" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">Acme Inc</span>
									<span className="truncate text-xs">Enterprise</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavProjects projects={data.projects} />
				<NavSecondary items={data.navSecondary} className="mt-auto" />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	)
}
