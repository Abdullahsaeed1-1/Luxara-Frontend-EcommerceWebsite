import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBgImage from '../../assets/gemini 2.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <img
          src={heroBgImage}
          alt="Luxara Collection"
          className="h-full w-full object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.12),transparent_28%),linear-gradient(90deg,rgba(10,10,10,0.96)_0%,rgba(10,10,10,0.82)_42%,rgba(10,10,10,0.45)_68%,rgba(10,10,10,0.7)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-neutral-950" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.06)]">
            <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_18px_rgba(251,191,36,0.9)]" />
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-200">
              New Collection 2025
            </p>
          </div>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-black/20 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:p-8 lg:p-10">
            <h1 className="text-5xl font-serif font-light leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Timeless <br />
              <span className="italic font-normal text-neutral-100">Elegance.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-300 sm:text-lg">
              Anti-tarnish stainless steel jewelry. Waterproof. Skin-safe. Designed
              for those who wear their jewelry every single day.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.02, y: -5 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/shop"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-black transition-all duration-300 hover:bg-amber-400 hover:text-black shadow-[0_10px_30px_rgba(255,255,255,0.12)]"
                >
                  Shop Now
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02, y: -5 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-center text-xs font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                >
                  Our Story
                </Link>
              </motion.div>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 border-t border-white/10 pt-6 text-sm text-neutral-400 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-light text-white">24/7</p>
                <p className="mt-1 uppercase tracking-[0.22em]">Wearable luxury</p>
              </div>
              <div>
                <p className="text-2xl font-light text-white">100%</p>
                <p className="mt-1 uppercase tracking-[0.22em]">Skin-safe finish</p>
              </div>
              <div>
                <p className="text-2xl font-light text-white">Modern</p>
                <p className="mt-1 uppercase tracking-[0.22em]">Everyday statement</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;