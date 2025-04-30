import { links } from './app/store'
import { NextResponse } from 'next/server'
import { toast } from 'react-toastify'

// We MUST call this as 'middleware'
export function middleware(request) {
    // request -> запрос
    // response -> ответ
    // cookies  -> куки
    // nextUrl  -> следующий url
    // pathname -> путь
    // session  -> сессия (сеанс)


    const session = request.cookies.get('session')
    const { pathname } = request.nextUrl // https://.../auth/login

    // Extract just the paths from both route types
    const protectedPaths = links.authLinks.map(route => route.path)
    const publicPaths = links.nonAuthLinks.map(route => route.path)

    // Check if the current route is public
    const isPublicRoute = publicPaths.includes(pathname)

    // If it's a public route, allow access
    if (isPublicRoute) {
        return NextResponse.next()
    }

    // Check if the current route is protected
    const isProtectedRoute = protectedPaths.includes(pathname)

    // If the route is protected and there's no session, redirect to login
    if (isProtectedRoute && !session) {
        return NextResponse.redirect(new URL('/not-found', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
    ],
}

