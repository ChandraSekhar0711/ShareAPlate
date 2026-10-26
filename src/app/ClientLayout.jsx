'use client';

import { AuthProvider, useAuth } from '@/context/AuthContext';
import { ThemeProvider } from '@/sections/ThemeProvider';
import { Navbar } from '@/sections/Navbar.jsx';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

function ProtectedRouteHandler({ children }) {
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      const protectedRoutes = ['/donate', '/requests'];
      if (!user && protectedRoutes.includes(pathname)) {
        router.push('/login');
      }
    }
  }, [user, loading, pathname, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return <>{children}</>;
}

export default function ClientLayout({ children }) {
  return (
    <AuthProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ProtectedRouteHandler>
          <Navbar />
          {children}
        </ProtectedRouteHandler>
      </ThemeProvider>
    </AuthProvider>
  );
}
