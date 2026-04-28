import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Felipe Vilela Freire — Fullstack Developer",
  description:
    "International CV & Portfolio — Fullstack Developer & Information Systems Student. EU Citizen.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full bg-[#030303] antialiased">{children}</body>
    </html>
  );
}
