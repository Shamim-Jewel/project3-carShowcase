import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car-Hub",
  description: "Find book or rent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative mx-2">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
