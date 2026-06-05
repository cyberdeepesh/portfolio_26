"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mail, MessageCircle, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";

export default function Contact() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.body);
  }, []);
  return (
    <section id="contact" className="py-32 bg-deep-navy relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Let's Build Something <br className="hidden md:block" />
              <span className="text-gradient">Meaningful Together</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-inter">
              Whether you're a student looking for mentorship or a business seeking digital transformation, I'm just a message away.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.button
              onClick={() => setIsCalendlyOpen(true)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group glass-panel p-8 rounded-3xl border border-white/10 hover:border-electric-blue transition-colors flex flex-col items-start gap-6 text-left w-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-electric-blue/20 text-electric-blue flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Book Consultation</h3>
                <p className="text-slate-400 font-inter">Schedule a 1-on-1 session via Calendly.</p>
              </div>
              <div className="mt-auto flex items-center text-electric-blue font-medium group-hover:gap-3 transition-all gap-2">
                Find a slot <ArrowRight className="w-4 h-4" />
              </div>
            </motion.button>

            <motion.a
              href="mailto:hello@deepeshkumar.com"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="group glass-panel p-8 rounded-3xl border border-white/10 hover:border-cyan transition-colors flex flex-col items-start gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan/20 text-cyan flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Email Me</h3>
                <p className="text-slate-400 font-inter">Drop a message anytime.</p>
              </div>
              <div className="mt-auto flex items-center text-cyan font-medium group-hover:gap-3 transition-all gap-2">
                hello@deepeshkumar.com <ArrowRight className="w-4 h-4" />
              </div>
            </motion.a>

            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="group glass-panel p-8 rounded-3xl border border-white/10 hover:border-emerald transition-colors flex flex-col items-start gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald/20 text-emerald flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">WhatsApp</h3>
                <p className="text-slate-400 font-inter">Quick questions and chat.</p>
              </div>
              <div className="mt-auto flex items-center text-emerald font-medium group-hover:gap-3 transition-all gap-2">
                Start Chat <ArrowRight className="w-4 h-4" />
              </div>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/dummy"
              target="_blank"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="group glass-panel p-8 rounded-3xl border border-white/10 hover:border-[#0077b5] transition-colors flex flex-col items-start gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0077b5]/20 text-[#0077b5] flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">LinkedIn</h3>
                <p className="text-slate-400 font-inter">Professional networking.</p>
              </div>
              <div className="mt-auto flex items-center text-[#0077b5] font-medium group-hover:gap-3 transition-all gap-2">
                Connect <ArrowRight className="w-4 h-4" />
              </div>
            </motion.a>
          </div>
        </div>
      </div>

      {rootElement && (
        <PopupModal
          url="https://calendly.com/dummy"
          onModalClose={() => setIsCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={rootElement}
        />
      )}
    </section>
  );
}
