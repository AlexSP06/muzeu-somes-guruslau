"use client";
import Link from "next/link";

const events = [
  {
    title: "Șezătoare de Sânziene",
    date: "23 Iunie",
    type: "Atelier Practic",
    desc: "Împletim coronițe, povestim despre simbolistica florilor de leac de pe malul Someșului și coasem motive tradiționale de vară.",
  },
  {
    title: "Cuvântul Bătrânilor",
    date: "12 Iulie",
    type: "Seară Culturală",
    desc: "O întâlnire de suflet cu seniorii satului Someș-Guruslău, care vor depăna amintiri și istorii nescrie din vremurile de demult.",
  }
];

export default function EventsPreview() {
  return (
    <section className="py-20 bg-stone-100 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-red-700 uppercase block mb-1">
              Comunitate & Viață
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold">
              Evenimente și Șezători Viitoare
            </h2>
          </div>
          <Link 
            href="/events" 
            className="text-xs font-semibold uppercase tracking-wider text-red-700 hover:text-amber-600 transition-colors"
          >
            Vezi calendarul complet →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div 
              key={index}
              className="bg-white p-6 border border-stone-200 rounded-sm shadow-sm"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider rounded">
                  {event.type}
                </span>
                <span className="text-xs font-bold text-red-700 font-serif">
                  {event.date}
                </span>
              </div>
              <h3 className="text-lg font-serif font-bold mb-2">
                {event.title}
              </h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                {event.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}