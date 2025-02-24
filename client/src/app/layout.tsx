import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krystal's Portfolio",
  description: "Landing Page For My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="font-sans w-screen h-screen bg-gray-900">
        {children}
      </body>
    </html>
  );
}
