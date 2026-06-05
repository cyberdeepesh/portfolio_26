"use client";

import { motion } from "framer-motion";


const items = [
  {
    title: "Best Tech Educator Award 2023",
    type: "Award",
    image: "https://images.unsplash.com/photo-1531545514251-b159ce8d1822?auto=format&fit=crop&q=80",
    className: "col-span-1 md:col-span-2 row-span-2 h-[400px]",
  },
  {
    title: "AI Summit Keynote",
    type: "Speaking",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    className: "col-span-1 h-[200px] md:h-auto",
  },
  {
    title: "100x Growth Workshop",
    type: "Event",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
    className: "col-span-1 h-[200px] md:h-auto",
  },
  {
    title: "Startup Incubator Panel",
    type: "Speaking",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80",
    className: "col-span-1 md:col-span-2 h-[300px]",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 bg-deep-navy relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm md:text-base font-mono tracking-widest uppercase text-cyan mb-4">
            Highlights
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Media & <span className="text-gradient">Achievements</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden glass-panel ${item.className}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono text-cyan uppercase tracking-wider mb-2 block">
                  {item.type}
                </span>
                <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan transition-colors">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
