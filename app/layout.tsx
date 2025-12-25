import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asuconnect.org"),
  title: {
    default: "Akpu Students Union (ASU) - Home",
    template: "%s | Akpu Students Union",
  },
  description:
    "Akpu Students Union (ASU) is a well-recognized student body representing indigenous students of Akpu Town across various academic institutions. Join us in restoring the dignity of our ethics.",
  keywords: [
    "Akpu Students Union",
    "ASU",
    "Akpu Town",
    "Student Union",
    "Orumba",
    "Anambra State",
    "Nigerian Students",
    "Student Leadership",
  ],
  authors: [{ name: "Akpu Students Union" }],
  creator: "Akpu Students Union",
  publisher: "Akpu Students Union",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://asuconnect.org",
    siteName: "Akpu Students Union",
    title: "Akpu Students Union (ASU) - Restoring the Dignity of Our Ethics",
    description:
      "A well-recognized and respected student body representing indigenous students of Akpu Town across various academic institutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Akpu Students Union",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akpu Students Union (ASU)",
    description:
      "Representing indigenous students of Akpu Town across various academic institutions.",
    images: ["/og-image.jpg"],
    creator: "@asuconnect",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
