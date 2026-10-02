import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Users, 
  ShoppingBag, 
  Compass, 
  Bot, 
  Menu, 
  X, 
  PhoneCall, 
  Clock, 
  MapPin 
} from 'lucide-react';
import { VILLAGE_INFO } from '../data/villageData';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenAi: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAi, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'beranda', label: 'Beranda', icon: Building2 },
    { id: 'profil', label: 'Profil Desa', icon: Compass },
    { id: 'kependudukan', label: 'Data Penduduk', icon: Users },
    { id: 'umkm', label: 'Potensi UMKM', icon: ShoppingBag },
    { id: 'destinasi', label: 'Wisata', icon: MapPin },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Info Bar */}
      <div className="bg-emerald-800 text-emerald-50 dark:bg-emerald-950 dark:text-emerald-100 text-xs py-2 px-4 border-b border-emerald-700/60 dark:border-emerald-800/40 hidden sm:block transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-emerald-300 dark:text-emerald-400" />
              {VILLAGE_INFO.subdistrict}, {VILLAGE_INFO.regency}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-300 dark:text-emerald-400" />
              Pelayanan: {VILLAGE_INFO.officeHours}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`https://wa.me/${VILLAGE_INFO.officeWhatsapp}`} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-300 dark:text-emerald-400" />
              Kantor Desa: {VILLAGE_INFO.officePhone}
            </a>
            <span className="bg-emerald-900/60 dark:bg-emerald-800/80 text-emerald-100 dark:text-emerald-200 px-2 py-0.5 rounded-full text-[10px] font-medium border border-emerald-600/50 dark:border-emerald-700">
              Sistem Portal Desa V2.5
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 text-slate-900 dark:bg-slate-900/95 dark:backdrop-blur-md dark:shadow-lg dark:border-slate-800 dark:text-white' 
          : 'bg-white/90 backdrop-blur-sm text-slate-900 border-b border-slate-200/80 dark:bg-slate-900 dark:text-white dark:border-slate-800/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Village Identity */}
          <button 
            onClick={() => scrollToSection('beranda')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  DESA WEGIL
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-500/20 dark:text-emerald-300 px-2 py-0.5 rounded-md dark:border-emerald-500/30">
                  Resmi
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                {VILLAGE_INFO.subdistrict}, {VILLAGE_INFO.regency}
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold dark:bg-emerald-600/20 dark:text-emerald-400 dark:border-emerald-500/30' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-slate-400'}`} />
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button (Light/Dark mode) */}
            <ThemeToggle />

            {/* AI Assistant Trigger Button */}
            <button
              onClick={onOpenAi}
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold px-3.5 sm:px-4 py-2.5 rounded-xl shadow-md shadow-emerald-600/20 transition-all hover:shadow-emerald-500/30 hover:-translate-y-0.5 text-xs sm:text-sm"
            >
              <Bot className="w-4 h-4 animate-bounce" />
              <span className="hidden sm:inline">Tanya AI Desa</span>
              <span className="sm:hidden">AI</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:text-white dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl px-4 pt-3 pb-6 space-y-2 transition-colors">
          {/* Mobile Theme Switcher Row */}
          <div className="flex items-center justify-between px-3 py-2 bg-slate-50 dark:bg-slate-950/80 rounded-xl border border-slate-200 dark:border-slate-800 mb-3">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Tema Tampilan
            </span>
            <ThemeToggle variant="segment" />
          </div>

          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold dark:bg-emerald-600/20 dark:text-emerald-400 dark:border-emerald-500/30'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                {link.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <div className="text-xs text-slate-500 dark:text-slate-400 px-4 py-1">
              Jam Operasional: {VILLAGE_INFO.officeHours}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

