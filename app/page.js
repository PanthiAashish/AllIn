"use client";
import NavBar from "@/components/home/Navbar";
import { Specialists } from "@/components/home/Specialists";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { user, isLoading } = useUser();
  return (
    <>
      <NavBar />
      <main className="min-h-[calc(100vh-70px)] w-100 flex items-center justify-center flex-col p-10">
        {user ? (
          <>
            <div className="text-3xl">
              Welcome to your <span className="text-blue-500">Learning</span>{" "}
              Space
            </div>
            <div className="text-xl py-10">Choose Your Teacher</div>
            <Specialists />
          </>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 20px",
              maxWidth: "1200px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                maxWidth: "500px",
                marginRight: "30px",
              }}
            >
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                }}
              >
                Welcome to Allln
              </h1>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "normal",
                  fontFamily: "sans-serif",
                  color: "white",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              >
                Allln is a platform that connects you to the best teachers that
                can listen, analyze and give you the personalized responses. You
                can learn anything from anyone, anywhere in the world.
              </p>

              <Link
                href="/api/auth/login"
                className="btn btn-primary btn-margin"
                tabIndex={0}
                testId="navbar-login-desktop"
              >
                <button className="border rounded-md px-10 py-1 mt-2 hover:bg-white hover:text-black transition-all cursor-pointer">
                  Log in
                </button>
              </Link>
            </div>

            <div
              style={{
                objectFit: "contain",
                borderLeftBottomRadius: "50px",
                border: "1px solid white",
                overflow: "hidden",
              }}
            >
              <Image
                src="/robot_teacher.jpg"
                alt="Teacher image"
                width={500}
                height={500}
                style={{
                  objectFit: "contain",

                  borderLeftBottomRadius: "50px",
                  border: "1px solid white",
                }}
              />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
