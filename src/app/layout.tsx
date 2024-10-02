import type { Metadata } from "next";
import "./globals.css";

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
       
        <main className="min-h-screen">{children}</main>
        <footer className="text-gray-700 bg-gray-200 py-4 flex justify-center">
          <p className="text-[15px]">This is a simple footer!</p>
        </footer>
      </body>
    </html>
  );
}
