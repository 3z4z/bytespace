import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "../styles/globals.css";

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
  title: "ByteSpace",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${satoshi.variable} ${clashDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
