import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Roboto({subsets:["latin"], weight:["100", "300", "400", "500", "700", "900"]});

export const metadata: Metadata = {
  title: "African Fashion Week London",
  description: "Showcasing African Fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
