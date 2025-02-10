"use client";

import "./globals.css";
import { NavHor } from "@/components/nav-horizontal";
import { ThemeProvider } from "@/components/theme-provider"
import LayoutWorker from "./layoutWorker";
import React from "react";
import LayoutRoute from "./layoutRoute";
import ScreenWakeLock from "@/components/screen-wake-lock";
import "./globals.css";
import LayoutInstall from "./layoutInstall";
// import { usePathname, useRouter } from "next/navigation"
// import {  get } from 'idb-keyval';
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Course 53",
//   description: "gestion des courses du service TULIB de LAVAL",
//   manifest: "/manifest.json"
// };

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  // const router = useRouter()
  // const pahtName = usePathname()

  // if (pahtName !== "/identification" && pahtName !== "/installation") {
  //   get("token")
  //   router.push("/identification") #f6eeee
  // }

  return (
    <html lang="fr">
      <body>
        <LayoutWorker>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <LayoutInstall>
              <LayoutRoute>
                <ScreenWakeLock />
                <NavHor />
                <div className="pt-14 bg-black-800">
                  <div className="mx-auto md:w-[768px]">
                    {children}
                  </div>
                </div>
              </LayoutRoute>
            </LayoutInstall>
          </ThemeProvider>
        </LayoutWorker>
      </body>
    </html>
  );
}