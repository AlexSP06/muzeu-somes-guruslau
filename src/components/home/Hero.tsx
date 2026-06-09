"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-museum-dark overflow-hidden pt-20">
      {/* Imagine de fundal */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: "url('/images/hero/museum-hero.jpg')",
        }}
      />
      
      {/* Overlay pentru contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-museum-dark via-museum-dark/20 to-museum-dark/5" />

      {/* Chenar decorativ fin */}
      <div className="absolute top-10 left-10 right-10 bottom-10 border border-museum-gold/10 pointer-events-none hidden md:block" />

      {/* Conținutul Principal Animat */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        
        {/* Subtitlul */}
        <motion.span 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-sans text-xs md:text-sm font-semibold tracking-widest text-museum-gold uppercase mb-4 block"
        >
          Vatra Satului • Obiceiuri • Port Popular Sălăjean
        </motion.span>
        
        {/* Titlul Mare */}
        <motion.h1 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-museum-cream mb-6 leading-tight"
        >
          Muzeul Someș-Guruslău
        </motion.h1>
        
        {/* Descrierea */}
        <motion.p 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="font-sans text-base sm:text-lg md:text-xl text-museum-cream/80 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          O incursiune în memoria vie a unei comunități de pe malul Someșului. Descoperă autenticitatea costumului popular, obiectele gospodărești care au clădit viața satului și obiceiurile lăsate moștenire din generație în generație.
        </motion.p>

        {/* Butoane Acțiune */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/virtual-tour"
            className="w-full sm:w-auto px-8 py-4 bg-museum-red text-museum-cream font-sans font-medium rounded-sm shadow-lg hover:bg-museum-red/90 border border-museum-red hover:border-museum-gold/40 transition-all duration-300 text-center uppercase tracking-wider text-sm"
          >
            Explorează Turul Virtual
          </Link>
          
          <Link
            href="/gallery"
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-museum-cream font-sans font-medium rounded-sm border border-museum-cream/40 hover:border-museum-gold hover:text-museum-gold transition-all duration-300 text-center uppercase tracking-wider text-sm"
          >
            Vezi Colecțiile
          </Link>
        </motion.div>
      </div>

      {/* Indicator Scroll */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center animate-bounce"
      >
        <span className="font-sans text-[10px] text-museum-cream/50 uppercase tracking-widest mb-2">Descoperă</span>
        <svg className="w-5 h-5 text-museum-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}