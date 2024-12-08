import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import FoodCategory from "./components/foodCategory";
import Menu from "./components/menu";
import Chef from "./components/chef";
import Testimonial from "./components/testimonial";
import ActiveProcess from "./components/activeProcess";
import Blog from "./components/blog";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <FoodCategory/>
        <Menu/>
        <Chef/>
        <Testimonial/>
        <ActiveProcess/>
        <Blog/>
        <Footer/>0-0
      </body>
    </html>
  );
}
