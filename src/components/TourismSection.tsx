import React, { useState } from 'react';
import { 
  MapPin, 
  Compass, 
  X, 
  ExternalLink, 
  Navigation, 
  FileCheck2, 
  CheckCircle2, 
  Info,
  ShieldCheck
} from 'lucide-react';
import { VILLAGE_DESTINATIONS } from '../data/villageData';
import { VillageDestination } from '../types';

export const TourismSection: React.FC = () => {
  const [activeDirectionModal, setActiveDirectionModal] = useState<VillageDestination | null>(null);

  const getEvidenceColorClasses = (badge?: string) => {
    if (badge?.includes('Eksplisit')) {
      return {
        badge: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700/60',
        pill: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/40'
      };
    }
    if (badge?.includes('Penelitian & Data Peta')) {
      return {
        badge: 'bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border-teal-300 dark:border-teal-700/60',
        pill: 'bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300 border-teal-200 dark:border-teal-800/40'
      };
    }
    return {
      badge: 'bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border-blue-300 dark:border-blue-700/60',
      pill: 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border-blue-200 dark:border-blue-800/40'
    };
  };

  return (
    <section id="destinasi" className="py-16 lg:py-24 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 text-cyan-800 dark:text-cyan-300 font-semibold text-xs tracking-wider uppercase mb-3 bg-cyan-50 dark:bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-200 dark:border-cyan-500/20">
            <Compass className="w-3.5 h-3.5" /> Titik Lokasi &amp; Bukti Faktual
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Destinasi Ikonik Desa Wegil
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-3 text-sm sm:text-base max-w-3xl leading-relaxed">
            Rangkuman destinasi dan titik alam Desa Wegil berdasarkan rujukan sumber penelitian ilmiah serta data lokasi peta navigasi publik dengan mengedepankan prinsip keaslian data.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VILLAGE_DESTINATIONS.map((item) => {
            const colors = getEvidenceColorClasses(item.evidenceBadge);

            return (
              <div 
                key={item.id}
                className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/60 dark:hover:border-emerald-500/50 rounded-3xl overflow-hidden shadow-sm dark:shadow-xl transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    
                    {/* Category Pill */}
                    <span className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md text-emerald-400 font-semibold text-[10px] px-2.5 py-1 rounded-lg border border-emerald-500/30">
                      {item.category}
                    </span>

                    {/* Evidence Status Badge */}
                    {item.evidenceBadge && (
                      <span className={`absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-md border ${colors.badge} flex items-center gap-1`}>
                        <FileCheck2 className="w-3 h-3" />
                        {item.evidenceBadge}
                      </span>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1 text-slate-200 font-medium bg-slate-950/90 px-2 py-0.5 rounded-md text-[11px]">
                        <MapPin className="w-3 h-3 text-emerald-400" /> {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-medium mt-1">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Exact User Text Description */}
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Evidence Note Box */}
                    {item.evidenceNote && (
                      <div className="bg-white dark:bg-slate-900/80 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                        <div className="flex items-center gap-1.5 font-bold text-[11px] text-slate-800 dark:text-slate-200">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          Dasar Bukti &amp; Verifikasi:
                        </div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                          {item.evidenceNote}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setActiveDirectionModal(item)}
                    className="w-full py-2.5 bg-white hover:bg-slate-100 text-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-800 transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Info className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    Rincian Bukti &amp; Info Titik Peta
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Direction & Info Modal */}
      {activeDirectionModal && (
        <div className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full text-slate-900 dark:text-slate-100 overflow-hidden shadow-2xl my-8 animate-in fade-in zoom-in">
            <div className="relative h-48 w-full bg-slate-950">
              <img 
                src={activeDirectionModal.image} 
                alt={activeDirectionModal.name}
                className="w-full h-full object-cover brightness-90" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              <button
                onClick={() => setActiveDirectionModal(null)}
                className="absolute top-4 right-4 bg-slate-950/80 text-slate-300 hover:text-white p-2 rounded-full border border-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="bg-emerald-500 text-slate-950 font-bold text-[10px] px-2.5 py-0.5 rounded-md uppercase inline-block mb-1">
                  {activeDirectionModal.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {activeDirectionModal.name}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <div className="space-y-2 bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Lokasi Wilayah:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{activeDirectionModal.location}, Kec. Sukolilo, Kab. Pati</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Status Bukti &amp; Verifikasi Data:</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">{activeDirectionModal.evidenceBadge}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1.5">Penjelasan Faktual:</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-950/60 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800/80">
                  {activeDirectionModal.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveDirectionModal(null)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 font-semibold rounded-xl"
                >
                  Tutup
                </button>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeDirectionModal.name + ' Wegil Sukolilo Pati')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white dark:bg-emerald-500 dark:text-slate-950 font-bold rounded-xl flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <Navigation className="w-4 h-4" /> Buka Titik di Google Maps <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
