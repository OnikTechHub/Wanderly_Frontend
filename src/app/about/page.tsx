"use client";

import { Compass, Users, Target, Award, HeartHandshake, Globe2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-28 border-b border-slate-900 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-wanderlyPrimary text-sm font-medium"
          >
            <Compass className="w-4 h-4 animate-spin" /> About Wanderly
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight"
          >
            Redefining How the World <span className="bg-gradient-to-r from-wanderlyPrimary to-cyan-400 bg-clip-text text-transparent">Explores</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Wanderly is a modern, community-driven tour and travel management platform designed to make unforgettable journeys seamless, secure, and accessible for everyone.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <motion.div
            variants={itemVariants}
            className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-4 hover:border-wanderlyPrimary/40 transition"
          >
            <div className="w-12 h-12 bg-wanderlyPrimary/10 rounded-2xl flex items-center justify-center text-wanderlyPrimary">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-slate-400 leading-relaxed">
              To empower modern explorers with a reliable, feature-rich platform that simplifies tour planning, ensures transparent pricing, and connects travelers with top-tier verified destination operators.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-4 hover:border-wanderlyPrimary/40 transition"
          >
            <div className="w-12 h-12 bg-wanderlyPrimary/10 rounded-2xl flex items-center justify-center text-wanderlyPrimary">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              To build the world&apos;s most trusted digital ecosystem for travel management, fostering a global community where adventure meets absolute peace of mind.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center space-y-3 mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight">Core Values That Drive Us</h2>
            <p className="text-slate-400">The principles behind every feature and experience we build.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl space-y-4"
            >
              <div className="w-10 h-10 bg-wanderlyPrimary/10 rounded-xl flex items-center justify-center text-wanderlyPrimary">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-semibold">Trust & Safety</h4>
              <p className="text-slate-400 text-sm">We strictly vet all listed packages and operators to guarantee secure and safe travel experiences.</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl space-y-4"
            >
              <div className="w-10 h-10 bg-wanderlyPrimary/10 rounded-xl flex items-center justify-center text-wanderlyPrimary">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-semibold">Customer First</h4>
              <p className="text-slate-400 text-sm">Our 24/7 dedicated support and intuitive user interface put your convenience at the forefront.</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl space-y-4"
            >
              <div className="w-10 h-10 bg-wanderlyPrimary/10 rounded-xl flex items-center justify-center text-wanderlyPrimary">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-semibold">Excellence</h4>
              <p className="text-slate-400 text-sm">We continuously innovate our platform architecture to deliver lightning-fast and premium performance.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team / Community Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6"
      >
        <Users className="w-12 h-12 text-wanderlyPrimary mx-auto" />
        <h2 className="text-3xl font-bold">Built with Passion for Explorers</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Wanderly is crafted with cutting-edge frontend technologies like Next.js, Tailwind CSS, and robust backend logic to ensure an elite digital experience. Join us on this amazing journey!
        </p>
      </motion.section>

    </div>
  );
}