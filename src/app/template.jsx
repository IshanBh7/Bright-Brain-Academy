"use client"
import { motion } from "framer-motion";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Whatsapp from "@/components/sections/whatsapp";
import Footer from "@/components/sections/Footer";


export default function Template({ children }) {
  return (
      <motion.div>
        <Providers>
          <Navbar/>
          <Whatsapp />
        {children}
        <Footer />
        </Providers>
      </motion.div>
  );
}