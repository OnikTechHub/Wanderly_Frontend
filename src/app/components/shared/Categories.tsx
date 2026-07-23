"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Categories() {
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
        <h2 className="text-3xl font-bold tracking-tight">Top Travel Categories</h2>
        <p className="text-slate-400 max-w-md mx-auto">Choose your preferred style of journey and start exploring tailored destinations.</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {["Mountain Trekking", "Beach & Coastal", "City Exploration"].map((cat, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-wanderlyPrimary/50 transition group"
          >
            <div className="w-12 h-12 bg-wanderlyPrimary/10 rounded-2xl flex items-center justify-center text-wanderlyPrimary mb-6 group-hover:scale-110 transition">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{cat}</h3>
            <p className="text-slate-400 text-sm mb-6">Experience the ultimate thrill and relaxation handpicked by professional guides.</p>
            <Link href="/explore" className="text-wanderlyPrimary font-medium text-sm inline-flex items-center gap-1 hover:underline">
              Browse Category &rarr;
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}