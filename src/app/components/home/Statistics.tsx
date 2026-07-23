"use client";

import { motion } from "framer-motion";

export default function Statistics() {
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
    <section className="py-12 border-b border-slate-900 bg-slate-900/40">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl lg:text-4xl font-bold text-wanderlyPrimary">150+</h3>
          <p className="text-sm text-slate-400 mt-1">Destination Partners</p>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl lg:text-4xl font-bold text-wanderlyPrimary">10k+</h3>
          <p className="text-sm text-slate-400 mt-1">Happy Travelers</p>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl lg:text-4xl font-bold text-wanderlyPrimary">4.9</h3>
          <p className="text-sm text-slate-400 mt-1">Average User Rating</p>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl lg:text-4xl font-bold text-wanderlyPrimary">24/7</h3>
          <p className="text-sm text-slate-400 nk-1">Dedicated Support</p>
        </motion.div>
      </motion.div>
    </section>
  );
}