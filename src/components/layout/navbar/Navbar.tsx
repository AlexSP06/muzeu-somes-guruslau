"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "./navbar.constants";
import { navbarStyles } from "./navbar.style";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={navbarStyles.header}>
      <div className={navbarStyles.container}>
        {/* LOGO */}
        <Link href="/" className={navbarStyles.logo}>
          Muzeul Someș-Guruslău
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className={navbarStyles.nav}>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${navbarStyles.link} ${
                  isActive ? "text-[#8B0000] font-semibold after:w-full" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={navbarStyles.mobileMenuBtn}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden bg-[#F5F0E6] border-b border-[#D4AF37]/20 px-4 pt-2 pb-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "bg-[#8B0000]/10 text-[#8B0000] font-semibold"
                    : "text-[#2F2F2F] hover:bg-[#8B0000]/5 hover:text-[#8B0000]"
                } transition-colors`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}