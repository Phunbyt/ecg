import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeRegistry from "../components/ThemeRegistry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ECG Life Sciences",
  description: "Solutions that work",
  metadataBase: new URL("https://ECGLifeSciences.com"), // Base URL for absolute URLs
  keywords: ["ECG Life Sciences", "IT solutions", "technology services"],
  authors: [{ name: "ECG Life Sciences", url: "https://ECGLifeSciences.com" }],
  generator: "phunbytcode", // Added generator
  openGraph: {
    title: "ECG Life Sciences",
    description: "Solutions that work",
    url: "https://ECGLifeSciences.com",
    siteName: "ECG Life Sciences",
    images: [
      {
        url: "https://ik.imagekit.io/vsf44gqqe/logo.png", // Updated Open Graph image URL
        width: 1200,
        height: 630,
        alt: "ECG Life Sciences- Solutions that work",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ECG Life Sciences",
    description: "Solutions that work", // Updated Twitter description
    images: [
      "https://ik.imagekit.io/vsf44gqqe/logo.png",
    ], // Updated Twitter image URL
  },
  icons: {
    // icon: "https://ik.imagekit.io/vsf44gqqe/logo.png", // Favicon
    apple: [
      {
        url: "https://ik.imagekit.io/vsf44gqqe/logo.png",
        sizes: "57x57",
      },
      {
        url: "https://ik.imagekit.io/vsf44gqqe/logo.png",
        sizes: "60x60",
      },
      {
        url: "https://ik.imagekit.io/vsf44gqqe/logo.png",
        sizes: "72x72",
      },
      {
        url: "https://ik.imagekit.io/vsf44gqqe/logo.png",
        sizes: "114x114",
      },
      {
        url: "https://ik.imagekit.io/vsf44gqqe/logo.png",
        sizes: "120x120",
      },
      {
        url: "https://ik.imagekit.io/vsf44gqqe/logo.png",
        sizes: "144x144",
      },
      {
        url: "https://ik.imagekit.io/vsf44gqqe/logo.png",
        sizes: "152x152",
      },
      {
        url: "https://ik.imagekit.io/vsf44gqqe/logo.png",
        sizes: "180x180",
      },
    ], // Added multiple Apple touch icons
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: "https://ECGLifeSciences.com", // Canonical URL
    languages: {
      "en-US": "https://ECGLifeSciences.com/en-US", // Alternate language URLs
    },
  },
  verification: {
    google: "your-google-verification-code", // Google Search Console verification
    other: {
      me: ["your-other-verification-code"],
    },
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" }, // Light mode theme color
    { media: "(prefers-color-scheme: dark)", color: "#000000" }, // Dark mode theme color
  ],
  manifest: "/manifest.webmanifest", // Added manifest file
  other: {
    "format-detection": "telephone=no", // Disable telephone number detection
    "og:image": "/public/logo.png", // Ensure Open Graph image is set
    "twitter:image": "/public/logo.png", // Ensure Twitter image is set
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="origin-trial"
          content="A/kargTFyk8MR5ueravczef/wIlTkbVk1qXQesp39nV+xNECPdLBVeYffxrM8TmZT6RArWGQVCJ0LRivD7glcAUAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZzIiLCJleHBpcnkiOjE3NDIzNDIzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ECG Life Sciences</title>
        <meta name="author" content="ECG Life Sciences" />
        <meta
          name="generator"
          content="Starfield Technologies; Go Daddy Website Builder 8.0.0000"
        />
        <link rel="manifest" href="/manifest.webmanifest" />

        {/* Apple Touch Icons */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="https://ik.imagekit.io/vsf44gqqe/logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="https://ik.imagekit.io/vsf44gqqe/logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="https://ik.imagekit.io/vsf44gqqe/logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="https://ik.imagekit.io/vsf44gqqe/logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="https://ik.imagekit.io/vsf44gqqe/logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="https://ik.imagekit.io/vsf44gqqe/logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://ik.imagekit.io/vsf44gqqe/logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://ik.imagekit.io/vsf44gqqe/logo.png"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:url" content="https://ECGLife Sciences.com/" />
        <meta property="og:site_name" content="ECG Life Sciences" />
        <meta property="og:title" content="ECG Life Sciences" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/vsf44gqqe/logo.png"
        />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="ECG Life Sciences" />
        <meta name="twitter:description" content="Launching Soon" />
        <meta
          name="twitter:image"
          content="https://ik.imagekit.io/vsf44gqqe/logo.png"
        />
        <meta name="twitter:image:alt" content="ECG Life Sciences" />

        <meta name="theme-color" content="#969696" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeRegistry>
          <Navbar />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
