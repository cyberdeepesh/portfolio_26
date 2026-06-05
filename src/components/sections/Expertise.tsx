"use client";

import { motion } from "framer-motion";
import { Brain, Code, LineChart, Cpu, Database, Megaphone, Lightbulb, Users } from "lucide-react";

const expertiseAreas = [
  { name: "Software Engineering", icon: <Code className="w-6 h-6" />, color: "hover:text-electric-blue hover:border-electric-blue", bg: "hover:bg-electric-blue/10" },
  { name: "System Design", icon: <Cpu className="w-6 h-6" />, color: "hover:text-cyan hover:border-cyan", bg: "hover:bg-cyan/10" },
  { name: "Artificial Intelligence", icon: <Brain className="w-6 h-6" />, color: "hover:text-emerald hover:border-emerald", bg: "hover:bg-emerald/10" },
  { name: "Machine Learning", icon: <LineChart className="w-6 h-6" />, color: "hover:text-purple-500 hover:border-purple-500", bg: "hover:bg-purple-500/10" },
  { name: "Data Science", icon: <Database className="w-6 h-6" />, color: "hover:text-pink-500 hover:border-pink-500", bg: "hover:bg-pink-500/10" },
  { name: "Digital Marketing", icon: <Megaphone className="w-6 h-6" />, color: "hover:text-orange-500 hover:border-orange-500", bg: "hover:bg-orange-500/10" },
  { name: "Business Consulting", icon: <Lightbulb className="w-6 h-6" />, color: "hover:text-yellow-500 hover:border-yellow-500", bg: "hover:bg-yellow-500/10" },
  { name: "Technology Training", icon: <Users className="w-6 h-6" />, color: "hover:text-blue-400 hover:border-blue-400", bg: "hover:bg-blue-400/10" },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-32 bg-deep-navy relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm md:text-base font-mono tracking-widest uppercase text-cyan mb-4">
            Skill Set
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            My <span className="text-gradient">Expertise</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group glass-panel p-8 rounded-2xl flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 border border-white/5 cursor-default ${area.color} ${area.bg}`}
            >
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                {area.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-300 group-hover:text-inherit transition-colors duration-300">
                {area.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
