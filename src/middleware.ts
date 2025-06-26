import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const cookieCheckUser = req.cookies.get("refresh_token")?.value;  
  const pathname = req.nextUrl.pathname;


  if (cookieCheckUser && (pathname === "/login" || pathname === "/register"  || pathname === '/forget-password' )) {
    return NextResponse.redirect(new URL('/', req.url)); 
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/forget-password"], 
};