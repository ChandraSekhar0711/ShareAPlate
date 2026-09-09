
import { NextResponse } from 'next/server';

const protectedRoutes = ['/profile', '/donate', '/requests'];

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const session = request.cookies.get('session');

  if (protectedRoutes.includes(pathname) && !session) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
