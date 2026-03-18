import { NextResponse } from "next/server";

export function middleware() {
  return NextResponse.redirect(
    "https://rgacatalogo.vercel.app/catalog/salgados",
  );
}

export const config = {
  matcher: "/:path*",
};
