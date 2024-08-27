import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn One Day",
  description: "Japanese Learning Resources for passive learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
	<html lang="en" data-theme="valentine">
	<body className={inter.className} suppressHydrationWarning={true}>
		   <NavBar />
		   <main className='p-5'>
			   {children}
		   </main>
		   </body>
   </html>
  );
}
