"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { useState } from "react";

const testimonials = [
  {
    text: "Deepesh's mentorship completely changed my career trajectory. The way he breaks down complex system design concepts is unparalleled.",
    author: "Amit Patel",
    role: "Software Engineer @ Google",
    type: "Student",
    image: "https://ui-avatars.com/api/?name=Amit+Patel&background=0D8ABC&color=fff",
  },
  {
    text: "Working with Elyxana Digital transformed our lead generation. Their data-driven approach brought us a 400% increase in qualified leads.",
    author: "Sarah Jenkins",
    role: "Marketing Director @ TechFlow",
    type: "Business",
    image: "https://ui-avatars.com/api/?name=Sarah+Jenkins&background=10B981&color=fff",
  },
  {
    text: "The training programs provided by DCD are exactly what the industry needs. Freshers are production-ready from day one.",
    author: "Vikram Sharma",
    role: "CTO @ InnovateTech",
    type: "Business",
    image: "https://ui-avatars.com/api/?name=Vikram+Sharma&background=2563EB&color=fff",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 bg-deep-navy relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm md:text-base font-mono tracking-widest uppercase text-emerald mb-4">
            Words of Trust
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Client & Student <span className="text-gradient">Testimonials</span>
          </h3>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full shrink-0 px-4">
                  <div className="glass-panel p-8 md:p-16 rounded-[2rem] relative border border-white/10">
                    <Quote className="absolute top-8 left-8 md:top-12 md:left-12 w-12 h-12 text-white/10" />
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <p className="text-xl md:text-3xl font-inter leading-relaxed text-slate-300 mb-10">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden relative">
                          <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left">
                          <h4 className="text-lg font-bold text-white">{testimonial.author}</h4>
                          <p className="text-sm text-slate-400">{testimonial.role}</p>
                          <span className="text-xs text-emerald font-mono uppercase mt-1 inline-block">
                            {testimonial.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? "w-8 bg-electric-blue" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
