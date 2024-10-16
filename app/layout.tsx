import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavHor } from "@/components/nav-horizontal";
import { ThemeProvider } from "@/components/theme-provider"

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

export const metadata: Metadata = {
  title: "Course 53",
  description: "gestion des courses du service TULIB de LAVAL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased   `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <NavHor />
          <div className="pt-14">
            <div className="mx-auto md:w-[768px]">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
