import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LuxuryCursor } from "@/components/LuxuryCursor";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mediumpurple-ant-531485.hostingersite.com"),
  title: {
    default: "Arete Partners",
    template: "%s | Arete Partners",
  },
  description: "Transforming strategy into results that last",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arete Partners",
    description: "Transforming strategy into results that last",
    url: "/",
    siteName: "Arete Partners",
    images: [{ url: "/assets/arete-partners-logo.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arete Partners",
    description: "Transforming strategy into results that last",
    images: ["/assets/arete-partners-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <LuxuryCursor />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
