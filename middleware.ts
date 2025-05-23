// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  // Don't run middleware on API routes
  if (request.nextUrl.pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

  // --- NEW LOGS FOR ENV VARS ---
  console.log('--- MIDDLEWARE ENV VARS ---');
  console.log(
    'process.env.NEXTAUTH_SECRET (length):',
    process.env.NEXTAUTH_SECRET?.length
  );
  console.log('process.env.NEXTAUTH_URL:', process.env.NEXTAUTH_URL);
  console.log('--- END MIDDLEWARE ENV VARS ---');
  // --- END NEW LOGS ---

  const token = await getToken({ req: request });
  const isAuthenticated = !!token;

  // ********************************************
  // PREVIOUSLY ADDED CONSOLE.LOG STATEMENTS
  console.log('--- MIDDLEWARE LOG START ---');
  console.log('Middleware Path:', request.nextUrl.pathname);
  console.log('Middleware IsAuthenticated:', isAuthenticated);
  console.log('Middleware Token Exists:', !!token);
  // Do NOT log the full token here if you are in a production environment as it's sensitive
  // console.log('Full token (if exists):', token);
  // ********************************************

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
    console.log(
      'Middleware Action: Redirecting to /login (Auth required, not authenticated)'
    ); // Log action
    const redirectUrl = new URL('/login', request.url);
    redirectUrl.searchParams.set('callbackUrl', encodeURI(request.url));
    return NextResponse.redirect(redirectUrl);
  }

  // If the route is public and user is authenticated (like login page)
  if (isPublicRoute && isAuthenticated) {
    console.log(
      'Middleware Action: Redirecting to /dashboard (Public route, already authenticated)'
    ); // Log action
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  console.log('Middleware Action: Continuing to next handler (no redirect).'); // Log action
  console.log('--- MIDDLEWARE LOG END ---');
  return NextResponse.next();
}

// Update matcher to exclude /api/auth routes
export const config = {
  matcher: ['/((?!api/auth|_next/static|_next/image|favicon.ico).*)'],
};
