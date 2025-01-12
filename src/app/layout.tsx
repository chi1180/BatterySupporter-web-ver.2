import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "BatterySupporter",
  description:
    "A useful desktop application for supporting your device's battery usage.",
  verification: {
    google: "dVRTS_9lJ9SL6_YPh2Il8afiUi0v_3EbbHesLSBdDeo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
