"use client";

import "./globals.css";
import { NavHor } from "@/components/nav-horizontal";
import { ThemeProvider } from "@/components/theme-provider"
import LayoutWorker from "./layoutWorker";
import React from "react";
import LayoutRoute from "./layoutRoute";
import ScreenWakeLock from "@/components/screen-wake-lock";
import LayoutInstall from "./layoutInstall";
import HasPorpositionProvider from "@/providers/has-proposition-provider";
import CourseTaxiProvider from "@/providers/course-taxi-provider";
import CourseAllTaxiProvider from "@/providers/course-all-taxi-provider";
import MessageTaxiProvider from "@/providers/message-taxi-provider";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="fr">
      <body>
        <LayoutWorker>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <LayoutInstall>
              <LayoutRoute>
                <ScreenWakeLock />
                <HasPorpositionProvider>
                  <NavHor />
                </HasPorpositionProvider>
                <CourseTaxiProvider>
                  <MessageTaxiProvider>
                    <CourseAllTaxiProvider>
                      <div className="pt-14 bg-black-800">
                        <div className="mx-auto md:w-[768px]">
                          {children}
                        </div>
                      </div>
                    </CourseAllTaxiProvider>
                  </MessageTaxiProvider>
                </CourseTaxiProvider>
              </LayoutRoute>
            </LayoutInstall>
          </ThemeProvider>
        </LayoutWorker>
      </body>
    </html>
  );
}