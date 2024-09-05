import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  return (
    <html lang="en">
      <body
        className={`bg-background w-full max-w-[1000px] mx-auto text-md sm:text-base min-h-screen flex flex-col ${geistSans.variable} ${geistMono.variable} `}
      >
        <header className="flex items-center justify-between gap-4 sm:p-8">
          <h1 className="text-lg font-extrabold textGradient">
            Sports Tracker 
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}
