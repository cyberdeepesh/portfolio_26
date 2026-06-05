"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(2, 8, 19, 0)", "rgba(2, 8, 19, 0.8)"]
  );
  
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );

  const borderBottomColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.05)"]
  );

  return (
    <>
      <motion.nav
        style={{ backgroundColor, backdropFilter, borderBottomColor, borderBottomWidth: 1 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="#hero" className="text-white font-bold text-xl tracking-tight z-50 relative group">
              DEEPESH<span className="text-cyan group-hover:text-emerald transition-colors">.</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Journey</Link>
              <Link href="#ventures" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Ventures</Link>
              <Link href="#expertise" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Expertise</Link>
              <Link href="#contact" className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors border border-white/10">
                Let's Talk
              </Link>
            </div>

            {/* Mobile Nav Toggle */}
            <button 
              className="md:hidden z-50 relative text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-[#020813]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
        >
          <Link href="#about" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white hover:text-cyan transition-colors">Journey</Link>
          <Link href="#ventures" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white hover:text-cyan transition-colors">Ventures</Link>
          <Link href="#expertise" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white hover:text-cyan transition-colors">Expertise</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="px-8 py-4 rounded-full bg-electric-blue text-white text-xl font-bold mt-4">
            Let's Talk
          </Link>
        </motion.div>
      )}
    </>
  );
}
