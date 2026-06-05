import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deepesh Kumar | Technology Educator & Entrepreneur",
  description: "Helping students master software engineering, AI, data science and digital skills while helping businesses leverage technology for growth.",
  keywords: [
    "Deepesh Kumar",
    "Software Development Trainer",
    "AI Trainer India",
    "Data Science Trainer",
    "Digital Marketing Consultant",
    "Technology Mentor",
    "Software Architect",
    "Career Coach",
    "Amritsar Technology Expert",
    "Tech Entrepreneur India"
  ],
  openGraph: {
    title: "Deepesh Kumar | Technology Educator & Entrepreneur",
    description: "Helping students master software engineering, AI, data science and digital skills while helping businesses leverage technology for growth.",
    url: "https://deepeshkumar.com", // Placeholder
    siteName: "Deepesh Kumar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepesh Kumar | Technology Educator & Entrepreneur",
    description: "Technology Educator, Entrepreneur, Software Architect, AI & Data Science Mentor",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${inter.variable} antialiased min-h-screen font-sans selection:bg-electric-blue selection:text-white bg-deep-navy`}>
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
