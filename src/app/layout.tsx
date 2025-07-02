import { CafeNavigationMenu } from "@/components/cafe-menubar";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shelter Café",
  description: "Escape from reality? Or just take a break.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning className="min-h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-start h-full overflow-y-auto`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CafeNavigationMenu />
          <main className="flex flex-col grow items-center">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
