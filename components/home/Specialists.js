"use client";
import React from "react";
import specialists from "@/lib/specialists";
import { SpecialistCard } from "./SpecialistCard";

export const Specialists = () => {
  console.log(specialists);
  return (
    <div className="min-h-[40vh] w-3/4 p-5 grid  gap-3 grid-cols-2">
      {specialists.map((item, key) => (
        <SpecialistCard
          key={key}
          name={item.name}
          description={item.description}
          title={item.title}
        />
      ))}
    </div>
  );
};
