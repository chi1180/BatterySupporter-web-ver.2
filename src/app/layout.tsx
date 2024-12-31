import type {Metadata} from "next";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "BatterySupporter web",
  description: "BatterySupporter web",
};

export default function RootLayout({children}: Readonly<{
  children: ReactNode;
}>) {
  return (
      <ClerkProvider>
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
      </ClerkProvider>
  );
}

