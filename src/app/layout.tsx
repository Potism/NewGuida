import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://scuolaguida.app"),
  title: "ScuolaGuida.app - Automatizza la Gestione della Tua Scuola Guida",
  description:
    "La piattaforma completa per automatizzare la gestione della tua scuola guida. Iscrizioni, lezioni, notifiche e progressi in un'unica soluzione moderna.",
  keywords:
    "software scuola guida, gestione scuola guida, piattaforma scuola guida, automatizzazione scuola guida, sistema gestione patenti",
  authors: [{ name: "ScuolaGuida.app" }],
  creator: "ScuolaGuida.app",
  publisher: "ScuolaGuida.app",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://scuolaguida.app",
    title: "ScuolaGuida.app - Automatizza la Gestione della Tua Scuola Guida",
    description:
      "La piattaforma completa per automatizzare la gestione della tua scuola guida. Iscrizioni, lezioni, notifiche e progressi in un'unica soluzione moderna.",
    siteName: "ScuolaGuida.app",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ScuolaGuida.app - Piattaforma per Scuole Guida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScuolaGuida.app - Automatizza la Gestione",
    description: "La piattaforma completa per scuole guida moderne",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
