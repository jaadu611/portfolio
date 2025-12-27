import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen w-screen overflow-hidden bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url('/wallpapers/wallpaper1.webp')] dark:bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.1)),url('/wallpapers/wallpaper1.webp')] bg-cover bg-center bg-no-repeat bg-blend-darken">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
