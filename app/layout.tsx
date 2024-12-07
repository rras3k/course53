"use client"

// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { NavHor } from "@/components/nav-horizontal";
import { ThemeProvider } from "@/components/theme-provider"
import LayoutWorker from "./layoutWorker";
import React from "react";
// import LayoutRedirect from "./layoutRedirect";
import { SidebarInset, SidebarProvider, SidebarTrigger, SidebarMobTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@radix-ui/react-separator";
import HomeLogo from "@/components/home-logo";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
} from "lucide-react";

import { useRouter, usePathname } from "next/navigation";

import { get } from "idb-keyval";
import { TOKEN } from "@/lib/artaxi";
import imgHome from "@/public/icons/icon-48x48.png";

import { getAppVersion } from "@/lib/rrasb2k/app";

const version = getAppVersion();



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Course 53",
//   description: "gestion des courses du service TULIB de LAVAL",
//   manifest: "/manifest.json"
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    team:
    {
      name: "Course 53",
      logo: imgHome,
      comment: "Artaxi, " + version,
    },


    navMain: [
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
        url: "/parametres",
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
    ],
    projects: [
      {
        name: "Design Engineering",
        url: "#",
        icon: Frame,
      },
      {
        name: "Sales & Marketing",
        url: "#",
        icon: PieChart,
      },
      {
        name: "Travel",
        url: "#",
        icon: Map,
      },
    ],
  }
  const [hasNav, setHasNav] = React.useState(true);


  const router = useRouter();
  const pahtName = usePathname();
  const pathExcept = [];
  // const pathExcept = ["/test", "/aide"];

  React.useEffect(() => {
    if (!pathExcept.includes(pahtName)) {
      get(TOKEN)
        .then(value => {
          if (value == undefined) {
            router.push("/identification")
            setHasNav(false);
          }
        })
        .catch(e => {
        })
    }
  },
    [router, pahtName]);

  return (
    <html lang="fr">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased   `}
        >

          {/* <LayoutWorker> */}
            {/* <LayoutRedirect path="kkkkk"> */}

            {hasNav &&
              <SidebarProvider>
              <AppSidebar data={data} />
                <SidebarInset>
                  <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4 w-full">
                      <div className="flex flex-1 items-center w-5/6">
                        <SidebarTrigger className="-ml-1 hidden md:block" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <div className="flex items-center md:hidden ">
                          <HomeLogo />
                          <Separator orientation="vertical" className="mr-2 h-4" />
                        </div>
                        <Breadcrumb>
                          <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                              <BreadcrumbLink href="#">
                                Building Your Application
                              </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                              <BreadcrumbPage>Data Fetchinmmg</BreadcrumbPage>
                            </BreadcrumbItem>
                          </BreadcrumbList>
                        </Breadcrumb>
                      </div>
                      <div className="flex-none items-center md:hidden">
                        <SidebarMobTrigger className="-ml-1" />
                      </div>
                    </div>
                  </header>
                  {children}
                </SidebarInset>
              </SidebarProvider>
            }

            {!hasNav &&
              <>
                {children}
              </>
            }
            {/* </LayoutRedirect> */}
          {/* </LayoutWorker> */}

        </body>
      </ThemeProvider> 

    </html>
  );
}




{/* <ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
>
  <NavHor />
  <div className="pt-14">
    <div className="mx-auto md:w-[768px]">
      <LayoutWorker>
        <LayoutRedirect path="kkkkk">
          {children}
        </LayoutRedirect>
      </LayoutWorker>
    </div>
  </div>
</ThemeProvider> */
}



/* 
Tout est dans app-sidebarr

 */