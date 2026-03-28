import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: "The quality of the beads is amazing. You can feel the weight of the real stones. Absolutely love my set!",
    author: "Sarah Khan",
    location: "Lahore"
  },
  {
    id: 2,
    text: "Ordered a couple set for my anniversary. The packaging was so premium and the bracelets fit perfectly.",
    author: "Ahmed Ali",
    location: "Karachi"
  },
  {
    id: 3,
    text: "Was skeptical about buying jewelry online, but Luxara exceeded my expectations. Will order again.",
    author: "Fatima Z.",
    location: "Islamabad"
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut'
    }
  }
};

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.10),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 text-amber-300 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.15)]">
            <Quote size={28} />
          </div>
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-300/90 backdrop-blur-md">
            Client Notes
          </span>
          <h2 className="mt-5 text-3xl font-serif text-white md:text-5xl">
            What Our Collectors Say
          </h2>
          <p className="mt-4 text-sm leading-7 text-neutral-400 md:text-base">
            Every review reflects the care, finish, and gifting experience that define the Luxara collection.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-7 text-left shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-md"
            >
              <div className="mb-5 flex items-center gap-1 text-amber-300">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={15} fill="currentColor" className="opacity-90" />
                ))}
              </div>

              <p className="min-h-[144px] text-base italic leading-8 text-neutral-300 md:text-lg">
                "{review.text}"
              </p>

              <div className="mt-8 border-t border-white/10 pt-5">
                <h4 className="font-serif text-lg tracking-wide text-white">
                  {review.author}
                </h4>
                <span className="mt-1 inline-block text-[11px] uppercase tracking-[0.3em] text-amber-300/85">
                  {review.location}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;