import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar/navbar";

import CursorGradient from "@/components/CursorGradient";
// import { Meteors } from "@/components/meteors";
import Footer from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Surya Man Kedem - Software Engineer & UI/UX Designer",
  description:
    "Portfolio of Surya Man Kedem, showcasing expertise in React, Next.js, and UI/UX Design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {" "}
          {/* <CursorGradient
            size="w-[50vh] h-[50vh]"
            opacity={0.9}
            colors={{ start: "#0D47A1", end: "rgba(13, 71, 161, 0)"}}
            pattern={{ color: "#000000", size: "5px" }}
          /> */}
          {/* <CursorGradient
            size="w-[50vh] h-[50vh]"
            colors={{
              light: { start: "#E1F5FE", end: "rgba(225, 245, 254, 0)" },
              dark: { start: "#0D47A1", end: "rgba(13, 71, 161, 0)" },
            }}
            opacity={{ light: 0.5, dark: 0.6 }}
            pattern={{
              light: { color: "#80DEEA", size: "16px" },
              dark: { color: "#1E88E5", size: "12px" },
            }}
          /> */}
          <CursorGradient
            size="w-64 h-64 md:w-96 md:h-96"
            smoothing={0.15}
            colors={{
              light: {
                gradientStart: "#f0fdf4",
                gradientEnd: "transparent",
                pattern: "#86efac",
              },
              dark: {
                gradientStart: "#052e16",
                gradientEnd: "transparent",
                pattern: "#166534",
              },
            }}
          />
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-base space-y-4 z-10 ">
            <Navbar />
            <div className="sm:mx-10">
              {/* <Meteors number={30}/> */}
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
