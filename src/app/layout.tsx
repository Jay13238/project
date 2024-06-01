"use client";

import type { Metadata } from "next";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Link from "next/link";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <NavBar />
        <ChakraProvider>{children}</ChakraProvider>
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
