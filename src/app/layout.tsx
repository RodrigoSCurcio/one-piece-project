import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const montserrat = Montserrat({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "One Piece App",
  description: "Project for the best anime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="bg-custom-image absolute inset-0 bg-cover bg-center z-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      </div>
      <body
        className={`${montserrat.className} bg-gradient-to-r from-op-royal-blue to-op-navy-blue text-zinc-50 relative z-10 h-screen`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
