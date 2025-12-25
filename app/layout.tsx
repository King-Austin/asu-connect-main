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
  metadataBase: new URL("https://www.akpustudentsunion.com.ng"),
  title: {
    default: "Akpu Students Union (ASU) - Restoring the Dignity of Our Ethics",
    template: "%s | Akpu Students Union (ASU)",
  },
  description:
    "Akpu Students Union (ASU) is a well-recognized and respected student body representing indigenous students of Akpu Town across various academic institutions in Nigeria. We are committed to restoring the dignity of our ethics, promoting academic excellence, and fostering unity among Akpu students.",
  keywords: [
    "Akpu Students Union",
    "ASU",
    "Akpu Town",
    "Student Union",
    "Orumba South",
    "Anambra State",
    "Nigerian Students",
    "Student Leadership",
    "Akpu Community",
    "Student Welfare",
    "Academic Excellence",
    "Student Programs",
    "Akpu Youth",
  ],
  authors: [{ name: "Akpu Students Union", url: "https://www.akpustudentsunion.com.ng" }],
  creator: "Akpu Students Union",
  publisher: "Akpu Students Union",
  applicationName: "Akpu Students Union",
  category: "Education",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.akpustudentsunion.com.ng",
    siteName: "Akpu Students Union (ASU)",
    title: "Akpu Students Union (ASU) - Restoring the Dignity of Our Ethics",
    description:
      "A well-recognized and respected student body representing indigenous students of Akpu Town across various academic institutions in Nigeria. Join us in promoting academic excellence and unity.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Akpu Students Union Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@akpustudents",
    creator: "@akpustudents",
    title: "Akpu Students Union (ASU) - Restoring the Dignity of Our Ethics",
    description:
      "A well-recognized student body representing indigenous students of Akpu Town across various academic institutions.",
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: "https://www.akpustudentsunion.com.ng",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Akpu Students Union",
    alternateName: "ASU",
    url: "https://www.akpustudentsunion.com.ng",
    logo: "https://www.akpustudentsunion.com.ng/asu-logo.png",
    description:
      "A well-recognized and respected student body representing indigenous students of Akpu Town across various academic institutions in Nigeria.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Akpu",
      addressRegion: "Anambra State",
      addressCountry: "NG",
    },
    sameAs: [
      "https://facebook.com/akpustudents",
      "https://twitter.com/akpustudents",
      "https://instagram.com/akpustudents",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
