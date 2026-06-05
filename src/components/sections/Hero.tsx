"use client";

import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Rocket } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { PopupModal } from "react-calendly";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.body);
  }, []);
  
  // Mouse position for gradient tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current?.getBoundingClientRect() || { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
      
      const x = clientX - left;
      const y = clientY - top;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Magnetic button logic
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });
  
  const handleBtnMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.3;
    const y = (e.clientY - top - height / 2) * 0.3;
    setBtnPos({ x, y });
  };

  const handleBtnLeave = () => {
    setBtnPos({ x: 0, y: 0 });
  };

  const bgImage = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      rgba(37, 99, 235, 0.15),
      transparent 80%
    )
  `;

  if (!mounted) return null;

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#020813]"
    >
      {/* Interactive Spotlight Background */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 transition-opacity duration-300"
        style={{
          background: bgImage
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center mt-12"
      >
        {/* Floating Badges */}
        <motion.div 
          style={{ y: y2 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:flex absolute top-10 left-[15%] glass-panel px-4 py-2 rounded-full items-center gap-2 border border-white/10 shadow-2xl backdrop-blur-md rotate-[-5deg]"
        >
          <Code2 className="w-4 h-4 text-cyan" />
          <span className="text-sm font-mono text-slate-300">Software Architect</span>
        </motion.div>

        <motion.div 
          style={{ y: y1 }}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="hidden md:flex absolute bottom-20 right-[15%] glass-panel px-4 py-2 rounded-full items-center gap-2 border border-white/10 shadow-2xl backdrop-blur-md rotate-[5deg]"
        >
          <Rocket className="w-4 h-4 text-emerald" />
          <span className="text-sm font-mono text-slate-300">Serial Entrepreneur</span>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-electric-blue animate-pulse" />
            <span className="text-xs sm:text-sm font-mono text-slate-300 tracking-wider">
              INNOVATION MEETS EXECUTION
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.9] mb-8 text-white">
            <span className="block overflow-hidden pb-2">
              <motion.span 
                initial={{ y: "100%" }} 
                animate={{ y: 0 }} 
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                BUILDING
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span 
                initial={{ y: "100%" }} 
                animate={{ y: 0 }} 
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-cyan to-emerald"
              >
                THE FUTURE
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-lg md:text-2xl text-slate-400 font-inter max-w-2xl mb-12"
          >
            I am <strong className="text-white">Deepesh Kumar</strong>. I empower students to master tech & help businesses scale with elite software solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            {/* Magnetic Button */}
            <div 
              ref={btnRef as any}
              onClick={() => setIsCalendlyOpen(true)}
              onMouseMove={handleBtnMove}
              onMouseLeave={handleBtnLeave}
              className="relative group cursor-pointer block"
            >
              <motion.div
                animate={{ x: btnPos.x, y: btnPos.y }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                className="px-8 py-5 bg-white text-deep-navy hover:bg-slate-200 rounded-full font-bold text-lg transition-colors flex items-center justify-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">Book Consultation</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.div>
              {/* Glow effect behind button */}
              <div className="absolute inset-0 -z-10 bg-white/20 blur-2xl rounded-full scale-150 group-hover:scale-110 group-hover:bg-cyan/20 transition-all duration-500"></div>
            </div>
            
            <Link 
              href="#about"
              className="px-8 py-5 bg-transparent text-white hover:text-cyan font-medium transition-colors flex items-center justify-center gap-2 group"
            >
              <span>Discover My Journey</span>
              <div className="w-8 h-px bg-white/30 group-hover:bg-cyan group-hover:w-12 transition-all duration-300"></div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {rootElement && (
        <PopupModal
          url="https://calendly.com/dummy"
          onModalClose={() => setIsCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={rootElement}
        />
      )}
    </section>
  );
}
