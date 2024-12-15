import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
 
const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Artes de Ilusion",
  description: "creative studio based in Antalya",
  robots: {
    index: true,
    follow: true,
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html className="bg-white" lang="en">
      <head>
        {/* Meta tags */}
        <meta charSet="UTF-8" />
        <meta name="title" content="Artes de Ilusion" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="creative studio based in Antalya" />
        <meta name="robots" content="noindex"/>
        <link rel="canonical" href={`${process.env.SITE_URL}/`} />

        {/* Favicon and icons */}
        <link rel="icon" href="/favicon-generator.ico" />
        <link rel="icon" href="/favicon-generator.ico/android-icon-48x48.png" sizes="48x48" />
        <link rel="icon" href="/favicon-generator.ico/android-icon-96x96.png" sizes="96x96" />
        <link rel="icon" href="/favicon-generator.ico/android-icon-144x144.png" sizes="144x144" />
        <link rel="icon" href="/favicon-generator.ico/android-icon-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/favicon-generator.ico/apple-icon-57x57.png" sizes="57x57" />
        <link rel="apple-touch-icon" href="/favicon-generator.ico/apple-icon-60x60.png" sizes="60x60" />
        <link rel="apple-touch-icon" href="/favicon-generator.ico/apple-icon-72x72.png" sizes="72x72" />
        <link rel="apple-touch-icon" href="/favicon-generator.ico/apple-icon-76x76.png" sizes="76x76" />
        <link rel="apple-touch-icon" href="/favicon-generator.ico/apple-icon-114x114.png" sizes="114x114" />
        <link rel="apple-touch-icon" href="/favicon-generator.ico/apple-icon-120x120.png" sizes="120x120" />
        <link rel="apple-touch-icon" href="/favicon-generator.ico/apple-icon-144x144.png" sizes="144x144" />
        <link rel="apple-touch-icon" href="/favicon-generator.ico/apple-icon-152x152.png" sizes="152x152" />
        <link rel="apple-touch-icon" href="/favicon-generator.ico/apple-icon-180x180.png" sizes="180x180" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-generator.ico/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-generator.ico/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-generator.ico/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-generator.ico/favicon-16x16.png" />
        <link rel="manifest" href="/favicon-generator.ico/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon-generator.ico/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* Additional meta tags for SEO */}
        <meta property="og:title" content="Artes de Ilusion" />
        <meta property="og:description" content="creative studio based in Antalya" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${process.env.SITE_URL}/`} />
        <meta property="og:image" content="/favicon-generator.ico/android-icon-192x192.png" />

        
      </head>
      <body className={`${unbounded.className} antialiased`}>
        <main className="light bg-white">
           {children}
        </main>
        <footer className="light bg-white">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
