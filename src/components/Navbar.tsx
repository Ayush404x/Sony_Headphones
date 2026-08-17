"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Overview", href: "/" },
  { name: "Technology", href: "/technology" },
  { name: "Noise Cancelling", href: "/noise-cancelling" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Change navbar background after 50px of scroll
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/80 backdrop-blur-md border-b border-white/10" : "bg-primary/40 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-white font-medium tracking-tight text-lg">
            WH-1000XM6
          </Link>
        </div>

        {/* Center: Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors text-sm font-medium tracking-wide ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right: CTA */}
        <div className="flex-shrink-0">
          <button className="relative group overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-0 bg-gradient-to-r from-sony-blue to-sony-cyan opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
            <div className="px-5 py-2 bg-primary rounded-full relative transition-colors duration-300 group-hover:bg-primary/50">
              <span className="text-white text-sm font-medium">Experience WH-1000XM6</span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
