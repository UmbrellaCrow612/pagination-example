import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { nextUrl } = request;

  const offset = nextUrl.searchParams.get("offset");
  const limit = nextUrl.searchParams.get("limit");

  if (!offset || !limit || Number(offset) < 20 || Number(limit) < 20) {
    return NextResponse.redirect(new URL("/?offset=20&limit=20", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
