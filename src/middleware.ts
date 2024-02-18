import createMiddleware from 'next-intl/middleware';
import { NextFetchEvent, NextMiddleware, NextRequest } from 'next/server';
import { supportedLocalesArray, defaultLocale, localePrefix, pathnames } from './constants';

export default withExtraMiddleware(
  createMiddleware({
    // A list of all locales that are supported
    locales: supportedLocalesArray,
    // Used when no locale matches
    defaultLocale,
    localePrefix,
    pathnames,
    //alternateLinks: false, // Defaults to `true`
  })
);

function withExtraMiddleware(next: NextMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const response = await next(request, event);
    return response;
  };
}


//export default async function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  //const { pathname } = request.nextUrl; console.log('pathname',pathname)
  /*const pathnameHasLocale = supportedLocalesArray.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );console.log('pathnameHasLocale',pathnameHasLocale)*/

  //const url = request.nextUrl.clone();
  //console.log('!',request.nextUrl.locale);

  //if (pathnameHasLocale) return;

  // Redirect if there is no locale
  /*const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`*/
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  //return Response.redirect(request.nextUrl)


  // Step 1: Use the incoming request (example)
  //const defaultLocale = request.headers.get('x-your-custom-locale') || 'en'; console.log(defaultLocale)

  // Step 2: Create and call the next-intl middleware (example)
  /*const handleI18nRouting = createIntlMiddleware({
    locales: ['en', 'ru'],
    defaultLocale,
  });
  const response = handleI18nRouting(request);*/

  // Step 3: Alter the response (example)
  //response.headers.set('x-your-custom-locale', defaultLocale);

  //return response;

  /*const handleI18nRouting = createIntlMiddleware({
    // A list of all locales that are supported
    locales: supportedLocalesArray,
    // Used when no locale matches
    defaultLocale,
    localePrefix,
    pathnames,
    alternateLinks: false, // Defaults to `true`
  });
  const response = handleI18nRouting(request); //console.log(response)
  return response;
}*/

/*export default createMiddleware({
  // A list of all locales that are supported
  locales: supportedLocalesArray,
  // Used when no locale matches
  defaultLocale,
  localePrefix,
  pathnames,
  //alternateLinks: false, // Defaults to `true`
});*/

export const config = {
  // Matcher entries are linked with a logical "or", therefore
  // if one of them matches, the middleware will be invoked
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    //'/((?!api|_next/static|_next/image|favicon.ico).*)',

    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    //'/((?!api|_next|_vercel|.*\\..*).*)',
    // However, match all pathnames within `/a`, optionally with a locale prefix
    //'/([\\w-]+)?/a/(.+)'
    //'/((?!api|static|.*\\..*|_next).*)'

    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(ru|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    //'/((?!_next|_vercel|.*\\..*).*)'

    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',

    // However, match all pathnames within `/users`, optionally with a locale prefix
    //'/([\\w-]+)?/help/(.+)'
  ]
};

//export function middleware(request) {
  // Check if there is any supported locale in the pathname
  //const { pathname } = request.nextUrl;
  /*const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`*/
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  //return Response.redirect(request.nextUrl)
//}
