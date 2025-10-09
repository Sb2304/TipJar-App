import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TipJar - Tip your favourites",
  description: "A simple way to tip your favourite creators, developers, and artists.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col justify-between min-h-screen md:h-screen">

          <Navbar />
          <div className="flex-1 flex items-center justify-center">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
