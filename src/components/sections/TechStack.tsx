"use client";

import { motion } from "framer-motion";

const technologies = [
  "Python", "Django", "FastAPI", "Next.js", "React", "Tailwind", 
  "PostgreSQL", "Docker", "Redis", "AI Tools", "TensorFlow", 
  "PyTorch", "AWS", "Azure", "Machine Learning", "Data Science", "System Design"
];

// Generate random floating animations for each tag
const generateAnimation = (index: number) => ({
  y: [0, -10 + Math.random() * -5, 0],
  x: [0, 5 - Math.random() * 10, 0],
  transition: {
    duration: 3 + Math.random() * 2,
    repeat: Infinity,
    ease: "easeInOut",
    delay: index * 0.1,
  }
});

export default function TechStack() {
  return (
    <section id="techstack" className="py-32 bg-deep-navy relative overflow-hidden border-y border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm md:text-base font-mono tracking-widest uppercase text-cyan mb-4">
            Arsenal
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Tech <span className="text-gradient">Stack</span>
          </h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              //@ts-ignore framer-motion transition warning
              animate={generateAnimation(index)}
              className="px-6 py-3 md:px-8 md:py-4 glass-panel rounded-full border border-white/10 hover:border-cyan/50 hover:bg-cyan/10 transition-colors cursor-default"
            >
              <span className="text-sm md:text-lg font-medium text-slate-300 tracking-wide">
                {tech}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
