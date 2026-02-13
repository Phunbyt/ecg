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
  title: "Kopek Networks",
  description: "Solutions that work",
  metadataBase: new URL("https://kopeknetworks.com"), // Base URL for absolute URLs
  keywords: ["Kopek Networks", "IT solutions", "technology services"],
  authors: [{ name: "Kopek Networks", url: "https://kopeknetworks.com" }],
  generator: "phunbytcode", // Added generator
  openGraph: {
    title: "Kopek Networks",
    description: "Solutions that work",
    url: "https://kopeknetworks.com",
    siteName: "Kopek Networks",
    images: [
      {
        url: "https://media-hosting.imagekit.io//100504fac58341f1/Kopek.png?Expires=1836804463&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wj6lS19MizzfhKGgHr~eX-pcCTqGo95HajNJi3tQ0TzbIVyaeB0VpW-wEv9TBLtQRV5FW59-d9uuRYPdewky7WEyz5PSblkTd1XqFbBeSYT1f4FnfkKva7wAXOiKomZPKaXkF21UODmn2WPzsFeED0fpq7tn2q6GPZt~OeQnyazPC7tajuqJWlSmOGF7nu2OEvJiACnS6go7EMCYVNvOPNMYg4P25T6iWfQeRj6K3ykJiAjW~XsvOQ2~6ot6bcAWb-Fv9XF8p69~E~yKg2JU0C~41zHXKTDeBGx6zIIAko0S3gr-bEMDYv2lmHU-N~MKJJnLspRh9BZ-oRBwwkaUOQ__", // Updated Open Graph image URL
        width: 1200,
        height: 630,
        alt: "Kopek Networks - Solutions that work",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kopek Networks",
    description: "Solutions that work", // Updated Twitter description
    images: [
      "https://media-hosting.imagekit.io//100504fac58341f1/Kopek.png?Expires=1836804463&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wj6lS19MizzfhKGgHr~eX-pcCTqGo95HajNJi3tQ0TzbIVyaeB0VpW-wEv9TBLtQRV5FW59-d9uuRYPdewky7WEyz5PSblkTd1XqFbBeSYT1f4FnfkKva7wAXOiKomZPKaXkF21UODmn2WPzsFeED0fpq7tn2q6GPZt~OeQnyazPC7tajuqJWlSmOGF7nu2OEvJiACnS6go7EMCYVNvOPNMYg4P25T6iWfQeRj6K3ykJiAjW~XsvOQ2~6ot6bcAWb-Fv9XF8p69~E~yKg2JU0C~41zHXKTDeBGx6zIIAko0S3gr-bEMDYv2lmHU-N~MKJJnLspRh9BZ-oRBwwkaUOQ__",
    ], // Updated Twitter image URL
  },
  icons: {
    icon: "https://media-hosting.imagekit.io//100504fac58341f1/Kopek.png?Expires=1836804463&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wj6lS19MizzfhKGgHr~eX-pcCTqGo95HajNJi3tQ0TzbIVyaeB0VpW-wEv9TBLtQRV5FW59-d9uuRYPdewky7WEyz5PSblkTd1XqFbBeSYT1f4FnfkKva7wAXOiKomZPKaXkF21UODmn2WPzsFeED0fpq7tn2q6GPZt~OeQnyazPC7tajuqJWlSmOGF7nu2OEvJiACnS6go7EMCYVNvOPNMYg4P25T6iWfQeRj6K3ykJiAjW~XsvOQ2~6ot6bcAWb-Fv9XF8p69~E~yKg2JU0C~41zHXKTDeBGx6zIIAko0S3gr-bEMDYv2lmHU-N~MKJJnLspRh9BZ-oRBwwkaUOQ__", // Favicon
    apple: [
      {
        url: "https://media-hosting.imagekit.io//100504fac58341f1/Kopek.png?Expires=1836804463&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wj6lS19MizzfhKGgHr~eX-pcCTqGo95HajNJi3tQ0TzbIVyaeB0VpW-wEv9TBLtQRV5FW59-d9uuRYPdewky7WEyz5PSblkTd1XqFbBeSYT1f4FnfkKva7wAXOiKomZPKaXkF21UODmn2WPzsFeED0fpq7tn2q6GPZt~OeQnyazPC7tajuqJWlSmOGF7nu2OEvJiACnS6go7EMCYVNvOPNMYg4P25T6iWfQeRj6K3ykJiAjW~XsvOQ2~6ot6bcAWb-Fv9XF8p69~E~yKg2JU0C~41zHXKTDeBGx6zIIAko0S3gr-bEMDYv2lmHU-N~MKJJnLspRh9BZ-oRBwwkaUOQ__",
        sizes: "57x57",
      },
      {
        url: "https://media-hosting.imagekit.io//100504fac58341f1/Kopek.png?Expires=1836804463&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wj6lS19MizzfhKGgHr~eX-pcCTqGo95HajNJi3tQ0TzbIVyaeB0VpW-wEv9TBLtQRV5FW59-d9uuRYPdewky7WEyz5PSblkTd1XqFbBeSYT1f4FnfkKva7wAXOiKomZPKaXkF21UODmn2WPzsFeED0fpq7tn2q6GPZt~OeQnyazPC7tajuqJWlSmOGF7nu2OEvJiACnS6go7EMCYVNvOPNMYg4P25T6iWfQeRj6K3ykJiAjW~XsvOQ2~6ot6bcAWb-Fv9XF8p69~E~yKg2JU0C~41zHXKTDeBGx6zIIAko0S3gr-bEMDYv2lmHU-N~MKJJnLspRh9BZ-oRBwwkaUOQ__",
        sizes: "60x60",
      },
      {
        url: "https://media-hosting.imagekit.io//100504fac58341f1/Kopek.png?Expires=1836804463&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wj6lS19MizzfhKGgHr~eX-pcCTqGo95HajNJi3tQ0TzbIVyaeB0VpW-wEv9TBLtQRV5FW59-d9uuRYPdewky7WEyz5PSblkTd1XqFbBeSYT1f4FnfkKva7wAXOiKomZPKaXkF21UODmn2WPzsFeED0fpq7tn2q6GPZt~OeQnyazPC7tajuqJWlSmOGF7nu2OEvJiACnS6go7EMCYVNvOPNMYg4P25T6iWfQeRj6K3ykJiAjW~XsvOQ2~6ot6bcAWb-Fv9XF8p69~E~yKg2JU0C~41zHXKTDeBGx6zIIAko0S3gr-bEMDYv2lmHU-N~MKJJnLspRh9BZ-oRBwwkaUOQ__",
        sizes: "72x72",
      },
      {
        url: "https://media-hosting.imagekit.io//100504fac58341f1/Kopek.png?Expires=1836804463&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wj6lS19MizzfhKGgHr~eX-pcCTqGo95HajNJi3tQ0TzbIVyaeB0VpW-wEv9TBLtQRV5FW59-d9uuRYPdewky7WEyz5PSblkTd1XqFbBeSYT1f4FnfkKva7wAXOiKomZPKaXkF21UODmn2WPzsFeED0fpq7tn2q6GPZt~OeQnyazPC7tajuqJWlSmOGF7nu2OEvJiACnS6go7EMCYVNvOPNMYg4P25T6iWfQeRj6K3ykJiAjW~XsvOQ2~6ot6bcAWb-Fv9XF8p69~E~yKg2JU0C~41zHXKTDeBGx6zIIAko0S3gr-bEMDYv2lmHU-N~MKJJnLspRh9BZ-oRBwwkaUOQ__",
        sizes: "114x114",
      },
      {
        url: "https://media-hosting.imagekit.io//100504fac58341f1/Kopek.png?Expires=1836804463&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wj6lS19MizzfhKGgHr~eX-pcCTqGo95HajNJi3tQ0TzbIVyaeB0VpW-wEv9TBLtQRV5FW59-d9uuRYPdewky7WEyz5PSblkTd1XqFbBeSYT1f4FnfkKva7wAXOiKomZPKaXkF21UODmn2WPzsFeED0fpq7tn2q6GPZt~OeQnyazPC7tajuqJWlSmOGF7nu2OEvJiACnS6go7EMCYVNvOPNMYg4P25T6iWfQeRj6K3ykJiAjW~XsvOQ2~6ot6bcAWb-Fv9XF8p69~E~yKg2JU0C~41zHXKTDeBGx6zIIAko0S3gr-bEMDYv2lmHU-N~MKJJnLspRh9BZ-oRBwwkaUOQ__",
        sizes: "120x120",
      },
      {
        url: "https://media-hosting.imagekit.io//100504fac58341f1/Kopek.png?Expires=1836804463&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wj6lS19MizzfhKGgHr~eX-pcCTqGo95HajNJi3tQ0TzbIVyaeB0VpW-wEv9TBLtQRV5FW59-d9uuRYPdewky7WEyz5PSblkTd1XqFbBeSYT1f4FnfkKva7wAXOiKomZPKaXkF21UODmn2WPzsFeED0fpq7tn2q6GPZt~OeQnyazPC7tajuqJWlSmOGF7nu2OEvJiACnS6go7EMCYVNvOPNMYg4P25T6iWfQeRj6K3ykJiAjW~XsvOQ2~6ot6bcAWb-Fv9XF8p69~E~yKg2JU0C~41zHXKTDeBGx6zIIAko0S3gr-bEMDYv2lmHU-N~MKJJnLspRh9BZ-oRBwwkaUOQ__",
        sizes: "144x144",
      },
      {
        url: "https://media-hosting.imagekit.io//100504fac58341f1/Kopek.png?Expires=1836804463&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wj6lS19MizzfhKGgHr~eX-pcCTqGo95HajNJi3tQ0TzbIVyaeB0VpW-wEv9TBLtQRV5FW59-d9uuRYPdewky7WEyz5PSblkTd1XqFbBeSYT1f4FnfkKva7wAXOiKomZPKaXkF21UODmn2WPzsFeED0fpq7tn2q6GPZt~OeQnyazPC7tajuqJWlSmOGF7nu2OEvJiACnS6go7EMCYVNvOPNMYg4P25T6iWfQeRj6K3ykJiAjW~XsvOQ2~6ot6bcAWb-Fv9XF8p69~E~yKg2JU0C~41zHXKTDeBGx6zIIAko0S3gr-bEMDYv2lmHU-N~MKJJnLspRh9BZ-oRBwwkaUOQ__",
        sizes: "152x152",
      },
      {
        url: "https://media-hosting.imagekit.io//100504fac58341f1/Kopek.png?Expires=1836804463&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wj6lS19MizzfhKGgHr~eX-pcCTqGo95HajNJi3tQ0TzbIVyaeB0VpW-wEv9TBLtQRV5FW59-d9uuRYPdewky7WEyz5PSblkTd1XqFbBeSYT1f4FnfkKva7wAXOiKomZPKaXkF21UODmn2WPzsFeED0fpq7tn2q6GPZt~OeQnyazPC7tajuqJWlSmOGF7nu2OEvJiACnS6go7EMCYVNvOPNMYg4P25T6iWfQeRj6K3ykJiAjW~XsvOQ2~6ot6bcAWb-Fv9XF8p69~E~yKg2JU0C~41zHXKTDeBGx6zIIAko0S3gr-bEMDYv2lmHU-N~MKJJnLspRh9BZ-oRBwwkaUOQ__",
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
    canonical: "https://kopeknetworks.com", // Canonical URL
    languages: {
      "en-US": "https://kopeknetworks.com/en-US", // Alternate language URLs
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
        <title>Kopek Networks</title>
        <meta name="author" content="Kopek Networks" />
        <meta
          name="generator"
          content="Starfield Technologies; Go Daddy Website Builder 8.0.0000"
        />
        <link rel="manifest" href="/manifest.webmanifest" />

        {/* Apple Touch Icons */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="https://media-hosting.imagekit.io//100504fac58341f1/Kopek.png?Expires=1836804463&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wj6lS19MizzfhKGgHr~eX-pcCTqGo95HajNJi3tQ0TzbIVyaeB0VpW-wEv9TBLtQRV5FW59-d9uuRYPdewky7WEyz5PSblkTd1XqFbBeSYT1f4FnfkKva7wAXOiKomZPKaXkF21UODmn2WPzsFeED0fpq7tn2q6GPZt~OeQnyazPC7tajuqJWlSmOGF7nu2OEvJiACnS6go7EMCYVNvOPNMYg4P25T6iWfQeRj6K3ykJiAjW~XsvOQ2~6ot6bcAWb-Fv9XF8p69~E~yKg2JU0C~41zHXKTDeBGx6zIIAko0S3gr-bEMDYv2lmHU-N~MKJJnLspRh9BZ-oRBwwkaUOQ__"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="https://media-hosting.imagekit.io//100504fac58341f1/Kopek.png?Expires=1836804463&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wj6lS19MizzfhKGgHr~eX-pcCTqGo95HajNJi3tQ0TzbIVyaeB0VpW-wEv9TBLtQRV5FW59-d9uuRYPdewky7WEyz5PSblkTd1XqFbBeSYT1f4FnfkKva7wAXOiKomZPKaXkF21UODmn2WPzsFeED0fpq7tn2q6GPZt~OeQnyazPC7tajuqJWlSmOGF7nu2OEvJiACnS6go7EMCYVNvOPNMYg4P25T6iWfQeRj6K3ykJiAjW~XsvOQ2~6ot6bcAWb-Fv9XF8p69~E~yKg2JU0C~41zHXKTDeBGx6zIIAko0S3gr-bEMDYv2lmHU-N~MKJJnLspRh9BZ-oRBwwkaUOQ__"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="https://media-hosting.imagekit.io//100504fac58341f1/Kopek.png?Expires=1836804463&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wj6lS19MizzfhKGgHr~eX-pcCTqGo95HajNJi3tQ0TzbIVyaeB0VpW-wEv9TBLtQRV5FW59-d9uuRYPdewky7WEyz5PSblkTd1XqFbBeSYT1f4FnfkKva7wAXOiKomZPKaXkF21UODmn2WPzsFeED0fpq7tn2q6GPZt~OeQnyazPC7tajuqJWlSmOGF7nu2OEvJiACnS6go7EMCYVNvOPNMYg4P25T6iWfQeRj6K3ykJiAjW~XsvOQ2~6ot6bcAWb-Fv9XF8p69~E~yKg2JU0C~41zHXKTDeBGx6zIIAko0S3gr-bEMDYv2lmHU-N~MKJJnLspRh9BZ-oRBwwkaUOQ__"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="https://media-hosting.imagekit.io//100504fac58341f1/Kopek.png?Expires=1836804463&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wj6lS19MizzfhKGgHr~eX-pcCTqGo95HajNJi3tQ0TzbIVyaeB0VpW-wEv9TBLtQRV5FW59-d9uuRYPdewky7WEyz5PSblkTd1XqFbBeSYT1f4FnfkKva7wAXOiKomZPKaXkF21UODmn2WPzsFeED0fpq7tn2q6GPZt~OeQnyazPC7tajuqJWlSmOGF7nu2OEvJiACnS6go7EMCYVNvOPNMYg4P25T6iWfQeRj6K3ykJiAjW~XsvOQ2~6ot6bcAWb-Fv9XF8p69~E~yKg2JU0C~41zHXKTDeBGx6zIIAko0S3gr-bEMDYv2lmHU-N~MKJJnLspRh9BZ-oRBwwkaUOQ__"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="https://media-hosting.imagekit.io//100504fac58341f1/Kopek.png?Expires=1836804463&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wj6lS19MizzfhKGgHr~eX-pcCTqGo95HajNJi3tQ0TzbIVyaeB0VpW-wEv9TBLtQRV5FW59-d9uuRYPdewky7WEyz5PSblkTd1XqFbBeSYT1f4FnfkKva7wAXOiKomZPKaXkF21UODmn2WPzsFeED0fpq7tn2q6GPZt~OeQnyazPC7tajuqJWlSmOGF7nu2OEvJiACnS6go7EMCYVNvOPNMYg4P25T6iWfQeRj6K3ykJiAjW~XsvOQ2~6ot6bcAWb-Fv9XF8p69~E~yKg2JU0C~41zHXKTDeBGx6zIIAko0S3gr-bEMDYv2lmHU-N~MKJJnLspRh9BZ-oRBwwkaUOQ__"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="https://media-hosting.imagekit.io//100504fac58341f1/Kopek.png?Expires=1836804463&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wj6lS19MizzfhKGgHr~eX-pcCTqGo95HajNJi3tQ0TzbIVyaeB0VpW-wEv9TBLtQRV5FW59-d9uuRYPdewky7WEyz5PSblkTd1XqFbBeSYT1f4FnfkKva7wAXOiKomZPKaXkF21UODmn2WPzsFeED0fpq7tn2q6GPZt~OeQnyazPC7tajuqJWlSmOGF7nu2OEvJiACnS6go7EMCYVNvOPNMYg4P25T6iWfQeRj6K3ykJiAjW~XsvOQ2~6ot6bcAWb-Fv9XF8p69~E~yKg2JU0C~41zHXKTDeBGx6zIIAko0S3gr-bEMDYv2lmHU-N~MKJJnLspRh9BZ-oRBwwkaUOQ__"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://media-hosting.imagekit.io//100504fac58341f1/Kopek.png?Expires=1836804463&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wj6lS19MizzfhKGgHr~eX-pcCTqGo95HajNJi3tQ0TzbIVyaeB0VpW-wEv9TBLtQRV5FW59-d9uuRYPdewky7WEyz5PSblkTd1XqFbBeSYT1f4FnfkKva7wAXOiKomZPKaXkF21UODmn2WPzsFeED0fpq7tn2q6GPZt~OeQnyazPC7tajuqJWlSmOGF7nu2OEvJiACnS6go7EMCYVNvOPNMYg4P25T6iWfQeRj6K3ykJiAjW~XsvOQ2~6ot6bcAWb-Fv9XF8p69~E~yKg2JU0C~41zHXKTDeBGx6zIIAko0S3gr-bEMDYv2lmHU-N~MKJJnLspRh9BZ-oRBwwkaUOQ__"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://media-hosting.imagekit.io//100504fac58341f1/Kopek.png?Expires=1836804463&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wj6lS19MizzfhKGgHr~eX-pcCTqGo95HajNJi3tQ0TzbIVyaeB0VpW-wEv9TBLtQRV5FW59-d9uuRYPdewky7WEyz5PSblkTd1XqFbBeSYT1f4FnfkKva7wAXOiKomZPKaXkF21UODmn2WPzsFeED0fpq7tn2q6GPZt~OeQnyazPC7tajuqJWlSmOGF7nu2OEvJiACnS6go7EMCYVNvOPNMYg4P25T6iWfQeRj6K3ykJiAjW~XsvOQ2~6ot6bcAWb-Fv9XF8p69~E~yKg2JU0C~41zHXKTDeBGx6zIIAko0S3gr-bEMDYv2lmHU-N~MKJJnLspRh9BZ-oRBwwkaUOQ__"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:url" content="https://kopeknetworks.com/" />
        <meta property="og:site_name" content="Kopek Networks" />
        <meta property="og:title" content="Kopek Networks" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://media-hosting.imagekit.io//100504fac58341f1/Kopek.png?Expires=1836804463&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wj6lS19MizzfhKGgHr~eX-pcCTqGo95HajNJi3tQ0TzbIVyaeB0VpW-wEv9TBLtQRV5FW59-d9uuRYPdewky7WEyz5PSblkTd1XqFbBeSYT1f4FnfkKva7wAXOiKomZPKaXkF21UODmn2WPzsFeED0fpq7tn2q6GPZt~OeQnyazPC7tajuqJWlSmOGF7nu2OEvJiACnS6go7EMCYVNvOPNMYg4P25T6iWfQeRj6K3ykJiAjW~XsvOQ2~6ot6bcAWb-Fv9XF8p69~E~yKg2JU0C~41zHXKTDeBGx6zIIAko0S3gr-bEMDYv2lmHU-N~MKJJnLspRh9BZ-oRBwwkaUOQ__"
        />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Kopek Networks" />
        <meta name="twitter:description" content="Launching Soon" />
        <meta
          name="twitter:image"
          content="https://media-hosting.imagekit.io//100504fac58341f1/Kopek.png?Expires=1836804463&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wj6lS19MizzfhKGgHr~eX-pcCTqGo95HajNJi3tQ0TzbIVyaeB0VpW-wEv9TBLtQRV5FW59-d9uuRYPdewky7WEyz5PSblkTd1XqFbBeSYT1f4FnfkKva7wAXOiKomZPKaXkF21UODmn2WPzsFeED0fpq7tn2q6GPZt~OeQnyazPC7tajuqJWlSmOGF7nu2OEvJiACnS6go7EMCYVNvOPNMYg4P25T6iWfQeRj6K3ykJiAjW~XsvOQ2~6ot6bcAWb-Fv9XF8p69~E~yKg2JU0C~41zHXKTDeBGx6zIIAko0S3gr-bEMDYv2lmHU-N~MKJJnLspRh9BZ-oRBwwkaUOQ__"
        />
        <meta name="twitter:image:alt" content="Kopek Networks" />

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
