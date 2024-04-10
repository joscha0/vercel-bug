import { NextRequest, NextResponse } from "next/server";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchData() {
  await sleep(5000);
  return "Hello World!";
}

export async function POST(request: NextRequest) {
  const data = await fetchData();

  console.log("Data fetched:", data);

  return NextResponse.json({ status: 200, body: data });
}
