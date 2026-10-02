import React from 'react';
import { Building2, MapPin, PhoneCall, Mail, Clock, ArrowUp } from 'lucide-react';
import { VILLAGE_INFO } from '../data/villageData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-slate-900 dark:text-white tracking-tight">
                  DESA WEGIL
                </span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {VILLAGE_INFO.subdistrict}, {VILLAGE_INFO.regency}, {VILLAGE_INFO.province}
                </p>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs max-w-md">
              {VILLAGE_INFO.tagline}. Portal resmi informasi terpadu data kependudukan, transparansi tata kelola, dan etalase promosi UMKM lokal.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-500/20 text-[10px]">
                Kode Pos: {VILLAGE_INFO.postalCode}
              </span>
              <span className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 text-[10px]">
                Provinsi Jawa Tengah
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Pintasan Navigasi</h4>
            <ul className="space-y-2">
              <li><a href="#profil" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Profil &amp; Sejarah Desa</a></li>
              <li><a href="#kependudukan" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Statistik Data Penduduk</a></li>
              <li><a href="#umkm" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Katalog Potensi UMKM</a></li>
              <li><a href="#destinasi" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Wisata &amp; Agrowisata Wegil</a></li>
            </ul>
          </div>

          {/* Col 3: Contacts & Office Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Kontak Balai Desa</h4>
            <div className="space-y-2 text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{VILLAGE_INFO.officeAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/${VILLAGE_INFO.officeWhatsapp}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  {VILLAGE_INFO.officePhone} (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <a 
                  href={`mailto:${VILLAGE_INFO.officeEmail}`} 
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  {VILLAGE_INFO.officeEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>Jam Pelayanan: {VILLAGE_INFO.officeHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 dark:text-slate-500 text-[11px]">
          <p>
            &copy; {new Date().getFullYear()} Pemerintah Desa Wegil, Kecamatan Sukolilo, Kabupaten Pati. Hak Cipta Dilindungi.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-xl transition-all shadow-sm"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
