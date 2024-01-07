import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthenticated } from "./app/authentication/authentication_service";

const protectedRoutes = ["/settings"];

export default function middleware(req: NextRequest) {
  console.log(req.nextUrl.pathname);
  if (
    !isAuthenticated(req.cookies.get("token")?.value) &&
    protectedRoutes.includes(req.nextUrl.pathname)
  ) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
