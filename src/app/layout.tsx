import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const webSiteURL = "https://saviors-alpha.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(webSiteURL),
  title: {
    template: "%s | Saviors Alpha - NFT Community",
    default: "Saviors Alpha - NFT Community", // a default is required when creating a template
  },
  //title: 'Saviors Alpha - NFT Community | Collaborations, Whitelists, Raffles, Promotion Services',
  description:
    "Join Saviors Alpha NFT Discord, a vibrant community collaborating with NFT projects. Get exclusive whitelists, participate in raffles, and leverage our promotion services. Explore upcoming NFT projects on our website!",
  keywords: [
    "NFT Discord",
    "Collaborations",
    "Whitelist",
    "Raffles",
    "Promotion Services",
    "Crypto Art Community",
    "Upcoming NFT Projects",
    "Saviors Alpha",
  ],
  authors: [{ name: "0xncndev" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    description:
      "Join Saviors Alpha NFT CommunityDiscord, a vibrant community collaborating with NFT projects. Get exclusive whitelists, participate in raffles, and leverage our promotion services. Explore upcoming NFT projects on our website!",
    url: webSiteURL, // Replace with the actual URL of your website
    siteName: "Saviors Alpha - NFT Community",
    title:
      "Saviors Alpha - NFT Community | Collaborations, Whitelists, Raffles, Promotion Services",
    images: [
      {
        url: "https://example.com/og.png", // Replace with the actual URL of your primary image
        width: 800,
        height: 600,
      },
      {
        url: "https://example.com/og-alt.png", // Replace with the actual URL of your secondary image
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
  },
  // Additional metadata properties
  robots: "index, follow", // Specify if search engines should index and follow links
  //themeColor: '#30AF5B', // Theme color for browsers

  // Optimizations for search engines
  /*verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Replace with your Google Search Console verification code
    yandex: 'YOUR_YANDEX_VERIFICATION_CODE', // Replace with your Yandex Webmaster verification code
  
  },
 */
  // Add more properties as needed.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <main className="relative overflow-hidden">
          {/*container mx-auto px-4 */}
          {children}
          <section className="absolute inset-0 flex justify-center items-center"></section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
