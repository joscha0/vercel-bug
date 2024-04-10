"use client";

export default function Home() {
  async function getData() {
    const response = await fetch("/api/test", {
      method: "POST",
    });

    const data = await response.json();

    console.log("Data received:", data);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={getData}>get data</button>
    </main>
  );
}
