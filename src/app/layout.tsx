import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://scuolaguida.app"),
  title: "ScuolaGuida.app - Software per Scuole Guida Italiane",
  description:
    "Software semplice e professionale per gestire la tua scuola guida. Calendario lezioni, gestione studenti, promemoria automatici. Prova gratis per 30 giorni.",
  keywords:
    "software scuola guida, gestione autoscuola, calendario lezioni, gestione studenti patente, promemoria SMS WhatsApp",
  authors: [{ name: "ScuolaGuida.app" }],
  creator: "ScuolaGuida.app",
  publisher: "ScuolaGuida.app",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://scuolaguida.app",
    title: "ScuolaGuida.app - Software per Scuole Guida",
    description:
      "Il software che semplifica la gestione della tua scuola guida. Usato da oltre 150 scuole in Italia.",
    siteName: "ScuolaGuida.app",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ScuolaGuida.app - Software per Scuole Guida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScuolaGuida.app - Software per Scuole Guida",
    description: "Gestisci la tua scuola guida senza complicazioni",
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
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%232563eb'/><path d='M8 10h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z' fill='white'/><circle cx='11' cy='16' r='2' fill='%232563eb'/><circle cx='21' cy='16' r='2' fill='%232563eb'/><rect x='13' y='15' width='6' height='2' fill='%232563eb'/></svg>"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%232563eb'/><path d='M8 10h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z' fill='white'/><circle cx='11' cy='16' r='2' fill='%232563eb'/><circle cx='21' cy='16' r='2' fill='%232563eb'/><rect x='13' y='15' width='6' height='2' fill='%232563eb'/></svg>"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%232563eb'/><path d='M8 10h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z' fill='white'/><circle cx='11' cy='16' r='2' fill='%232563eb'/><circle cx='21' cy='16' r='2' fill='%232563eb'/><rect x='13' y='15' width='6' height='2' fill='%232563eb'/></svg>"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%232563eb'/><path d='M8 10h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z' fill='white'/><circle cx='11' cy='16' r='2' fill='%232563eb'/><circle cx='21' cy='16' r='2' fill='%232563eb'/><rect x='13' y='15' width='6' height='2' fill='%232563eb'/></svg>"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
