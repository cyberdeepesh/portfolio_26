"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ from, to, duration = 2, suffix = "+" }: { from: number; to: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing function (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(from + (to - from) * easeProgress));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

const statsData = [
  { value: 500, label: "Students Mentored", color: "text-electric-blue" },
  { value: 250, label: "Successful Placements", color: "text-cyan" },
  { value: 100, label: "Businesses Helped", color: "text-emerald" },
  { value: 3, label: "Companies Founded", color: "text-white", suffix: "" },
];

export default function Stats() {
  return (
    <section id="stats" className="py-24 bg-deep-navy relative overflow-hidden border-y border-white/5">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric-blue/10 via-deep-navy to-deep-navy opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-mono ${stat.color}`}>
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-slate-400 font-inter text-sm md:text-base uppercase tracking-widest max-w-[150px]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
