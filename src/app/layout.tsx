import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/shared/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Airbnb Replica",
  description: "Simple Airbnb Home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="top-0 sticky z-20">
          <Navbar />
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="text-gray-700 bg-gray-200 py-4 flex justify-center">
          <p className="text-[15px]">This is a simple footer!</p>
        </footer>
      </body>
    </html>
  );
}
