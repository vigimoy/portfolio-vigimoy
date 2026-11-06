import type { Metadata } from "next";
import { Inter, Charm } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const charm = Charm({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-charm",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://vigimoy-portfolio.vercel.app"),
  title: "Muhamad Rizqi Akbar — Front-end Developer",
  description:
    "Front-end development portfolio of Muhamad Rizqi Akbar. Responsive interfaces, React, Next.js, and projects built through the WPH bootcamp.",
  alternates: { canonical: "/" },
  authors: [{ name: "Muhamad Rizqi Akbar" }],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Vigimoy Portfolio",
    title: "Vigimoy — Front-end Developer",
    description:
      "Muhamad Rizqi Akbar. Turning designs into responsive, interactive websites with React, Next.js, and TypeScript.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ard_rizqiakbar",
    images: [{ url: "/opengraph-image", alt: "Vigimoy — Front-end Developer" }],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${charm.variable}`}>{children}</body>
    </html>
  );
}
