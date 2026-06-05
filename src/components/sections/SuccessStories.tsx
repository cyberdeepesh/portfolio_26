"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


const stories = [
  {
    category: "Student Transformation",
    name: "Rahul S.",
    before: "Non-CS background, struggling with basic programming concepts.",
    after: "Full Stack Developer at a top product company with a 300% salary hike.",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80",
  },
  {
    category: "Business Transformation",
    name: "TechNova Retail",
    before: "Manual inventory, 0 online sales, declining offline footfall.",
    after: "Fully automated e-commerce platform, 5x revenue growth in 6 months.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80",
  }
];

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-32 bg-deep-navy relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm md:text-base font-mono tracking-widest uppercase text-emerald mb-4">
            Case Studies
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Success <span className="text-gradient">Stories</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group glass-panel rounded-[2rem] overflow-hidden flex flex-col"
            >
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-mono uppercase tracking-wider text-emerald border border-white/10 mb-3 inline-block">
                    {story.category}
                  </span>
                  <h4 className="text-2xl font-bold">{story.name}</h4>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col justify-between">
                <div className="space-y-6 mb-8">
                  <div>
                    <h5 className="text-sm text-slate-500 uppercase tracking-wider mb-2 font-mono">Before</h5>
                    <p className="text-slate-300 font-inter">{story.before}</p>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="w-full h-px bg-white/10"></div>
                    <div className="px-4 text-white/20">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                    <div className="w-full h-px bg-white/10"></div>
                  </div>

                  <div>
                    <h5 className="text-sm text-emerald uppercase tracking-wider mb-2 font-mono">After</h5>
                    <p className="text-white font-inter">{story.after}</p>
                  </div>
                </div>
                
                <button className="text-cyan font-medium hover:text-white transition-colors self-start flex items-center gap-2">
                  Read Full Case Study <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
