'use client';

import { Heart, Menu, UserIcon, X, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle.jsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from './Logo.jsx';
import { useAuth } from '@/context/AuthContext';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const UserNav = () => {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full border-2 border-transparent hover:border-primary/20 transition-all cursor-pointer focus-visible:ring-0 focus-visible:ring-offset-0">
          <Avatar className="h-9 w-9">
            <AvatarImage src={user.photoURL} alt={user.displayName || 'User'} />
            <AvatarFallback className="bg-primary/10 text-primary">
              {user.displayName?.[0] || user.email?.[0] || 'U'}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-2 shadow-xl border-border bg-background/95 backdrop-blur-sm" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5 leading-none">
            {user.displayName && (
              <p className="font-medium text-sm">{user.displayName}</p>
            )}
            {user.email && (
              <p className="w-[200px] truncate text-xs text-muted-foreground">
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer focus:bg-primary/10 focus:text-primary">
          <Link href="/profile" className="flex w-full items-center justify-around">
            <span>Profile</span>
            <UserIcon className="h-4 w-4 opacity-70" />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={handleLogout}
          className="cursor-pointer focus:bg-destructive/10 focus:text-destructive text-destructive flex items-center justify-around"
        >
          <span>Logout</span>
          <LogOut className="h-4 w-4 opacity-70" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useAuth();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Donate', href: '/donate' },
    { name: 'Requests', href: '/requests' },
  ];

  return (
    <nav className="bg-background/90 backdrop-blur-md border-b border-border sticky top-0 z-[100] transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & App Name */}
          <Link href="/" className="flex items-center space-x-2 group">
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
                className={`text-base font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}>
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {user ? (
              <UserNav />
            ) : (
              <Button
                asChild
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Link href="/login">Join Community</Link>
              </Button>
            )}
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            {user && <UserNav />}
            <button
              className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-muted-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-medium py-2 transition-colors duration-200 ${
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                {!user && (
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 rounded-full shadow-lg transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link href="/login">Join Community</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
