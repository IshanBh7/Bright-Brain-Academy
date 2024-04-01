import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Whatsapp from "@/components/sections/whatsapp";
import Footer from "@/components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bright Brain Acdemy",
  description: "School website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar/>
          <Whatsapp />
        {children}
        <Footer />
        </Providers>
        </body>
    </html>
  );
}
