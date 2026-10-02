import React from 'react';
import { 
  Users, 
  ShoppingBag, 
  Sparkles, 
  ArrowRight, 
  Megaphone, 
  Building, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck,
  Camera
} from 'lucide-react';
import { VILLAGE_INFO, INITIAL_POPULATION_DATA, INITIAL_UMKM_LIST } from '../data/villageData';
import { DEFAULT_VILLAGE_HERO_IMAGE } from '../data/villageHeroImage';

interface HeroSectionProps {
  onOpenAi: () => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAi, onNavigate }) => {
  return (
    <section id="beranda" className="relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden pt-8 pb-16 lg:pb-24 transition-colors">
      {/* Ambient background decoration */}
      <div className="absolute inset-0 opacity-15 dark:opacity-20 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/15 dark:bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badge Ticker */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-2.5 sm:px-4 shadow-md dark:shadow-xl transition-colors">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-medium">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-500/20 dark:text-emerald-300 font-semibold px-2 py-0.5 rounded-md text-xs dark:border-emerald-500/30 flex items-center gap-1">
              <Megaphone className="w-3 h-3" /> PENGUMUMAN
            </span>
            <span className="text-slate-700 dark:text-slate-200 font-normal truncate max-w-[280px] sm:max-w-md md:max-w-xl">
              Portal Resmi Desa Wegil — Informasi Terpadu &amp; Asisten AI Pintar
            </span>
          </div>
          <button 
            onClick={() => onNavigate('profil')}
            className="text-xs text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-semibold flex items-center gap-1 hover:underline ml-auto"
          >
            Lihat Profil <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Hero Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-900/50 dark:text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-full dark:border-emerald-700/50">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Portal Pemerintah Desa Wegil • Sukolilo, Pati</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Selamat Datang di <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">
                Web Profil Desa Wegil
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl">
              {VILLAGE_INFO.description}
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('umkm')}
                className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 dark:shadow-emerald-950/50 transition-all hover:scale-[1.02] text-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                Jelajahi Potensi UMKM
              </button>

              <button
                onClick={() => onNavigate('kependudukan')}
                className="flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-200 dark:border-slate-700 font-semibold px-5 py-3.5 rounded-xl transition-all hover:text-slate-900 dark:hover:text-white text-sm"
              >
                <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Data Kependudukan
              </button>

              <button
                onClick={onOpenAi}
                className="flex items-center gap-2 bg-emerald-100/90 hover:bg-emerald-200/90 text-emerald-900 border border-emerald-300 dark:bg-emerald-950/80 dark:hover:bg-emerald-900 dark:text-emerald-300 dark:border-emerald-800 font-medium px-4 py-3.5 rounded-xl transition-all text-sm"
              >
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 animate-pulse" />
                Tanya Mas Wegil AI
              </button>
            </div>

            {/* Key Value Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Transparansi Informasi Publik</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Data Penduduk Real-time</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Katalog UMKM Terverifikasi</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Banner & Card Overview */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 shadow-xl dark:shadow-2xl p-2 group">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={DEFAULT_VILLAGE_HERO_IMAGE} 
                  alt="Panorama Perbukitan Desa Wegil, Sukolilo, Pati" 
                  className="w-full h-72 sm:h-80 object-cover rounded-2xl brightness-95 dark:brightness-90 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent rounded-2xl pointer-events-none"></div>

                <div className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-md">
                  <Camera className="w-3.5 h-3.5 text-emerald-400" /> Foto Lanskap Desa Wegil
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/90 space-y-2 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> Sukolilo, Pati
                  </span>
                  <span className="text-[10px] text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full font-medium">
                    Wilayah: {VILLAGE_INFO.areaKm2} km²
                  </span>
                </div>
                <p className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  "Kawasan Perbukitan Kendeng, Pertanian Subur &amp; Sentra Batik Tulis Sekar Arum"
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Live Population & Village Statistics Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div 
            onClick={() => onNavigate('kependudukan')}
            className="bg-white hover:bg-emerald-50/40 border border-slate-200 hover:border-emerald-400 shadow-sm dark:bg-slate-900/80 dark:hover:bg-slate-900 dark:border-slate-800 dark:hover:border-emerald-500/50 p-5 rounded-2xl transition-all cursor-pointer group dark:shadow-lg"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold group-hover:underline">Detail &rarr;</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {INITIAL_POPULATION_DATA.totalResidents.toLocaleString('id-ID')}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
              Total Penduduk Jiwa
            </div>
          </div>

          <div 
            onClick={() => onNavigate('kependudukan')}
            className="bg-white hover:bg-teal-50/40 border border-slate-200 hover:border-teal-400 shadow-sm dark:bg-slate-900/80 dark:hover:bg-slate-900 dark:border-slate-800 dark:hover:border-emerald-500/50 p-5 rounded-2xl transition-all cursor-pointer group dark:shadow-lg"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors">
                <Building className="w-6 h-6" />
              </div>
              <span className="text-xs text-teal-600 dark:text-teal-400 font-semibold group-hover:underline">Detail &rarr;</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {INITIAL_POPULATION_DATA.totalFamilies.toLocaleString('id-ID')}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
              Kepala Keluarga (KK)
            </div>
          </div>

          <div 
            onClick={() => onNavigate('umkm')}
            className="bg-white hover:bg-amber-50/40 border border-slate-200 hover:border-amber-400 shadow-sm dark:bg-slate-900/80 dark:hover:bg-slate-900 dark:border-slate-800 dark:hover:border-emerald-500/50 p-5 rounded-2xl transition-all cursor-pointer group dark:shadow-lg"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold group-hover:underline">Katalog &rarr;</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {INITIAL_UMKM_LIST.length}+
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
              UMKM Lokal Terdaftar
            </div>
          </div>

          <div 
            onClick={() => onNavigate('profil')}
            className="bg-white hover:bg-cyan-50/40 border border-slate-200 hover:border-cyan-400 shadow-sm dark:bg-slate-900/80 dark:hover:bg-slate-900 dark:border-slate-800 dark:hover:border-emerald-500/50 p-5 rounded-2xl transition-all cursor-pointer group dark:shadow-lg"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold group-hover:underline">Peta &rarr;</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              6 Dusun
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
              Wilayah RT/RW Kependudukan
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
