"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Compass, Rocket, LogIn, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-full px-6 py-3 shadow-2xl shadow-slate-950/50">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-r from-wanderlyPrimary to-cyan-400 p-2 rounded-xl text-slate-950 shadow-md transition-transform group-hover:scale-105">
              <Compass className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Wanderly
            </span>
          </Link>

          {/* Desktop Navigation (Pill Capsule Container) */}
          <nav className="hidden md:flex items-center bg-slate-950/60 border border-slate-800/80 rounded-full p-1.5 shadow-inner">
            <Link
              href="/"
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                pathname === "/"
                  ? "bg-gradient-to-r from-wanderlyPrimary to-cyan-500 text-slate-950 shadow-lg shadow-wanderlyPrimary/20 font-semibold"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/explore"
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                pathname === "/explore"
                  ? "bg-gradient-to-r from-wanderlyPrimary to-cyan-500 text-slate-950 shadow-lg shadow-wanderlyPrimary/20 font-semibold"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              Explore
            </Link>

            <Link
              href="/about"
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                pathname === "/about"
                  ? "bg-gradient-to-r from-wanderlyPrimary to-cyan-500 text-slate-950 shadow-lg shadow-wanderlyPrimary/20 font-semibold"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              About
            </Link>

            {/* লগইন করার পর অতিরিক্ত রুটগুলো দেখাবে */}
            {isLoggedIn && (
              <>
                <Link
                  href="/items/add"
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    pathname === "/items/add"
                      ? "bg-gradient-to-r from-wanderlyPrimary to-cyan-500 text-slate-950 shadow-lg shadow-wanderlyPrimary/20 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  Add Item
                </Link>

                <Link
                  href="/items/manage"
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    pathname === "/items/manage"
                      ? "bg-gradient-to-r from-wanderlyPrimary to-cyan-500 text-slate-950 shadow-lg shadow-wanderlyPrimary/20 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  Manage
                </Link>
              </>
            )}
          </nav>

          {/* Right Side Action Button (Hire Me / Login Style) */}
          <div className="hidden md:flex items-center gap-3">
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700">
                  Dashboard
                </span>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="text-xs font-medium text-rose-400 hover:bg-rose-500/10 px-3 py-1.5 rounded-lg transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-2 bg-gradient-to-r from-wanderlyPrimary to-cyan-500 text-slate-950 font-bold px-6 py-2.5 rounded-full shadow-lg shadow-wanderlyPrimary/25 hover:opacity-90 transition-all transform hover:scale-105"
              >
                <Rocket className="w-4 h-4 fill-slate-950 animate-pulse" /> Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none bg-slate-800 p-2 rounded-xl"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-slate-900/95 backdrop-blur-2xl border border-slate-800 rounded-3xl p-6 space-y-3 shadow-2xl">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/explore"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            Explore
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            About Us
          </Link>

          {isLoggedIn && (
            <>
              <Link
                href="/items/add"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                Add Item
              </Link>
              <Link
                href="/items/manage"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                Manage Items
              </Link>
            </>
          )}

          <div className="pt-4 border-t border-slate-800">
            {isLoggedIn ? (
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  setIsOpen(false);
                }}
                className="w-full py-2.5 text-center text-rose-400 bg-rose-500/10 rounded-xl font-medium"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-wanderlyPrimary to-cyan-500 text-slate-950 rounded-xl font-bold shadow-md"
              >
                <Rocket className="w-4 h-4 fill-slate-950" /> Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}