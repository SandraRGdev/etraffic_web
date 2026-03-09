import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Services from './components/Services';
import TargetAudience from './components/TargetAudience';
import Process from './components/Process';
import Results from './components/Results';
import TechStack from './components/TechStack';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#eeeeee] font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <TargetAudience />
        <Process />
        <Results />
        <TechStack />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
