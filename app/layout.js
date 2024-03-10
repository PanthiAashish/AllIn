import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GPT Disease Interpreter",
  description: "GPT powered assistant to help you interpret your diseases",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-white`}>

        {children}
      </body>
    </html>
  );
}

