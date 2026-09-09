'use client';

import { AuthProvider } from '@/context/AuthContext';
import { ThemeProvider } from '@/sections/ThemeProvider';
import { Navbar } from '@/sections/Navbar.jsx';

export default function ClientLayout({ children }) {
  return (
    <AuthProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        {children}
      </ThemeProvider>
    </AuthProvider>
  );
}
