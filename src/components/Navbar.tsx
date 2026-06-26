"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-brand-black sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo + Name */}
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-white rounded-sm px-2 py-1 shrink-0">
              <Image
                src="/logo.png"
                alt="TWC Express LLC"
                width={130}
                height={52}
                className="h-10 w-auto object-contain"
                priority
              />
            </div>
            <span className="hidden sm:block text-white font-extrabold text-lg tracking-widest leading-none">
              TWC <span className="text-brand-orange">EXPRESS</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-colors duration-150 ${
                    active
                      ? "text-brand-orange border-b-2 border-brand-orange"
                      : "text-gray-300 hover:text-brand-orange"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-4 btn-primary !py-2 !px-5 text-xs"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-orange"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-neutral-900 border-t border-neutral-700">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-2 px-3 text-sm font-semibold tracking-wide uppercase rounded ${
                    active
                      ? "text-brand-orange bg-neutral-800"
                      : "text-gray-300 hover:text-brand-orange hover:bg-neutral-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 btn-primary text-center"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
