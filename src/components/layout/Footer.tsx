"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#040A12] py-16 relative border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">Deepesh Kumar</h3>
            <p className="text-slate-400 font-inter text-sm mb-6">
              Building Careers. Engineering Technology. Growing Businesses.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-mono uppercase tracking-widest text-sm">Companies</h4>
            <ul className="space-y-4 text-slate-400 font-inter text-sm">
              <li><Link href="#ventures" className="hover:text-cyan transition-colors">Deepesh Cyber Developers</Link></li>
              <li><Link href="#ventures" className="hover:text-cyan transition-colors">Pseudotek Solutions</Link></li>
              <li><Link href="#ventures" className="hover:text-cyan transition-colors">Elyxana Digital</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-mono uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 font-inter text-sm">
              <li><Link href="#about" className="hover:text-cyan transition-colors">About Journey</Link></li>
              <li><Link href="#success-stories" className="hover:text-cyan transition-colors">Success Stories</Link></li>
              <li><Link href="#mentorship" className="hover:text-cyan transition-colors">Mentorship</Link></li>
              <li><Link href="#contact" className="hover:text-cyan transition-colors">Consulting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-mono uppercase tracking-widest text-sm">Socials</h4>
            <ul className="space-y-4 text-slate-400 font-inter text-sm">
              <li><a href="#" className="hover:text-cyan transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-inter text-center md:text-left">
            &copy; {new Date().getFullYear()} Deepesh Kumar. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors group"
          >
            <ArrowUp className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
}
