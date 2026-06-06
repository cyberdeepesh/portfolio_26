"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const podcasts = [
  {
    id: "IgRVdSozuwI",
    title: "Podcast 1",
  },
  {
    id: "OoGEPQkmmY4",
    title: "Podcast 2",
  },
  {
    id: "TWuJ3Css1oY",
    title: "Podcast 3",
  },
];

function PodcastCard({ podcast, index }: { podcast: any; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-panel p-4 rounded-3xl border border-white/10 hover:border-electric-blue transition-colors overflow-hidden group cursor-pointer"
      onClick={() => setIsPlaying(true)}
    >
      <div className="aspect-video w-full rounded-2xl overflow-hidden relative">
        {!isPlaying ? (
          <>
            {/* Load high-res thumbnail manually to fix blurry iframe thumbnails */}
            <img
              src={`https://img.youtube.com/vi/${podcast.id}/maxresdefault.jpg`}
              alt={podcast.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-deep-navy/40 flex items-center justify-center group-hover:bg-deep-navy/20 transition-colors">
              <div className="w-16 h-16 rounded-full bg-cyan/90 text-white flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.5)] group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
          </>
        ) : (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${podcast.id}?autoplay=1`}
            title={podcast.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        )}
      </div>
    </motion.div>
  );
}

export default function Podcasts() {
  return (
    <section id="podcasts" className="py-32 bg-deep-navy relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm md:text-base font-mono tracking-widest uppercase text-cyan mb-4">
            Listen & Learn
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Featured <span className="text-gradient">Podcasts</span>
          </h3>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            Insights, tech talks, and journey experiences shared on various platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcasts.map((podcast, i) => (
            <PodcastCard key={podcast.id} podcast={podcast} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
