import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
// import HeaderShell from "./components/ui/HeaderShell";
// import HeaderContent from "./components/ui/HeaderContent";
import InViewObserver from "./components/ui/InViewObserver";
import Header from "./components/Header";

const interFont = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter", // Custom variable for the font
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${interFont.variable} no-scrollbar`}>
      <body className={`no-scrollbar min-h-screen`}>
        <Header />
        <div className="mt-24 max-h-max min-h-[84svh] lg:min-h-[75lvh] 2xl:min-h-[71vh]">
          <InViewObserver />
          {children}
        </div>
        <Footer extraClass=" text-mywhite-50" />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
