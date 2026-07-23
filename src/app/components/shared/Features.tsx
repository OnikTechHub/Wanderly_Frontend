"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rightCardVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-slate-900/30 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          <motion.h2 variants={itemVariants} className="text-3xl lg:text-4xl font-bold leading-tight">
            Why Choose Wanderly For Your Next Journey?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-400">
            We ensure secure bookings, transparent pricing, and verified tour operators so you can travel with complete peace of mind.
          </motion.p>
          <div className="space-y-4">
            <motion.div variants={itemVariants} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-wanderlyPrimary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">Verified Tour Packages</h4>
                <p className="text-sm text-slate-400">Every package is vetted for safety and high-quality experiences.</p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-wanderlyPrimary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">Seamless Management</h4>
                <p className="text-sm text-slate-400">Add, track, and manage your booked itineraries easily from your dashboard.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={rightCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl space-y-6"
        >
          <h3 className="text-xl font-bold">Ready to Start?</h3>
          <p className="text-slate-400 text-sm">Join thousands of travelers who trust Wanderly for their worldwide explorations.</p>
          <Link href="/login" className="block text-center w-full py-3 bg-wanderlyPrimary text-slate-950 font-bold rounded-xl shadow-lg">
            Create Free Account
          </Link>
        </motion.div>
      </div>
    </section>
  );
}