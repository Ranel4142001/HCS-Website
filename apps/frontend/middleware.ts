/**
 * Route protection middleware.
 * Runs on every request before rendering — redirects unauthenticated users.
 */
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_ROUTES = ['/', '/about', '/pricing', '/services', '/contact', '/faq'];
const AUTH_ROUTES = ['/login', '/register', '/forgot-password', '/reset-password'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('auth_token')?.value;

  const isPublicRoute = PUBLIC_ROUTES.some((r) => pathname === r);
  const isAuthRoute = AUTH_ROUTES.some((r) => pathname.startsWith(r));
  const isDashboardRoute = pathname.startsWith('/dashboard') ||
    pathname.startsWith('/providers') ||
    pathname.startsWith('/organizations') ||
    pathname.startsWith('/credentialing') ||
    pathname.startsWith('/documents') ||
    pathname.startsWith('/appointments') ||
    pathname.startsWith('/reports') ||
    pathname.startsWith('/notifications') ||
    pathname.startsWith('/settings') ||
    pathname.startsWith('/profile');

  // Redirect unauthenticated users away from dashboard routes
  if (isDashboardRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Redirect authenticated users away from auth routes
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Skip Next internals, SEO files, and static assets served from /public
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|webp|avif|svg|ico|mp4)$).*)'],
};
