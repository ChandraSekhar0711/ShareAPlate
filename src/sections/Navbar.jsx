"use client";

import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle.jsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo.jsx";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Donate", href: "/donate" },
    { name: "Requests", href: "/requests" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <nav className="bg-background/90 backdrop-blur-md border-b border-border sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            {/* <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
                <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center">
                  <div className="w-4 h-1 bg-amber-400 rounded-full"></div>
                </div>
              </div>
              <Heart className="w-4 h-4 text-orange-400 absolute -top-1 -right-1 fill-current" />
            </div> */}
            <Logo />
            <span className="text-xl text-foreground font-medium group-hover:text-primary transition-colors">
              ShareAPlate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Login/Signup Button */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-primary hover:bg-muted"
            >
              Login
            </Button>
            <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300">
              Sign Up
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-muted-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block w-full text-left py-2 transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t border-border">
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-primary hover:bg-muted justify-start"
              >
                Login
              </Button>
              <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 justify-start">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
