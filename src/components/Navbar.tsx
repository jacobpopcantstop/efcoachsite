"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/methodology", label: "Methodology" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Jacob" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-[1000] py-4 border-b border-gray-100 dark:border-gray-800 transition-colors">
      <div className="container flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 font-display font-bold text-2xl text-gray-900 dark:text-gray-50">
          <span className="text-3xl text-primary dark:text-blue-400">♕</span>
          <span>Jacob<span className="text-primary dark:text-blue-400">EF</span></span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-medium transition-colors ${pathname === link.href ? "text-primary dark:text-blue-400" : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400"}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/book" className="btn btn-primary">
              Get Started
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg py-4 border-b border-gray-100 dark:border-gray-800">
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-medium ${pathname === link.href ? "text-primary dark:text-blue-400" : "text-gray-600 dark:text-gray-300"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/book" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
