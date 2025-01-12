import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";
import Head from "next/head";

export const metadata: Metadata = {
  title: "BatterySupporter web",
  description: "BatterySupporter web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          <title>BatterySupporter</title>
          <meta
            name="description"
            content="A useful desktop application for supporting your device's battery usage."
          />
          <meta
            name="google-site-verification"
            content="dVRTS_9lJ9SL6_YPh2Il8afiUi0v_3EbbHesLSBdDeo"
          />
        </Head>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
