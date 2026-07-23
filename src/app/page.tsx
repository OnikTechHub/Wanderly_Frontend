
import Link from "next/link";
import { CheckCircle2, Star, MapPin } from "lucide-react";
import Hero from "./components/home/Hero";
import Statistics from "./components/home/Statistics";
import Categories from "./components/shared/Categories";
import Features from "./components/shared/Features";
import Testimonials from "./components/shared/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      
      {/* 1. Hero Section Component */}
      <Hero />

      {/* 2. Statistics Section */}
      <Statistics />

      {/* 3. Featured Categories Section */}

      <Categories />      

      {/* 4.Features Section */}
      
      <Features />

      {/* 5. Testimonials Section */}
      <Testimonials />

      {/* 6. Newsletter Section */}
      

      {/* 7. FAQ Section */}
      

    </div>
  );
}