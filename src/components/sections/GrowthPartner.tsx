"use client";

import { motion } from "framer-motion";
import { TrendingUp, BarChart, Target, PenTool, Settings, MonitorPlay } from "lucide-react";

export default function GrowthPartner() {
  const partners = [
    {
      name: "Tania Chaudhary",
      role: "Expert in Digital Marketing & Data Science",
      description: "Tania brings a powerful combination of data-driven insights and creative marketing strategies. Together, we scale businesses by bridging the gap between raw data analytics and high-impact digital campaigns, ensuring every decision is backed by metrics and aimed at explosive growth.",
      skills: [
        { text: "Growth Strategies & Scaling", icon: <TrendingUp className="w-5 h-5" />, bgClass: "bg-cyan/10 text-cyan" },
        { text: "Data Analytics & Insights", icon: <BarChart className="w-5 h-5" />, bgClass: "bg-emerald/10 text-emerald" },
        { text: "Targeted Digital Marketing", icon: <Target className="w-5 h-5" />, bgClass: "bg-electric-blue/10 text-electric-blue" }
      ],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      reverse: false,
    },
    {
      name: "Sainyam Sharma",
      role: "Expert in Content Creation & Operations",
      description: "Sainyam is a master of storytelling and operational efficiency. By pairing engaging content creation with streamlined processes, we ensure that every brand narrative not only reaches the right audience but also operates smoothly behind the scenes for maximum impact.",
      skills: [
        { text: "Content Strategy & Creation", icon: <PenTool className="w-5 h-5" />, bgClass: "bg-electric-blue/10 text-electric-blue" },
        { text: "Operational Efficiency", icon: <Settings className="w-5 h-5" />, bgClass: "bg-cyan/10 text-cyan" },
        { text: "Brand Narrative Management", icon: <MonitorPlay className="w-5 h-5" />, bgClass: "bg-emerald/10 text-emerald" }
      ],
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80",
      reverse: true,
    }
  ];

  return (
    <section id="growth-partner" className="py-32 bg-deep-navy relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-electric-blue/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm md:text-base font-mono tracking-widest uppercase text-cyan mb-4">
            Collaboration & Synergy
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            My <span className="text-gradient">Growth Partners</span>
          </h3>
        </motion.div>

        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div key={index} className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
              <div className="flex flex-col">
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h4 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {partner.name}
                  </h4>
                  <p className="text-emerald font-mono mb-6 tracking-wide">
                    {partner.role}
                  </p>
                  
                  <p className="text-slate-400 font-inter leading-relaxed mb-8 max-w-4xl">
                    {partner.description}
                  </p>

                  <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8">
                    {partner.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-300">
                        <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center ${skill.bgClass}`}>
                          {skill.icon}
                        </div>
                        <span className="font-medium">{skill.text}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
