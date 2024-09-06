import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Fugaz_One } from "next/font/google";
import Link from "next/link";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

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
  title: "Sports Tracker",
  description: "Sports activities tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = (
    <header className="flex items-center justify-between gap-4 p-4 sm:p-8">
      <Link href={"/"}>
        <h1 className={`text-3xl sm:text-lg textGradient ${fugaz.className}`}>
          SportsTracker
        </h1>
      </Link>
      <h2>Placeholder</h2>
    </header>
  );
  return (
    <html lang="en">
      <body
        className={`bg-background w-full max-w-[1000px] mx-auto text-md sm:text-base ${geistSans.variable} ${geistMono.variable}`}
      >
        {header}
        {children}
      </body>
    </html>
  );
}
