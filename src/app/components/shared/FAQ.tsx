"use client";

import { motion } from "framer-motion";

export default function FAQ() {
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
    <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center space-y-3 mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
        <p className="text-slate-400">Got questions? We&apos;ve got answers.</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-4"
      >
        <motion.div
          variants={itemVariants}
          className="bg-slate-900 border border-slate-800 p-6 rounded-2xl"
        >
          <h4 className="font-semibold text-lg mb-2">How do I book a tour on Wanderly?</h4>
          <p className="text-slate-400 text-sm">Simply explore our listings, view details of your preferred package, and complete your secure booking or registration.</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-slate-900 border border-slate-800 p-6 rounded-2xl"
        >
          <h4 className="font-semibold text-lg mb-2">Can I add my own custom tour items?</h4>
          <p className="text-slate-400 text-sm">Yes! Once logged in, you can visit the Add Items page to list your travel experiences seamlessly.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}