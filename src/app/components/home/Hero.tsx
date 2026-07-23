import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 flex items-center justify-center border-b border-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-wanderlyPrimary/20 via-slate-950 to-slate-950 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-wanderlyPrimary text-sm font-medium shadow-inner">
          <Compass className="w-4 h-4 animate-spin" /> Explore the Unseen World with Wanderly
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
          Discover Your Next Great <span className="bg-gradient-to-r from-wanderlyPrimary to-cyan-400 bg-clip-text text-transparent">Adventure</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
          Plan, book, and manage your dream tours seamlessly with our comprehensive travel platform designed for modern explorers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/explore"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-wanderlyPrimary to-cyan-500 text-slate-950 font-bold px-8 py-4 rounded-2xl shadow-xl shadow-wanderlyPrimary/20 hover:opacity-95 transition transform hover:-translate-y-0.5"
          >
            Explore Tours <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 text-slate-300 font-semibold px-8 py-4 rounded-2xl hover:bg-slate-800 hover:text-white transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}