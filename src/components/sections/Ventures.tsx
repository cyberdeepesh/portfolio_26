"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2, Cpu, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const ventures = [
  {
    name: "Deepesh Cyber Developers",
    role: "Founder & Lead Educator",
    description: "Ed-tech institution providing industry-ready technology education, practical training, mentorship, and placement support.",
    services: ["Full Stack Development", "AI & ML", "Data Science", "Digital Marketing", "Ethical Hacking"],
    icon: <Code2 className="w-8 h-8 text-cyan" />,
    color: "from-cyan/20 to-transparent",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
    link: "#",
  },
  {
    name: "Pseudotek Solutions",
    role: "Founder & CEO",
    description: "Technology company delivering custom software solutions, business automation, web applications, and enterprise systems.",
    services: ["Software Development", "Web Development", "ERP", "CRM", "SaaS Platforms"],
    icon: <Cpu className="w-8 h-8 text-electric-blue" />,
    color: "from-electric-blue/20 to-transparent",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    link: "#",
  },
  {
    name: "Elyxana Digital",
    role: "Founder & Director",
    description: "Growth-focused digital marketing agency helping businesses scale through performance marketing and branding.",
    services: ["SEO", "Social Media", "Google Ads", "Meta Ads", "Lead Generation"],
    icon: <TrendingUp className="w-8 h-8 text-emerald" />,
    color: "from-emerald/20 to-transparent",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80",
    link: "#",
  },
];

function VentureCard({ venture, index }: { venture: typeof ventures[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      className="relative w-full rounded-[2rem] overflow-hidden glass-panel group mb-16 last:mb-0"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={venture.image}
          alt={venture.name}
          className="w-full h-full object-cover opacity-20 transition-transform duration-1000 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${venture.color} mix-blend-overlay`}></div>
        <div className="absolute inset-0 bg-deep-navy/80"></div>
      </div>

      <div className="relative z-10 p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center mb-8">
            {venture.icon}
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">{venture.name}</h3>
          <p className="text-slate-300 text-lg md:text-xl font-inter mb-8 max-w-xl leading-relaxed">
            {venture.description}
          </p>
          
          <div className="mb-10">
            <h4 className="text-sm uppercase tracking-widest text-slate-500 mb-4 font-mono">Core Services</h4>
            <div className="flex flex-wrap gap-3">
              {venture.services.map((service, i) => (
                <span key={i} className="px-4 py-2 rounded-full glass-panel text-sm font-medium border border-white/10 hover:border-white/30 transition-colors cursor-default">
                  {service}
                </span>
              ))}
            </div>
          </div>

          <a href={venture.link} className="inline-flex items-center gap-2 text-white font-medium hover:text-cyan transition-colors group/link">
            Explore Venture 
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Ventures() {
  return (
    <section id="ventures" className="py-32 bg-deep-navy relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm md:text-base font-mono tracking-widest uppercase text-cyan mb-4">
            Entrepreneurship
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Founder of <span className="text-gradient">Three Ventures</span>
          </h3>
        </motion.div>

        <div className="flex flex-col">
          {ventures.map((venture, index) => (
            <VentureCard key={index} venture={venture} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
