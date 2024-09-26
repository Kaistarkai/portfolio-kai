import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";
import GridBackground from "@/components/grid-background";
import { ThemeProvider } from "@/components/theme-provider"

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Kelly Chen | Personal",
  // metadataBase: new URL("https://www.erichuang.art"),
  alternates: {
    canonical: "/",
  },
  authors: [
    { name: "Kelly Chen", url: "https://github.com/xiangxichen26" },
  ],
  description: "Kelly Chen's personal portfolio website",
  openGraph: {
    title: "Kelly Chen | Personal",
    images: [
      {
        url: "/photo.JPG",
        alt: "Kelly Chen's Portrait",
        width: 640,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <GridBackground />
              <main className="container overflow-x-hidden lg:px-28">{children}</main>
            <BackToTop />
          </ThemeProvider>
      </body>
    </html>
  );
}
