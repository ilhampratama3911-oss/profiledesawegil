import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  PlusCircle, 
  X,
  Store,
  Sparkles,
  Award,
  UtensilsCrossed,
  Sprout,
  Briefcase,
  FileCheck2,
  ChevronRight,
  Info,
  CheckCircle2,
  RotateCcw
} from 'lucide-react';
import { INITIAL_UMKM_LIST, PROVEN_UMKM_PILLARS, VILLAGE_INFO } from '../data/villageData';
import { UmkmItem, UmkmCategory, DusunName } from '../types';

export const UmkmSection: React.FC = () => {
  // Use v2 key to immediately load the verified list
  const [umkmList, setUmkmList] = useState<UmkmItem[]>(() => {
    const saved = localStorage.getItem('wegil_umkm_list_v2');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_UMKM_LIST;
      }
    }
    return INITIAL_UMKM_LIST;
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedDusun, setSelectedDusun] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeUmkmModal, setActiveUmkmModal] = useState<UmkmItem | null>(null);
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);

  // Registration Form State
  const [regName, setRegName] = useState('');
  const [regCategory, setRegCategory] = useState<UmkmCategory>('Kuliner & Makanan');
  const [regOwner, setRegOwner] = useState('');
  const [regDescription, setRegDescription] = useState('');
  const [regAddress, setRegAddress] = useState('');
  const [regDusun, setRegDusun] = useState<DusunName>('Dusun Wegil');
  const [regProductName, setRegProductName] = useState('');
  const [regImage, setRegImage] = useState('');

  // Persist UMKM list changes
  useEffect(() => {
    try {
      localStorage.setItem('wegil_umkm_list_v2', JSON.stringify(umkmList));
    } catch (e) {
      console.warn('LocalStorage quota reached when saving UMKM list:', e);
    }
  }, [umkmList]);

  const categories: string[] = [
    'Semua',
    'Kuliner & Makanan',
    'Perdagangan & Warung',
    'Pertanian Basis UMKM',
    'Usaha Perdagangan & Jasa'
  ];

  // Filter UMKM items
  const filteredUmkm = umkmList.filter((item) => {
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesDusun = selectedDusun === 'Semua' || item.dusun === selectedDusun;
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesDusun && matchesSearch;
  });

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName || !regOwner) {
      alert('Mohon lengkapi Nama Usaha dan Nama Pemilik/Pengelola.');
      return;
    }

    const newUmkm: UmkmItem = {
      id: `umkm-${Date.now()}`,
      name: regName,
      category: regCategory,
      owner: regOwner,
      description: regDescription || 'Usaha UMKM binaan warga Desa Wegil.',
      address: regAddress || `Desa Wegil, ${regDusun}`,
      dusun: regDusun,
      whatsapp: '',
      rating: 5.0,
      reviewCount: 1,
      priceRange: '',
      products: [
        {
          name: regProductName || 'Produk Unggulan',
          price: 0,
          unit: 'Tersedia'
        }
      ],
      image: regImage || 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80',
      isVerified: true,
      establishedYear: new Date().getFullYear(),
      tags: [regCategory, 'Warga Wegil']
    };

    setUmkmList([newUmkm, ...umkmList]);
    setShowRegisterModal(false);
    alert(`Selamat! Usaha "${regName}" berhasil didaftarkan di Katalog Desa Wegil.`);

    // Reset Form
    setRegName('');
    setRegOwner('');
    setRegDescription('');
    setRegAddress('');
    setRegProductName('');
    setRegImage('');
  };

  const getPillarIcon = (number: number) => {
    switch (number) {
      case 1:
        return <UtensilsCrossed className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 2:
        return <Store className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 3:
        return <Sprout className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 4:
        return <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      default:
        return <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  const getPillarColorClasses = (number: number) => {
    switch (number) {
      case 1:
        return {
          badge: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-300 dark:border-amber-700/50',
          cardBorder: 'border-amber-200 dark:border-amber-800/40 hover:border-amber-400 dark:hover:border-amber-600',
          iconBg: 'bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400'
        };
      case 2:
        return {
          badge: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-300 dark:border-blue-700/50',
          cardBorder: 'border-blue-200 dark:border-blue-800/40 hover:border-blue-400 dark:hover:border-blue-600',
          iconBg: 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
        };
      case 3:
        return {
          badge: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700/50',
          cardBorder: 'border-emerald-200 dark:border-emerald-800/40 hover:border-emerald-400 dark:hover:border-emerald-600',
          iconBg: 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
        };
      case 4:
        return {
          badge: 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border-purple-300 dark:border-purple-700/50',
          cardBorder: 'border-purple-200 dark:border-purple-800/40 hover:border-purple-400 dark:hover:border-purple-600',
          iconBg: 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
        };
      default:
        return {
          badge: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border-slate-300',
          cardBorder: 'border-slate-200 dark:border-slate-800',
          iconBg: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
        };
    }
  };

  const getPillarCount = (category: string) => {
    return umkmList.filter(item => item.category === category).length;
  };

  return (
    <section id="umkm" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-semibold text-xs tracking-wider uppercase mb-3 bg-emerald-50 dark:bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-500/20">
              <FileCheck2 className="w-3.5 h-3.5" /> Bukti Data Riil &amp; Potensi Terverifikasi
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Potensi UMKM Desa Wegil yang Bisa Dibuktikan
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mt-3 text-sm sm:text-base max-w-3xl leading-relaxed">
              Analisis faktual berdasarkan data publik yang tercatat, potensi sektor pertanian seluas 1.200 Ha (700 Ha sawah &amp; 500 Ha tegalan/kebun), serta rekam jejak aktivitas perdagangan dan kewirausahaan masyarakat Desa Wegil.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setShowRegisterModal(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white dark:from-emerald-500 dark:to-teal-500 dark:text-slate-950 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all hover:scale-105"
            >
              <PlusCircle className="w-4 h-4" />
              Daftarkan Usaha Warga
            </button>
          </div>
        </div>

        {/* 4 Proven Pillars Section Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              4 Pilar Bukti Potensi UMKM Desa Wegil
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Rincian telaah objektif berdasarkan data lapangan, dokumen penelitian, dan catatan publik resmi
            </p>
          </div>
          <span className="hidden sm:inline text-xs font-medium text-slate-500 dark:text-slate-400">
            Klik pilar untuk memfilter katalog
          </span>
        </div>

        {/* 4 Proven Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {PROVEN_UMKM_PILLARS.map((pillar) => {
            const colors = getPillarColorClasses(pillar.number);
            const isSelected = selectedCategory === pillar.category;
            const count = getPillarCount(pillar.category);

            return (
              <div 
                key={pillar.number}
                className={`bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border transition-all duration-300 shadow-sm dark:shadow-xl flex flex-col justify-between relative group ${
                  isSelected 
                    ? 'ring-2 ring-emerald-500 border-emerald-500 dark:border-emerald-500 shadow-lg' 
                    : colors.cardBorder
                }`}
              >
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-2xl ${colors.iconBg}`}>
                        {getPillarIcon(pillar.number)}
                      </div>
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase">
                        Pilar 0{pillar.number}
                      </span>
                    </div>

                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${colors.badge}`}>
                      {pillar.dataBadge}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-2 leading-snug">
                    {pillar.number}. {pillar.title}
                  </h4>

                  {/* Exact Evidence Text */}
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    {pillar.evidenceText}
                  </p>

                  {/* Key Points Bullet List */}
                  <div className="bg-slate-50 dark:bg-slate-950/60 rounded-2xl p-4 border border-slate-100 dark:border-slate-800/80 mb-5 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Rangkuman Bukti Faktual:
                    </div>
                    {pillar.keyPoints.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Filter Trigger Button */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Tersedia {count} entitas terdaftar
                  </span>

                  <button
                    onClick={() => {
                      if (selectedCategory === pillar.category) {
                        setSelectedCategory('Semua');
                      } else {
                        setSelectedCategory(pillar.category);
                      }
                      // Smooth scroll down to catalogue
                      const el = document.getElementById('katalog-umkm-view');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950 shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200'
                    }`}
                  >
                    {isSelected ? 'Menampilkan Kategori Ini' : `Eksplor Entitas (${count})`}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Catalog Section Divider & Anchor */}
        <div id="katalog-umkm-view" className="scroll-mt-24 pt-4 border-t border-slate-200 dark:border-slate-800 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                Daftar Usaha &amp; Potensi Riil Desa Wegil
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Menampilkan {filteredUmkm.length} dari total {umkmList.length} entitas usaha dan basis ekonomi terverifikasi
              </p>
            </div>

            {(selectedCategory !== 'Semua' || selectedDusun !== 'Semua' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('Semua');
                  setSelectedDusun('Semua');
                  setSearchQuery('');
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 hover:bg-rose-100 dark:hover:bg-rose-900/60 transition-colors w-fit"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Semua Filter
              </button>
            )}
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 md:p-6 mb-10 shadow-sm dark:shadow-xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari (Bakso Gaul, Ayam Kremes, Falwan, Sawah Padi, Briket)..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Dusun Filter dropdown */}
            <div className="md:col-span-6 flex items-center justify-end gap-3">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:inline">Lokasi Dusun:</span>
              <select
                value={selectedDusun}
                onChange={(e) => setSelectedDusun(e.target.value)}
                className="bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-emerald-500"
              >
                <option value="Semua">Semua Wilayah Dusun</option>
                <option value="Dusun Wegil">Dusun Wegil</option>
                <option value="Dusun Duwan">Dusun Duwan (Duan)</option>
                <option value="Dusun Jepatan">Dusun Jepatan</option>
                <option value="Dusun Kincir">Dusun Kincir</option>
                <option value="Dusun Godongan">Dusun Godongan</option>
                <option value="Dusun Cangkringan">Dusun Cangkringan</option>
              </select>
            </div>

          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Kategori Pilar:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat 
                    ? 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950 shadow-sm' 
                    : 'bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat} {cat !== 'Semua' && `(${getPillarCount(cat)})`}
              </button>
            ))}
          </div>
        </div>

        {/* UMKM Cards Grid */}
        {filteredUmkm.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
            <Store className="w-12 h-12 text-slate-400 dark:text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Data Usaha Tidak Ditemukan</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
              Tidak ada data yang sesuai dengan kriteria pencarian atau kategori ini. Coba kata kunci lain atau daftarkan usaha Anda!
            </p>
            <button
              onClick={() => { setSelectedCategory('Semua'); setSelectedDusun('Semua'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 rounded-xl text-xs font-semibold hover:bg-emerald-100 dark:hover:bg-emerald-500/30"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUmkm.map((item) => (
              <div 
                key={item.id}
                className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/60 dark:hover:border-emerald-500/40 rounded-2xl overflow-hidden shadow-sm dark:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Store Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md text-emerald-400 font-semibold text-[10px] px-2.5 py-1 rounded-lg border border-emerald-500/30">
                    {item.category}
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3 bg-emerald-500 text-slate-950 font-bold text-[10px] px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {item.category === 'Pertanian Basis UMKM' 
                      ? (item.tags.includes('Potensi Inovasi/Riset') ? 'Potensi Inovasi' : 'Potensi Terkuat') 
                      : 'Terverifikasi Data'}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-1 text-slate-200 bg-slate-950/90 px-2 py-0.5 rounded-md font-medium text-[11px]">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      {item.dusun}
                    </span>
                    <span className="flex items-center gap-1 text-amber-400 bg-slate-950/90 px-2 py-0.5 rounded-md font-bold text-[11px]">
                      <Star className="w-3 h-3 fill-amber-400" />
                      {item.rating} ({item.reviewCount})
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                      Pelaku/Sumber: <span className="text-slate-800 dark:text-slate-200">{item.owner}</span>
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tag highlights */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    <button
                      onClick={() => setActiveUmkmModal(item)}
                      className="w-full py-2.5 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 dark:bg-slate-800 dark:hover:bg-slate-700/80 dark:text-slate-200 dark:hover:text-emerald-400 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      <Info className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      Lihat Rincian &amp; Bukti Faktual
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* UMKM Detail Modal */}
      {activeUmkmModal && (
        <div className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full text-slate-900 dark:text-slate-100 overflow-hidden shadow-2xl my-8 animate-in fade-in zoom-in duration-200">
            {/* Modal Image Header */}
            <div className="relative h-60 w-full overflow-hidden bg-slate-950">
              <img 
                src={activeUmkmModal.image} 
                alt={activeUmkmModal.name}
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              <button 
                onClick={() => setActiveUmkmModal(null)}
                className="absolute top-4 right-4 bg-slate-900/80 hover:bg-slate-800 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="bg-emerald-500 text-slate-950 font-bold text-xs px-2.5 py-1 rounded-md mb-2 inline-block">
                  {activeUmkmModal.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {activeUmkmModal.name}
                </h3>
                <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  {activeUmkmModal.address}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              
              {/* Owner and Verification Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-xs">
                <div>
                  <span className="text-slate-500 dark:text-slate-400">Pengelola / Sumber:</span>
                  <div className="font-bold text-slate-900 dark:text-white text-sm">{activeUmkmModal.owner}</div>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">Status Validasi:</span>
                  <div className="font-semibold text-emerald-600 dark:text-emerald-400">Tercatat di Portal Resmi Desa Wegil</div>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">Wilayah / Dusun:</span>
                  <div className="font-bold text-slate-800 dark:text-slate-200">{activeUmkmModal.dusun}</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-2">Penjelasan Faktual &amp; Deskripsi:</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeUmkmModal.description}
                </p>
              </div>

              {/* Tag Badges */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Label &amp; Karakteristik:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeUmkmModal.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 px-3 py-1 rounded-xl">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Products or Key Offerings without price or WhatsApp */}
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-3">
                  {activeUmkmModal.category === 'Pertanian Basis UMKM' ? 'Komoditas & Potensi Unggulan:' : 'Daftar Produk / Layanan / Komoditas:'}
                </h4>
                <div className="space-y-2">
                  {activeUmkmModal.products.map((prod, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-xs"
                    >
                      <div className="flex items-center gap-2.5 font-medium text-slate-800 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>{prod.name}</span>
                      </div>
                      {prod.unit && (
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                          {prod.unit}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button: Close only */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end">
                <button
                  onClick={() => setActiveUmkmModal(null)}
                  className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl transition-colors"
                >
                  Tutup Rincian
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Registration Form Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full text-slate-900 dark:text-slate-100 p-6 space-y-4 shadow-2xl my-8 animate-in fade-in zoom-in">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Pendaftaran Usaha &amp; UMKM Warga Desa Wegil
              </h3>
              <button 
                onClick={() => setShowRegisterModal(false)}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Formulir pendataan mandiri bagi pelaku usaha, pedagang, dan petani Desa Wegil untuk dicantumkan ke dalam etalase digital desa.
            </p>

            <form onSubmit={handleRegisterSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Nama Usaha / Toko / Kelompok *</label>
                <input
                  type="text"
                  required
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                  placeholder="Contoh: Warung Berkah / Bakso Wegil / Tani Makmur"
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-slate-900 dark:text-slate-200 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Kategori Usaha</label>
                  <select
                    value={regCategory}
                    onChange={(e) => setRegCategory(e.target.value as UmkmCategory)}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-slate-900 dark:text-slate-200 focus:outline-none"
                  >
                    <option value="Kuliner & Makanan">Kuliner &amp; Makanan</option>
                    <option value="Perdagangan & Warung">Perdagangan &amp; Warung</option>
                    <option value="Pertanian Basis UMKM">Pertanian Basis UMKM</option>
                    <option value="Usaha Perdagangan & Jasa">Usaha Perdagangan &amp; Jasa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Lokasi Dusun</label>
                  <select
                    value={regDusun}
                    onChange={(e) => setRegDusun(e.target.value as DusunName)}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-slate-900 dark:text-slate-200 focus:outline-none"
                  >
                    <option value="Dusun Wegil">Dusun Wegil</option>
                    <option value="Dusun Duwan">Dusun Duwan (Duan)</option>
                    <option value="Dusun Jepatan">Dusun Jepatan</option>
                    <option value="Dusun Kincir">Dusun Kincir</option>
                    <option value="Dusun Godongan">Dusun Godongan</option>
                    <option value="Dusun Cangkringan">Dusun Cangkringan</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Nama Pemilik / Penanggung Jawab *</label>
                <input
                  type="text"
                  required
                  value={regOwner}
                  onChange={(e) => setRegOwner(e.target.value)}
                  placeholder="Contoh: Pak Budi / Kelompok Warga"
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-slate-900 dark:text-slate-200 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Alamat Lengkap / Patokan Lokasi</label>
                <input
                  type="text"
                  value={regAddress}
                  onChange={(e) => setRegAddress(e.target.value)}
                  placeholder="RT/RW, Dukuh, patokan jalan"
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-slate-900 dark:text-slate-200 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Deskripsi Singkat Usaha / Potensi</label>
                <textarea
                  rows={2}
                  value={regDescription}
                  onChange={(e) => setRegDescription(e.target.value)}
                  placeholder="Jelaskan produk, komoditas, atau jasa yang ditawarkan..."
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-slate-900 dark:text-slate-200 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Produk / Komoditas Utama</label>
                <input
                  type="text"
                  value={regProductName}
                  onChange={(e) => setRegProductName(e.target.value)}
                  placeholder="Nama produk / komoditas unggulan"
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-slate-900 dark:text-slate-200 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowRegisterModal(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 rounded-xl font-medium"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 font-bold rounded-xl shadow-sm transition-all"
                >
                  Simpan &amp; Daftarkan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
