import {
	Settings2,
	MessageSquareMore,
	Car,
	CircleHelp,
} from "lucide-react"


export const menu = [
		{
			title: "Courses",
			url: "/",
			icon: Car,
			isActive: true,
			items: [
				{
					title: "A faire",
					url: "/",
				},
				{
					title: "Propositions",
					url: "/",
				},
				{
					title: "Annulées",
					url: "/",
				},
				{
					title: "Cloturées",
					url: "/",
				},
				{
					title: "Toutes",
					url: "/",
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
			url: "/aide",
			icon: CircleHelp,
			items: [
				{
					title: "Introduction",
					url: "/aide",
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
			url: "/parametrage",
			icon: Settings2,
			items: [
				{
					title: "General",
					url: "#",
				},
				{
					title: "Team",
					url: "#",
				},
				{
					title: "Billing",
					url: "#",
				},
				{
					title: "Limits",
					url: "#",
				},
			],
		},
	]