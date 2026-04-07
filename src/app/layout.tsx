import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const myFont = localFont({
  variable: "--font-my-font",
  src: "../../public/fonts/YouSheBiao.ttf",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "基于nextjs开发的聊天系统",
  description: "基于nextjs开发的聊天系统",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${myFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
