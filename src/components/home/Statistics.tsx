"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "100+", label: "Exponate Autentice" },
  { value: "100+", label: "Ani de Istorie Salvată" },
  { value: "10k+", label: "Vizitatori Anuali" },
  { value: "100%", label: "Pasiune pentru Tradiție" },
];

export default function Statistics() {
  return (
    <section className="py-12 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <div className="text-3xl md:text-4xl font-serif font-bold text-amber-500">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-stone-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}