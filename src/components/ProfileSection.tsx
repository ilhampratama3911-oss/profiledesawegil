import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Compass, 
  Target, 
  Users2, 
  MapPin, 
  Award, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Landmark,
  BookOpen,
  Sparkles,
  Wallet,
  UserCheck,
  Camera
} from 'lucide-react';
import { VILLAGE_INFO, VILLAGE_OFFICERS } from '../data/villageData';
import { DEFAULT_VILLAGE_HERO_IMAGE } from '../data/villageHeroImage';
import { 
  loadAllOfficerPhotos, 
  safeGetLocalStorage
} from '../utils/photoStorage';

export const ProfileSection: React.FC = () => {
  const [activeOfficerModal, setActiveOfficerModal] = useState<typeof VILLAGE_OFFICERS[0] | null>(null);
  const [customPhotos, setCustomPhotos] = useState<Record<string, string>>({});

  // Load photos asynchronously from IndexedDB and safe localStorage on mount
  useEffect(() => {
    loadAllOfficerPhotos().then((photos) => {
      if (photos && Object.keys(photos).length > 0) {
        setCustomPhotos(photos);
      }
    });
  }, []);

  const getStorageKey = (officerId: string) => {
    if (officerId === 'off-1') return 'kades_custom_photo';
    if (officerId === 'off-2') return 'sekdes_custom_photo';
    if (officerId === 'off-3') return 'kaur_custom_photo';
    if (officerId === 'off-4') return 'kaur_perencanaan_custom_photo';
    if (officerId === 'off-5') return 'kaur_pelayanan_custom_photo';
    return null;
  };

  const getOfficerPhoto = (officer: typeof VILLAGE_OFFICERS[0]) => {
    const key = getStorageKey(officer.id);
    if (key && customPhotos[key]) {
      return customPhotos[key];
    }
    if (key) {
      const fromLocal = safeGetLocalStorage(key);
      if (fromLocal) return fromLocal;
    }
    return officer.photo;
  };

  const landmarks = [
    { name: 'Kantor Balai Desa Wegil', address: 'Jl. Raya Wegil - Sukolilo No. 01', type: 'Pusat Pemerintahan', coord: 'Sukolilo, Pati' },
    { name: 'Embung & Taman Hijau Wegil', address: 'Dusun Jepatan', type: 'Wisata & Fasilitas Publik', coord: 'Sukolilo, Pati' },
    { name: 'Sentra Batik Tulis Sekar Arum', address: 'Dusun Wegil RT 02', type: 'Pusat Kerajinan Desa', coord: 'Sukolilo, Pati' },
    { name: 'Pasar Tradisional Wegil', address: 'Dusun Duwan', type: 'Pusat Perdagangan Warga', coord: 'Sukolilo, Pati' }
  ];

  return (
    <section id="profil" className="py-16 lg:py-24 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 text-teal-700 dark:text-teal-400 font-semibold text-xs tracking-wider uppercase mb-2 bg-teal-50 dark:bg-teal-500/10 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-500/20">
            <Compass className="w-3.5 h-3.5" /> Profil Lengkap &amp; Tata Kelola Desa
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Mengenal Lebih Dekat Desa Wegil
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base max-w-2xl">
            Sejarah asal-usul, Visi &amp; Misi pembangunan, jajaran pemerintah desa yang melayani, serta kondisi geografis Desa Wegil, Kecamatan Sukolilo, Kabupaten Pati.
          </p>
        </div>

        {/* Vision, Mission & History Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* History */}
          <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm dark:shadow-xl">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Sejarah Singkat Desa Wegil</h3>
                <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">Kecamatan Sukolilo, Kabupaten Pati</p>
              </div>
            </div>

            {/* Pengertian & Gambaran Umum Desa Wegil */}
            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                {VILLAGE_INFO.description}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {VILLAGE_INFO.descriptionPart2}
              </p>
            </div>

            {/* Asal-usul Nama Berdasarkan Data Toponim BIG */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-500/25 space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5 shrink-0" />
                Asal-Usul Nama Menurut Data Toponim BIG
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                Dalam data toponim <strong>Badan Informasi Geospasial (BIG)</strong>, terdapat keterangan mengenai asal-usul nama Wegil. Cerita yang dicatat menyebutkan bahwa <strong>Sureh Ngrengkut</strong>, tokoh yang dalam cerita setempat dikaitkan dengan terbunuhnya Sunan Prawoto dan istrinya, kemudian melarikan diri setelah tertusuk keris milik Sunan. Dalam perjalanan pelariannya, ia sampai di suatu tempat yang banyak terdapat kerikil. Tempat tersebut kemudian disebut <strong>Wegil</strong>.
              </p>
            </div>

            {/* Visual Landscape Photo of Desa Wegil */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm relative group">
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img 
                  src={DEFAULT_VILLAGE_HERO_IMAGE} 
                  alt="Bentang Alam Perbukitan Desa Wegil, Sukolilo, Pati" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95 dark:brightness-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute top-2.5 right-2.5 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-medium px-2 py-0.5 rounded-full border border-white/20 flex items-center gap-1">
                  <Camera className="w-3 h-3 text-emerald-400" /> Profil Visual Desa
                </div>
                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <span className="text-xs font-bold block drop-shadow-sm">Bentang Alam &amp; Perbukitan Desa Wegil</span>
                  <span className="text-[10px] text-slate-300">Kawasan Perbukitan Kapur Kendeng, Sukolilo, Pati</span>
                </div>
              </div>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-3 text-xs border-t border-slate-200 dark:border-slate-800">
              <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 text-[10px]">Luas Wilayah</span>
                <div className="font-bold text-slate-900 dark:text-white text-sm">{VILLAGE_INFO.areaKm2} km²</div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 text-[10px]">Ketinggian</span>
                <div className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">{VILLAGE_INFO.elevationMeters} m dpl</div>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm dark:shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase mb-2">
                <Target className="w-4 h-4" /> Visi Desa Wegil (2026-2031)
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 dark:bg-emerald-950/50 dark:border-emerald-500/30 dark:text-emerald-200 font-medium text-sm sm:text-base leading-snug italic">
                "{VILLAGE_INFO.tagline}"
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Misi Pembangunan Desa:
              </div>
              <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Mewujudkan tata kelola pemerintahan desa yang transparan, profesional, dan berbasis digital.</span>
                </div>
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Meningkatkan kapasitas UMKM lokal melalui pemasaran online, fasilitas pelatihan, dan permodalan BUMDes.</span>
                </div>
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Pembangunan infrastruktur jalan tani, sarana kesehatan posyandu, dan saluran irigasi yang merata.</span>
                </div>
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Melestarikan seni budaya lokal Batik Tulis Sekar Arum dan potensi wisata Embung Wegil.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Organizational Structure / Government Officers */}
        <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm dark:shadow-xl mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-xs uppercase mb-1">
                <Users2 className="w-4 h-4" /> Pelayanan Aparatur Desa
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Struktur Pemerintahan Desa Wegil</h3>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 font-medium">
              Periode Jabatan 2021 - 2029
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {VILLAGE_OFFICERS.map((officer) => {
              const isKades = officer.id === 'off-1';
              const isSekdes = officer.id === 'off-2';
              const isKaur = officer.id === 'off-3';
              const isPerencanaan = officer.id === 'off-4';
              const isPelayanan = officer.id === 'off-5';
              const displayPhoto = getOfficerPhoto(officer);

              return (
                <div 
                  key={officer.id}
                  onClick={() => setActiveOfficerModal(officer)}
                  className={`border rounded-2xl p-4 transition-all hover:-translate-y-1 cursor-pointer group text-center flex flex-col justify-between relative bg-white dark:bg-slate-900 ${
                    isKades 
                      ? 'border-amber-400 dark:border-amber-500/40 hover:border-amber-500 shadow-sm dark:shadow-lg dark:shadow-amber-500/5' 
                      : isSekdes
                      ? 'border-emerald-300 dark:border-emerald-500/40 hover:border-emerald-500 shadow-sm dark:shadow-lg dark:shadow-emerald-500/5'
                      : isKaur
                      ? 'border-amber-300 dark:border-amber-600/40 hover:border-amber-500 shadow-sm dark:shadow-lg dark:shadow-amber-600/5'
                      : isPerencanaan
                      ? 'border-cyan-300 dark:border-cyan-500/40 hover:border-cyan-500 shadow-sm dark:shadow-lg dark:shadow-cyan-500/5'
                      : isPelayanan
                      ? 'border-teal-300 dark:border-teal-500/40 hover:border-teal-500 shadow-sm dark:shadow-lg dark:shadow-teal-500/5'
                      : 'border-slate-200 dark:border-slate-800 hover:border-emerald-500/50'
                  }`}
                >
                  {isKades && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded-full tracking-wider shadow flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" /> Pimpinan Desa
                    </div>
                  )}
                  {isSekdes && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded-full tracking-wider shadow flex items-center gap-1">
                      <ShieldCheck className="w-2.5 h-2.5" /> Carik Wegil
                    </div>
                  )}
                  {isKaur && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded-full tracking-wider shadow flex items-center gap-1">
                      <Wallet className="w-2.5 h-2.5" /> Kaur Keuangan
                    </div>
                  )}
                  {isPerencanaan && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-cyan-600 text-white text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded-full tracking-wider shadow flex items-center gap-1">
                      <Compass className="w-2.5 h-2.5" /> Kaur Perencanaan
                    </div>
                  )}
                  {isPelayanan && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded-full tracking-wider shadow flex items-center gap-1">
                      <UserCheck className="w-2.5 h-2.5" /> Kaur Pelayanan
                    </div>
                  )}

                  <div>
                    <div className={`w-24 h-24 mx-auto rounded-full overflow-hidden border-2 mb-3 bg-slate-100 dark:bg-slate-950 group-hover:scale-105 transition-transform relative ${
                      isKades 
                        ? 'border-amber-400 shadow-md ring-2 ring-amber-500/20' 
                        : (isSekdes 
                          ? 'border-emerald-500 shadow-md ring-2 ring-emerald-500/20' 
                          : (isKaur 
                            ? 'border-amber-500 shadow-md ring-2 ring-amber-500/20' 
                            : (isPerencanaan 
                              ? 'border-cyan-500 shadow-md ring-2 ring-cyan-500/20' 
                              : (isPelayanan
                                ? 'border-teal-500 shadow-md ring-2 ring-teal-500/20'
                                : 'border-emerald-500/30'))))
                    }`}>
                      <img 
                        src={displayPhoto} 
                        alt={officer.name} 
                        className="w-full h-full object-cover select-none"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h4 className={`font-bold text-xs sm:text-sm transition-colors ${
                      isKades 
                        ? 'text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300' 
                        : isSekdes 
                        ? 'text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300' 
                        : isKaur
                        ? 'text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-200'
                        : isPerencanaan
                        ? 'text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-200'
                        : isPelayanan
                        ? 'text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-200'
                        : 'text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400'
                    }`}>
                      {officer.name}
                    </h4>
                    <p className={`text-[11px] font-semibold mt-1 ${
                      isKades 
                        ? 'text-amber-600 dark:text-amber-400' 
                        : isSekdes 
                        ? 'text-emerald-600 dark:text-emerald-400' 
                        : isKaur 
                        ? 'text-amber-600 dark:text-amber-300' 
                        : isPerencanaan
                        ? 'text-cyan-600 dark:text-cyan-300'
                        : isPelayanan
                        ? 'text-teal-600 dark:text-teal-300'
                        : 'text-emerald-600 dark:text-emerald-400'
                    }`}>
                      {officer.position}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-200 dark:border-slate-800/80 text-[10px] text-slate-500 dark:text-slate-400 flex items-center justify-center">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors inline-flex items-center justify-center gap-1 font-medium">
                      Lihat Tupoksi Aparatur <ChevronRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Location & Map Showcase */}
        <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm dark:shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> Letak Geografis &amp; Peta Desa
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Lokasi Strategis Desa Wegil
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Desa Wegil terletak di Kecamatan Sukolilo, Kabupaten Pati. Berada di persimpangan akses antar desa dengan panorama pegunungan Kapur Utara yang indah.
              </p>

              <div className="space-y-2 pt-2">
                {landmarks.map((mark, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs shadow-sm">
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">{mark.name}</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">{mark.address}</div>
                    </div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-400 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-500/20 font-medium">
                      {mark.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Embedded Visual Map Interactive Simulation */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 relative overflow-hidden shadow-sm">
              <div className="relative h-80 w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <iframe
                  title="Peta Lokasi Desa Wegil Sukolilo Pati"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2!2d110.92!3d-6.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70c88888888888%3A0x8888888888888888!2sDesa%20Wegil%2C%20Sukolilo%2C%20Pati!5e0!3m2!1sid!2sid!4v1680000000000!5m2!1sid!2sid"
                  className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  loading="lazy"
                ></iframe>

                <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-xs shadow-md">
                  <span className="font-bold text-slate-900 dark:text-white block">Balai Desa Wegil</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Jl. Raya Wegil No. 01, Sukolilo, Pati</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Officer Detail Modal */}
      {activeOfficerModal && (
        <div className="fixed inset-0 z-50 bg-black/70 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md w-full p-6 text-slate-900 dark:text-slate-100 space-y-4 shadow-2xl animate-in fade-in zoom-in">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Detail Tugas Perangkat Desa</h3>
              <button onClick={() => setActiveOfficerModal(null)} className="text-slate-400 hover:text-slate-600 dark:hover:text-white font-bold p-1">✕</button>
            </div>

            <div className="text-center">
              <div className="relative inline-block mx-auto mb-3">
                <img 
                  src={getOfficerPhoto(activeOfficerModal)} 
                  alt={activeOfficerModal.name} 
                  className={`w-28 h-28 mx-auto rounded-full object-cover border-2 shadow-lg select-none ${
                    activeOfficerModal.id === 'off-1' 
                      ? 'border-amber-400 ring-4 ring-amber-500/20' 
                      : activeOfficerModal.id === 'off-2'
                      ? 'border-emerald-500 ring-4 ring-emerald-500/20'
                      : activeOfficerModal.id === 'off-3'
                      ? 'border-amber-500 ring-4 ring-amber-500/20'
                      : activeOfficerModal.id === 'off-4'
                      ? 'border-cyan-500 ring-4 ring-cyan-500/20'
                      : activeOfficerModal.id === 'off-5'
                      ? 'border-teal-500 ring-4 ring-teal-500/20'
                      : 'border-emerald-500/50'
                  }`}
                  referrerPolicy="no-referrer"
                />
              </div>

              <h4 className="font-bold text-slate-900 dark:text-white text-lg">{activeOfficerModal.name}</h4>
              <p className={`text-xs font-semibold ${
                activeOfficerModal.id === 'off-1' 
                  ? 'text-amber-600 dark:text-amber-400' 
                  : activeOfficerModal.id === 'off-2'
                  ? 'text-emerald-600 dark:text-emerald-300'
                  : activeOfficerModal.id === 'off-3'
                  ? 'text-amber-600 dark:text-amber-300'
                  : activeOfficerModal.id === 'off-4'
                  ? 'text-cyan-600 dark:text-cyan-300'
                  : activeOfficerModal.id === 'off-5'
                  ? 'text-teal-600 dark:text-teal-300'
                  : 'text-emerald-600 dark:text-emerald-400'
              }`}>
                {activeOfficerModal.position}
              </p>

              <div className="mt-2 flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 text-[11px] rounded-full border border-slate-200 dark:border-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Aparatur Resmi Pemdes Wegil (2021 - 2029)
                </span>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1 text-xs">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Tugas Pokok &amp; Fungsi:</span>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{activeOfficerModal.duties}</p>
            </div>

            <div className="pt-2 flex justify-end items-center">
              <button 
                onClick={() => setActiveOfficerModal(null)}
                className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white dark:text-slate-950 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-xs font-bold rounded-xl transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
