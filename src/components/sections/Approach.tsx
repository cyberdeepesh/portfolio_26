"use client";

import { motion } from "framer-motion";
import { BookOpen, Hammer, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Learn",
    description: "Deep dive into fundamental concepts, architecture patterns, and industry best practices.",
    icon: <BookOpen className="w-6 h-6 text-electric-blue" />,
  },
  {
    number: "02",
    title: "Build",
    description: "Hands-on implementation focusing on clean code, scalability, and robust problem solving.",
    icon: <Hammer className="w-6 h-6 text-cyan" />,
  },
  {
    number: "03",
    title: "Deploy",
    description: "Shipping products to production with proper CI/CD, monitoring, and cloud infrastructure.",
    icon: <Rocket className="w-6 h-6 text-emerald" />,
  },
  {
    number: "04",
    title: "Grow",
    description: "Iterating based on data, scaling the business or career, and achieving sustainable success.",
    icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-32 bg-deep-navy relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-sm md:text-base font-mono tracking-widest uppercase text-emerald mb-4">
            Methodology
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            My <span className="text-gradient">Approach</span>
          </h3>
        </motion.div>

        <div className="relative">
          {/* Horizontal Line Background */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Connecting Line for Mobile/Tablet */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-[-3rem] w-px bg-white/10 lg:hidden"></div>
                )}
                
                <div className="flex lg:flex-col items-start lg:items-center gap-6 lg:gap-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center shrink-0 border border-white/10 group-hover:border-white/30 transition-colors bg-deep-navy">
                    {step.icon}
                  </div>
                  
                  <div className="flex-1 lg:text-center pt-2 lg:pt-0">
                    <span className="text-4xl font-black text-white/5 absolute lg:static right-4 top-0 group-hover:text-white/10 transition-colors font-mono">
                      {step.number}
                    </span>
                    <h4 className="text-2xl font-bold mb-3 text-white">{step.title}</h4>
                    <p className="text-slate-400 font-inter text-sm lg:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
