"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const timelineEvents = [
  {
    year: "2015",
    title: "Technology Enthusiast",
    description: "Started the journey diving deep into coding, exploring algorithms, and building initial passion projects.",
  },
  {
    year: "2018",
    title: "Became a Mentor",
    description: "Began sharing knowledge, guiding juniors, and realizing the profound impact of teaching technology.",
  },
  {
    year: "2020",
    title: "Built Education Ecosystem",
    description: "Founded Deepesh Cyber Developers (DCD) to provide structured, industry-relevant training to thousands of students.",
  },
  {
    year: "2022",
    title: "Software Solutions",
    description: "Launched Pseudotek Solutions Pvt Ltd, transitioning from teaching to delivering enterprise-grade software solutions.",
  },
  {
    year: "2024",
    title: "Digital Growth Agency",
    description: "Started Elyxana Digital to help businesses scale through data-driven digital marketing and growth strategies.",
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={containerRef} className="py-32 bg-deep-navy relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left - Sticky Image */}
          <div className="lg:sticky lg:top-32 h-[500px] md:h-[700px] w-full rounded-3xl overflow-hidden glass-panel group">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
              alt="Deepesh Working"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-transparent opacity-80"></div>
            <motion.div 
              style={{ y: yTransform }}
              className="absolute -right-12 -bottom-12 w-64 h-64 bg-emerald/20 blur-[100px] rounded-full"
            />
          </div>

          {/* Right - Story Timeline */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Who is <span className="text-emerald">Deepesh?</span>
              </h2>
              <p className="text-lg text-slate-400 font-inter leading-relaxed">
                A passionate technologist turned serial entrepreneur. My journey isn't just about writing code; it's about building ecosystems that empower individuals to learn and businesses to thrive in the digital age.
              </p>
            </motion.div>

            <div className="relative border-l border-white/10 pl-8 ml-4 md:ml-0">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-12 last:mb-0 relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-deep-navy border-2 border-emerald z-10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald"></div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-emerald font-mono text-sm tracking-wider">
                      {event.year}
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {event.title}
                    </h3>
                    <p className="text-slate-400 font-inter leading-relaxed mt-2">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
