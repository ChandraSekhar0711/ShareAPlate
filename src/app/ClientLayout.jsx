"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/sections/Navbar.jsx";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  // routes without navbar
  const noNavbarRoutes = ["/login", "/register", "/forgotPassword"];

  return (
    <div className="min-h-screen">
      {!noNavbarRoutes.includes(pathname) && <Navbar />}
      {children}
    </div>
  );
}
