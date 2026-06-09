import Hero from "@/components/home/Hero";
import Statistics from "@/components/home/Statistics";
import Collections from "@/components/home/Collections"; 
import FeaturedArtifact from "@/components/home/FeaturedArtifact";
import TraditionsTimeline from "@/components/home/TraditionsTimeline";
import VirtualTourPreview from "@/components/home/VirtualTourPreview";
import EventsPreview from "@/components/home/EventsPreview";
import Footer from "@/components/layout/Footer";     

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-stone-100 text-stone-900 overflow-x-hidden flex flex-col">
      <Hero />
      <Statistics />
      <Collections />
      <FeaturedArtifact />
      <TraditionsTimeline />
      <VirtualTourPreview />
      <EventsPreview />
      <Footer />
    </main>
  );
}