import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/sections/Navbar.jsx";
import { ThemeProvider } from "@/sections/ThemeProvider";
import { RouterProvider } from "@/sections/Router";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ShareAPlate",
  description: "Community-driven food sharing app",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <RouterProvider>
            <Navbar />
            <div className="min-h-screen">{children}</div>
          </RouterProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
