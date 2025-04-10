import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css";
import { ThemeProvider } from "./context/themecontext";
import { Montserrat, Red_Hat_Display } from "next/font/google";
import Header from "./components/Header";

// const urban = Urbanist({ subsets: ["latin"] });

const redHatFont = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-redhat", // Custom variable for the font
});

const montserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat", // Custom variable for the font
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserratFont.variable} ${redHatFont.variable} no-scrollbar`}
    >
      <body className={`text-myblack-200`}>
        <ThemeProvider>
          <div>
            <Header />
          </div>
          {children}
        </ThemeProvider>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
