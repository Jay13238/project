"use client"

import type { Metadata } from "next";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
        <NavBar />
        <ChakraProvider>{children}</ChakraProvider>
<SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
