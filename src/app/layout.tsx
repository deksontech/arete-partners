import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LuxuryCursor } from "@/components/LuxuryCursor";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
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
    images: [{ url: "/assets/arete-partners-logo-transparent.png", width: 842, height: 843 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arete Partners",
    description: "Transforming strategy into results that last",
    images: ["/assets/arete-partners-logo-transparent.png"],
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
