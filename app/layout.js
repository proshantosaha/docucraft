import localFont from "next/font/local";
import "./globals.css";
import { getDocuments } from "../lib/doc";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Docucraft - A documention website ",
  description: " A documention website ",
};

export default function RootLayout({ children }) {
  const alldOCS = getDocuments();
  console.log(alldOCS);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
