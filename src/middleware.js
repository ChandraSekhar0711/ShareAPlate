import { NextResponse } from 'next/server';

export function middleware(request) {
  // Get the token from the cookies
  const token = request.cookies.get('firebase-auth-token');

  // If the user is trying to access the profile page and there's no token,
  // redirect them to the login page.
  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // If the token exists, let them proceed.
  // For production, you should verify the token's validity on the server.
  return NextResponse.next();
}

export const config = {
  matcher: '/profile/:path*',
};
