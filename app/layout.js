import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GPT Problem Solver",
  description: "GPT powered assistant to help you interpret your problems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-white`}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
