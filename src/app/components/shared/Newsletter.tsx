"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-r from-wanderlyPrimary/10 to-cyan-500/10 border-y border-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto px-4 text-center space-y-6"
      >
        <h2 className="text-3xl font-bold">Stay Updated with Wanderly</h2>
        <p className="text-slate-400">Subscribe to get exclusive discount offers, new destination alerts, and travel guides.</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="bg-slate-900 border border-slate-800 px-4 py-3 rounded-xl focus:outline-none focus:border-wanderlyPrimary flex-grow text-slate-100"
          />
          <button className="bg-wanderlyPrimary text-slate-950 font-bold px-6 py-3 rounded-xl hover:opacity-90 transition">
            Subscribe
          </button>
        </div>
      </motion.div>
    </section>
  );
}