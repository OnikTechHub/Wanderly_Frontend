"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center space-y-3 mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tight">What Travelers Say</h2>
        <p className="text-slate-400">Real feedback from our adventurous community members.</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <motion.div
          variants={itemVariants}
          className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-4"
        >
          <div className="flex gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-amber-400" />))}
          </div>
          <p className="text-slate-300 italic">&ldquo;Wanderly made our mountain trip planning completely effortless. The interface is super clean and booking was smooth!&rdquo;</p>
          <h5 className="font-semibold text-sm text-wanderlyPrimary">&mdash; Tanvir Ahmed, Explorer</h5>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-4"
        >
          <div className="flex gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-amber-400" />))}
          </div>
          <p className="text-slate-300 italic">&ldquo;Amazing platform with top-tier design and responsive support. Highly recommended for group tours.&rdquo;</p>
          <h5 className="font-semibold text-sm text-wanderlyPrimary">&mdash; Nusrat Jahan, Traveler</h5>
        </motion.div>
      </motion.div>
    </section>
  );
}