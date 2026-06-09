 "use client";

import { motion } from "framer-motion";
import Link from "next/link";

const traditions = [
  {
    slug: "colindul-de-fete",
    title: "Colindul de Fete pe Someș",
    period: "Iarnă / Crăciun",
    text: "Un obicei arhaic, unic pe Valea Someșului, în care cetele de feciori colindă exclusiv casele cu fete de măritat. Ritualul implică portul celor mai mândre haine de sărbătoare și jocul tradițional în tinda casei.",
    align: "left",
  },
  {
    slug: "masuratul-oilor",
    title: "Măsuratul Oilor (Sâmbra)",
    period: "Primăvară / Sf. Gheorghe",
    text: "Sărbătoarea pastorală care marchează urcatul oilor la munte. Este un moment de maximă importanță pentru comunitate, marcat de ritualuri de protecție a turmelor, muzică la fluier și prepararea primului caș.",
    align: "right",
  },
  {
    slug: "sezatoarea-de-post",
    title: "Șezătoarea de Post",
    period: "Toamnă / Câșlegi",
    text: "Locul unde se transmiteau neschimbate istoriile satului. Femeile și fetele se adunau pentru a toarce, a coase cămeși și a descânta, totul sub acompaniamentul cântecelor bătrânești și al glumelor feciorilor.",
    align: "left",
  },
];

export default function TraditionsTimeline() {
  return (
    <section className="py-24 bg-museum-cream relative overflow-hidden">
      {/* Detalii geometrice de fundal discrete */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full border-l-2 border-r-2 border-dashed border-museum-dark" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Antet Secțiune */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-sans text-xs md:text-sm font-bold tracking-widest text-museum-red uppercase block mb-3">
            Memoria Timpului
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-museum-dark mb-4">
            Ritmul Vieții și Obiceiurile Satului
          </h2>
          <div className="h-[2px] w-16 bg-museum-gold mx-auto" />
        </motion.div>

        {/* Fluxul de Obiceiuri (Timeline) */}
        <div className="space-y-16 relative">
          
          {/* Linia centrală decorativă pe desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-museum-gold/20 transform md:-translate-x-1/2 hidden sm:block" />

          {traditions.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center ${
                item.align === "right" ? "md:flex-row-reverse" : ""
              } relative`}
            >
              {/* Punctul de ancorare pe linie */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-museum-red rounded-full transform md:-translate-x-1/2 border-2 border-museum-cream z-20 hidden sm:block" />

              {/* Conținutul animat la scroll */}
              <motion.div 
                className={`w-full md:w-1/2 ${
                  item.align === "left" ? "md:pr-12" : "md:pl-12"
                } pl-10 md:pl-0`}
                initial={{ opacity: 0, x: item.align === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div className="bg-white p-8 border border-museum-gold/10 shadow-sm hover:shadow-md transition-all duration-300 rounded-sm relative group">
                  {/* Indicator Perioadă / Sezon */}
                  <span className="font-sans text-[10px] font-bold tracking-widest text-museum-gold uppercase block mb-2">
                    {item.period}
                  </span>
                  
                  <h3 className="font-serif text-xl font-bold text-museum-dark mb-3 group-hover:text-museum-red transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-museum-dark/70 leading-relaxed mb-4">
                    {item.text}
                  </p>

                  <Link
                    href={`/traditions/${item.slug}`}
                    className="font-sans text-xs font-semibold uppercase tracking-wider text-museum-red hover:text-museum-gold transition-colors inline-flex items-center gap-1"
                  >
                    Citește povestea completă <span>→</span>
                  </Link>
                </div>
              </motion.div>

              {/* Spațiu gol pe desktop pentru a menține structura asimetrică */}
              <div className="w-full md:w-1/2 hidden md:block" />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}