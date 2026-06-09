"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { navLinks } from "./navbar.constants";
import { navbarStyles } from "./navbar.styles";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`${navbarStyles.header} ${
          scrolled
            ? "bg-[#2f241c]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className={navbarStyles.container}>
          <Link href="/" className={navbarStyles.logo}>
            Muzeul Someș-Guruslău
          </Link>

          <nav className={navbarStyles.desktopNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={navbarStyles.desktopLink}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={navbarStyles.languageSwitcher}>
            🇷🇴 RO | 🇬🇧 EN
          </div>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className={navbarStyles.mobileMenuButton}
          >
            ☰
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className={navbarStyles.mobileOverlay}
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className={navbarStyles.mobileCloseButton}
            >
              ✕
            </button>

            <div className={navbarStyles.mobileLinksContainer}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={navbarStyles.mobileLink}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}