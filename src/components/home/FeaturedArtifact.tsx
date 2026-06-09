"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FeaturedArtifact() {
  return (
    <section className="py-24 bg-stone-950 text-stone-100 relative overflow-hidden border-t border-b border-stone-800">
      {/* Linii decorative de fundal */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-amber-500" />
        <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-amber-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* IMAGINEA / CASETA VIZUALĂ */}
          <div className="lg:col-span-5 relative">
            {/* Caseta simbolică a exponatului */}
            <div className="w-full aspect-[3/4] bg-stone-900 border border-amber-500/30 p-4 flex flex-col justify-between relative group overflow-hidden shadow-2xl">
              {/* Colțuri decorative tradiționale */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-500 z-20" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-500 z-20" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-500 z-20" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-500 z-20" />
              
              <div className="flex justify-between items-center text-xs tracking-widest text-amber-500 uppercase font-sans z-20 bg-stone-900/80 px-2 py-0.5 rounded-sm backdrop-blur-xs">
                <span>Tezaur Local</span>
                <span>Sec. XIX</span>
              </div>

              {/* Container Imagine Reală */}
              <div className="absolute inset-4 my-auto overflow-hidden rounded-sm bg-stone-950 flex items-center justify-center">
                <img 
                  src="/images/artifacts/artifact.jpg" 
                  alt="Cămeșă Bătrânească cu Pui peste Cot" 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Overlay fin peste imagine pentru stilizare */}
                <div className="absolute inset-0 bg-stone-950/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="text-center font-serif text-xs text-amber-500 tracking-widest uppercase z-20 bg-stone-900/80 mx-auto px-3 py-0.5 rounded-sm backdrop-blur-xs">
                ID: SMG-2026-042
              </div>
            </div>
          </div>

          {/* TEXTUL EXPLICATIV */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs md:text-sm font-bold tracking-widest text-amber-500 uppercase block">
              Exponatul Recomandat
            </span>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
              Cămeșa Bătrânească cu <br />
              <span className="text-amber-500">„Pui” peste Cot</span>
            </h2>
            
            <div className="h-[1px] w-20 bg-amber-500" />
            
            <p className="text-sm md:text-base text-stone-300 leading-relaxed">
              Această piesă rară de port popular reprezintă chintesența măiestriei femeilor din Someș-Guruslău. Cusută integral manual pe pânză de casă din cânepă și bumbac, cămeșa se remarcă prin broderia geometrică densă dispusă transversal peste cot — un element identitar puternic al zonei noastre etnografice.
            </p>
            
            <p className="text-sm md:text-base text-stone-400 leading-relaxed">
              Fiecare motiv ales, de la „crestele” cu roșu purpuriu până la ornamentele discrete cu fir negru, povestește despre statutul social, hărnicia și conexiunea profundă a comunității cu natura înconjurătoare.
            </p>

            <div className="pt-6 grid grid-cols-2 gap-4 border-t border-stone-800">
              <div>
                <h4 className="font-serif text-sm font-bold text-amber-500">Tehnică</h4>
                <p className="text-xs text-stone-400 mt-1">Cusătură pe fir, încreț, cheițe manuale</p>
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-amber-500">Proveniență</h4>
                <p className="text-xs text-stone-400 mt-1">Vatra satului Someș-Guruslău</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/gallery/camesa-somes"
                className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-amber-500 hover:text-stone-100 transition-colors group"
              >
                Explorează detaliile în macro-fotografie
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}