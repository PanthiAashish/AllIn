import { Specialists } from "@/components/home/Specialists";
import React from "react";

export default function Home() {
  return (
    <main className="h-[100vh] w-100 flex items-center justify-center flex-col p-10">
      <div className="text-3xl">
        Welcome to your personal health assistant app.
      </div>
      <div className="text-xl py-10">Choose Your Doctor</div>

      <Specialists />
    </main>
  );
}
