import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css";
import { ThemeProvider } from "./context/themecontext";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

// const urban = Urbanist({ subsets: ["latin"] });

// const poppinsFont = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-poppins", // Custom variable for the font
// });

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
        <ThemeProvider>
          <Header />
          <div className="mt-24 max-h-max min-h-[84svh] lg:min-h-[75lvh] 2xl:min-h-[71vh]">
            {children}
          </div>
          <Footer extraStyle="text-mywhite-50 bg-myblack-50" />
        </ThemeProvider>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
