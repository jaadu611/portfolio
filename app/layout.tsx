import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Jaadu | Full Stack Developer",
  description:
    "Jaadu’s portfolio. I write code, summon bugs, banish them later, and ship full-stack apps powered by caffeine and questionable confidence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen w-screen overflow-hidden bg-[url('/wallpapers/wallpaper1.webp')] bg-cover bg-center bg-no-repeat">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
