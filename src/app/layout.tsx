import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "KingoMart — Algeria's Smart B2B Marketplace",
  description:
    "Source products from verified global suppliers with better prices, shared logistics and secure trade. Import. Trade. Grow.",
  keywords: [
    "B2B marketplace",
    "Algeria",
    "wholesale",
    "import",
    "trade",
    "logistics",
    "suppliers",
    "frozen chicken",
    "beverages",
    "dairy",
  ],
  authors: [{ name: "KingoMart" }],
  openGraph: {
    title: "KingoMart — Algeria's Smart B2B Marketplace",
    description:
      "Source products from verified global suppliers with better prices, shared logistics and secure trade.",
    siteName: "KingoMart",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jakarta.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
