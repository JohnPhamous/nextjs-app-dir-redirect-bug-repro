import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(request) {
  // This causes the page to hang.
  // We want to redirect back to the home page at /.
  // This works on next@13.2.4, does not work on next@13.4.3.
  redirect("/");

  // This works
  //   const response = new NextResponse();
  //   return NextResponse.json({ test: "test" });
}
