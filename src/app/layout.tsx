import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css";
import { Inter, Lora, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const LoraFont = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora", // Custom variable for the font
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
      className={`${montserratFont.variable} ${LoraFont.variable} no-scrollbar`}
    >
      <body className={inter.className}>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
