import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProfileSection } from './components/ProfileSection';
import { PopulationSection } from './components/PopulationSection';
import { UmkmSection } from './components/UmkmSection';
import { TourismSection } from './components/TourismSection';
import { Footer } from './components/Footer';
import { AiAssistantModal } from './components/AiAssistantModal';
import { Bot, MessageSquareText } from 'lucide-react';

function AppContent() {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['beranda', 'profil', 'kependudukan', 'umkm', 'destinasi'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 transition-colors duration-200">
      
      {/* Navigation Header */}
      <Navbar 
        onOpenAi={() => setIsAiOpen(true)} 
        activeSection={activeSection} 
      />

      {/* Main Page Sections */}
      <main>
        <HeroSection 
          onOpenAi={() => setIsAiOpen(true)} 
          onNavigate={handleNavigate} 
        />

        <ProfileSection />

        <PopulationSection />

        <UmkmSection />

        <TourismSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* AI Assistant Modal Window */}
      <AiAssistantModal 
        isOpen={isAiOpen} 
        onClose={() => setIsAiOpen(false)} 
      />

      {/* Floating Action Button for AI Assistant */}
      <button
        onClick={() => setIsAiOpen(true)}
        className="fixed bottom-6 right-6 z-30 flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold px-4 py-3 rounded-full shadow-2xl shadow-emerald-500/30 transition-all hover:scale-110 group border-2 border-white dark:border-slate-950"
        aria-label="Tanya AI Desa Wegil"
      >
        <div className="relative">
          <Bot className="w-6 h-6 animate-bounce" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-300 ring-2 ring-white dark:ring-slate-950"></span>
        </div>
        <span className="text-xs font-extrabold pr-1 hidden sm:inline">
          Tanya Mas Wegil AI
        </span>
      </button>

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

