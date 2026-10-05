import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CaseStudy from "@/components/CaseStudy";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollUI from "@/components/ScrollUI";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <ScrollUI />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <CaseStudy />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
