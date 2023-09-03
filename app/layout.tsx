import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apoorv Portfolio",
  description: "Welcome to my portfolio website..",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[rgb(36,36,36)] text-white `}>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
