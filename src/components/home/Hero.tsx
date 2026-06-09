"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/hero/museum-hero.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/55" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-4xl px-6 text-center text-white"
      >
        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
          Descoperă patrimoniul cultural al zonei
          <span className="block text-[#d4b483]">
            Someș-Guruslău
          </span>
        </h1>

        <p className="mb-10 text-lg md:text-2xl">
          Tradiții, meșteșuguri și povești care au traversat generații.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/about"
            className="rounded-full bg-[#d4b483] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Explorează Muzeul
          </Link>

          <Link
            href="/virtual-tour"
            className="rounded-full border border-white px-8 py-4 font-semibold transition-all duration-300 hover:bg-white hover:text-black hover:shadow-xl"
          >
            Tur Virtual 360°
          </Link>
        </div>
      </motion.div>
    </section>
  );
}