import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cybkartglobal.com'),
  title: "CYBKART GLOBAL | Enterprise Digital Systems & AI Automation",
  description: "Professional digital systems agency specializing in AI automation, web development, and digital solutions for US businesses. Data-driven, system-focused approach.",
  keywords: "AI automation, chatbot systems, web development, e-commerce, digital marketing, US business solutions",
  authors: [{ name: "CYBKART GLOBAL" }],
  openGraph: {
    title: "CYBKART GLOBAL | Enterprise Digital Systems & AI Automation",
    description: "Professional digital systems agency specializing in AI automation, web development, and digital solutions for US businesses.",
    url: "https://cybkartglobal.com",
    siteName: "CYBKART GLOBAL",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CYBKART GLOBAL | Enterprise Digital Systems & AI Automation",
    description: "Professional digital systems agency specializing in AI automation, web development, and digital solutions for US businesses.",
  },
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
    <html lang="en">

      <body className={`${inter.variable} antialiased`}>
        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17893861115"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17893861115');
          `}
        </Script>

        {/* Tawk.to Script */}
        <Script id="tawk-to-script" strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/69874aaca1f1521c3941dd77/1jgs7ndrl';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>

        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
