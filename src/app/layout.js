import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ruthi’s Aesthetics Beauty | Women's Fashion & Beauty Services",
  description:
    "Combining the latest trends with premium beauty products, Ruthi’s Aesthetics Beauty offers top-tier beauty treatments and fashionable women's wear. Shop new arrivals and book chic hairstyles and makeup services to feel like a runway queen!",
  keywords:
    "Ruthi’s Aesthetics Beauty, women's clothing, beauty services, online store, beauty treatments, ladies wear, massage services, threading, facials, Bangladesh",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Ruthi’s Aesthetics Beauty | Women's Fashion & Beauty Services",
    description:
      "Straddling the line between fashion and beauty, Ruthi’s Aesthetics Beauty lets you explore trending women's clothing and book expert makeup, hair, or massage services to elevate your look and confidence.",
    type: "website",
    locale: "en_US",
    siteName: "Ruthi’s Aesthetics Beauty",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruthi’s Aesthetics Beauty | Women's Fashion & Beauty Services",
    description:
      "Step into style with Ruthi’s Aesthetics Beauty. Shop the finest women's fashion—from signature outfits to trendy blouses—and discover top-notch beauty services, all in one place.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}  antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
