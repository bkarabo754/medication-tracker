import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  // Don't run middleware on API routes
  if (request.nextUrl.pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

  const token = await getToken({ req: request });
  const isAuthenticated = !!token;

  // Paths that require authentication
  const authRoutes = ['/dashboard'];

  // Paths that should redirect to dashboard if user is logged in
  const publicRoutes = ['/login', '/register'];

  const path = request.nextUrl.pathname;

  // Check if the path starts with any authRoute
  const isAuthRoute = authRoutes.some((route) => path.startsWith(route));

  // Check if the path matches exactly any publicRoute
  const isPublicRoute = publicRoutes.includes(path);

  // If the route requires auth and user is not authenticated
  if (isAuthRoute && !isAuthenticated) {
    const redirectUrl = new URL('/login', request.url);
    redirectUrl.searchParams.set('callbackUrl', encodeURI(request.url));
    return NextResponse.redirect(redirectUrl);
  }

  // If the route is public and user is authenticated (like login page)
  if (isPublicRoute && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

// Update matcher to exclude /api/auth routes
export const config = {
  matcher: ['/((?!api/auth|_next/static|_next/image|favicon.ico).*)'],
};
