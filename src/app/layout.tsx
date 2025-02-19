import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "L3 Squad",
  icons: {
    icon: "/img/l3squad.jpg",
  },
  description: "Generated by L3 SQUAD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <div className="pt-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
            {children}
          </div>

          {/* Footer */}
          <Footer />

          {/* Popup Widget */}
          <PopupWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
