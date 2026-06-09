"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function VirtualTourPreview() {
  return (
    <section className="py-20 bg-stone-900 text-stone-100 border-t border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-amber-500 uppercase block">
              Experiență Digitală
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
              Vizitează muzeul de oriunde, prin <span className="text-amber-500">Turul Virtual 3D</span>
            </h2>
            <p className="text-sm md:text-base text-stone-300 leading-relaxed">
              Nu poți ajunge fizic în Sălaj? Am reconstruit digital spațiul muzeului pentru ca tu să poți explora fiecare ungher, să mărești detaliile costumelor populare și să asculți poveștile din spatele exponatelor.
            </p>
            <div className="pt-2">
              <Link
                href="/virtual-tour"
                className="inline-block px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-medium rounded-sm uppercase tracking-wider text-xs transition-colors"
              >
                Pășește în Turul Virtual
              </Link>
            </div>
          </div>

          <div className="w-full aspect-video bg-stone-800 border border-amber-500/30 p-2 rounded-sm flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full border border-amber-500 bg-stone-900 flex items-center justify-center text-amber-500 text-lg mb-3">
              📐
            </div>
            <span className="text-xs tracking-widest text-stone-400 uppercase">
              Previzualizare Tur 3D
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}