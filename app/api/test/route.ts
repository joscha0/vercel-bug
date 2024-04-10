import { NextRequest, NextResponse } from "next/server";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchData() {
  await sleep(7000);

  let a = new Array(10000);
  for (let i = 0; i < 10000; i++) a[i] = i;

  return a;
}

export async function POST(request: NextRequest) {
  const data = await fetchData();

  console.log("Data fetched:", data);

  return NextResponse.json({ status: 200, body: data });
}
