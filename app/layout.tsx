import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyFinances",
  description: "Your finances app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monaSans.className} antialiased `}>
        <div>{children}</div>
      </body>
    </html>
  );
}
