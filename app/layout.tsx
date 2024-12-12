import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/shared/components/Header";

const poppins = Poppins({ weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Car Dealer App",
  description: "An app for front-end developer test assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        <main className="flex flex-col justify-center items-center min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
