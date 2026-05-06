import type { Metadata } from "next";
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
  title: "RemoPro — Ремонт и дизайн интерьеров",
  description: "Премиальная реализация жилых и коммерческих пространств в Астрахани. От дизайн-проекта до сдачи под ключ.",
  icons: {
    icon: "/favicon.svg"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru" 
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#0a0a0a] text-white selection:bg-orange-500/30">
        {children}
      </body>
    </html>
  );
}
