import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const session = (req as any).nextauth.token;

    if (session) {
      if (pathname.startsWith("/auth")) {
        return NextResponse.redirect(new URL("/", req.url));
      }
      if (session.user.userRole === "user" && pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    } else {
      if (pathname.startsWith("/user")) {
        return NextResponse.redirect(new URL("/auth", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true,
    },
  },
);
export const config = {
  matcher: ["/user/:path*", "/admin/:path*", "/auth"],
};
