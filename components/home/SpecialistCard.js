import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SpecialistCard = ({ name, description, title }) => {
  return (
    <div className="min-h-[200px]  p-[1.6rem] shadow-lg rounded-md bg-gray-600 flex flex-col justify-center items-center">
      <div className="h-[50px] w-[50px]">
        <Image
          alt="Doctor image"
          src={"/doctor.png"}
          height={50}
          width={50}
          style={{
            objectFit: "contain",
            borderRadius: "50%",
            border: "1px solid white",
          }}
        />
      </div>
      <div className="text-md font-bold mt-2">{name}</div>
      <div className="text-sm">{title}</div>
      <div className="text-sm mt-2">{description}</div>
      <Link href={`/chat?title=${title}&description=${description}&name=${name}`}>
        <button className="border rounded-md px-10 py-1 mt-2 hover:bg-white hover:text-black transition-all cursor-pointer">
          Chat
        </button>
      </Link>
    </div>
  );
};
