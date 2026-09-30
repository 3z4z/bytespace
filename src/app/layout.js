import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import HeaderComponent from "@/components/shared/Header";
import FooterComponent from "@/components/shared/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const satoshi = localFont({
  src: "./../fonts/satoshi-Variable.woff2",
  variable: "--font-satoshi",
});

const clashDisplay = localFont({
  src: "./../fonts/clashDisplay-Bold.woff2",
  variable: "--font-clash-bold",
});

export const metadata = {
  title: "ByteSpace - Get Access to Hundreds Courses Available",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${satoshi.variable} ${clashDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-dvh flex flex-col">
        <HeaderComponent />
        <main className="flex-1">{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
