import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/shared/components/Header";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

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
      <body className={`${poppins.className} antialiased p-5 md:p-0`}>
        <ToastContainer />
        <Header />
        <main className="flex flex-col justify-center items-center min-h-[90dvh] pb-10">
          {children}
        </main>
      </body>
    </html>
  );
}
