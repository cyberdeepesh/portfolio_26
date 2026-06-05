"use client";

import { motion } from "framer-motion";


const images = [
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80",
];

const floatingQuotes = [
  { text: `"Best mentor I've ever had."`, x: "10%", y: "20%", delay: 0 },
  { text: `"Got placed at top MNC!"`, x: "70%", y: "15%", delay: 0.5 },
  { text: `"Complex concepts made simple."`, x: "15%", y: "75%", delay: 1 },
  { text: `"Life-changing guidance."`, x: "65%", y: "80%", delay: 1.5 },
];

export default function Mentorship() {
  return (
    <section id="mentorship" className="py-32 bg-deep-navy relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm md:text-base font-mono tracking-widest uppercase text-cyan mb-4">
            Giving Back
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Teaching & <span className="text-gradient">Mentorship</span>
          </h3>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            Empowering the next generation of engineers through workshops, intensive training programs, and one-on-one career guidance.
          </p>
        </motion.div>

        <div className="relative h-[600px] w-full mt-20">
          {/* Main Collage Images */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full">
            <motion.div
              initial={{ opacity: 0, rotate: -5, x: -50 }}
              whileInView={{ opacity: 1, rotate: -2, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute left-0 top-10 w-64 md:w-80 h-80 md:h-96 rounded-2xl overflow-hidden glass-panel z-10 shadow-2xl"
            >
              <img src={images[0]} alt="Workshop" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute left-1/2 -translate-x-1/2 top-0 w-72 md:w-96 h-96 md:h-[28rem] rounded-2xl overflow-hidden glass-panel z-20 shadow-2xl"
            >
              <img src={images[1]} alt="Training Session" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotate: 5, x: 50 }}
              whileInView={{ opacity: 1, rotate: 2, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute right-0 bottom-10 w-64 md:w-80 h-80 md:h-96 rounded-2xl overflow-hidden glass-panel z-10 shadow-2xl"
            >
              <img src={images[2]} alt="Career Guidance" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Animated Quotes */}
          {floatingQuotes.map((quote, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: quote.delay }}
              animate={{ y: [0, -10, 0] }}
              style={{
                left: quote.x,
                top: quote.y,
              }}
              className="absolute hidden lg:block px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-xl z-30"
              //@ts-ignore framer-motion transition warning
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: quote.delay,
                }
              }}
            >
              <span className="text-white text-sm font-medium italic">{quote.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
