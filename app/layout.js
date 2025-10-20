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
  description:
    "A simple way to tip your favourite creators, developers, and artists.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col justify-between min-h-screen md:h-screen">
  <Navbar />
  <div className="flex-1">
    <div className="h-full w-full bg-stone-900 relative">
      {/* Background Layer (stays on z-0) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(194, 65, 12, 0.18) 0%, rgba(194, 65, 12, 0.1) 25%, rgba(194, 65, 12, 0.04) 35%, transparent 50%)`,
          backgroundSize: "100% 100%",
        }}
      />
      
      {/* Content Layer (elevated to z-10) */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  </div>
  <Footer />
</div>
      </body>
    </html>
  );
}
