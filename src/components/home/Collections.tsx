"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

// Definim cei 3 piloni ai muzeului specificați de tine
const categories = [
  {
    id: "01",
    title: "Costume Populare",
    description: "Cămeși cusute cu migală, catrințe și porturi autentice de pe Valea Someșului, salvate din lăzile de zestre ale bunicilor.",
    icon: "🪡",
  },
  {
    id: "02",
    title: "Obiecte Tradiționale",
    description: "Unelte gospodărești, ceramică și obiecte de lemn care redau fidel ingeniozitatea și traiul zilnic al satului sălăjean.",
    icon: "🪵",
  },
  {
    id: "03",
    title: "Obiceiuri & Tradiții",
    description: "Memoria vie a ritualurilor, jocurilor de sărbători și tradițiilor transmise neschimbate din generație în generație.",
    icon: "🌾",
  },
];

export default function Collections() {
  // Animația pentru containerul părinte (activează animația pe rând pentru copii)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Fiecare card apare la 0.2 secunde după cel dinainte
      },
    },
  };

  // Animația pentru fiecare card în parte (Fade In + Slide Up)
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
     opacity: 1,
        y: 0,
        transition: {
         duration: 0.6,
         ease: "easeOut" as const,
        },
    },
    };

  return (
    <section className="py-24 bg-museum-cream relative overflow-hidden">
      {/* Detaliu decorativ de fundal subtil */}
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-museum-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Antetul secțiunii - Se animă la scroll */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-sans text-xs md:text-sm font-bold tracking-widest text-museum-red uppercase block mb-3">
            Patrimoniu Local
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-museum-dark mb-4">
            Inima Tradiției Sălăjene
          </h2>
          <div className="h-[2px] w-16 bg-museum-gold mx-auto mb-6" />
          <p className="font-sans text-base text-museum-dark/70 leading-relaxed">
            Fiecare colț al muzeului nostru păstrează vie identitatea comunității din Someș-Guruslău. Explorează colecțiile noastre de suflet.
          </p>
        </motion.div>

        {/* Grid-ul de carduri care apar la scroll */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Rulează când elementul e vizibil pe ecran
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              className="bg-white p-8 border border-museum-gold/10 shadow-sm rounded-sm hover:shadow-md hover:border-museum-gold/40 transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl">{category.icon}</span>
                  <span className="font-serif text-sm font-bold text-museum-gold/40 tracking-wider">
                    {category.id}
                  </span>
                </div>
                
                <h3 className="font-serif text-xl font-bold text-museum-dark mb-3 group-hover:text-museum-red transition-colors">
                  {category.title}
                </h3>
                
                <p className="font-sans text-sm text-museum-dark/70 leading-relaxed mb-6">
                  {category.description}
                </p>
              </div>

              <Link
                href={`/collections/${category.id}`}
                className="font-sans text-xs font-semibold uppercase tracking-wider text-museum-red inline-flex items-center gap-1 group-hover:text-museum-gold transition-colors"
              >
                Descoperă Colecția 
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}