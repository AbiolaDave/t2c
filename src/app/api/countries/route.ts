import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://www.apicountries.com/countries");

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch countries" },
      { status: 500 },
    );
  }

  const data = await res.json();
  console.log("my data", data);
  return NextResponse.json(data);
}

// dffe0721f37b430383f08991c0d25d5d 