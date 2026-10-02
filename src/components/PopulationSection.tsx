import React, { useState } from 'react';
import { 
  Users, 
  PieChart as PieIcon, 
  BarChart3, 
  Briefcase, 
  GraduationCap, 
  HeartHandshake, 
  Search, 
  Filter, 
  FileSpreadsheet, 
  CheckCircle2, 
  MapPin, 
  Building2,
  Download
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Legend 
} from 'recharts';
import { INITIAL_POPULATION_DATA } from '../data/villageData';
import { DusunName } from '../types';
import { useTheme } from '../context/ThemeContext';

const DUSUN_METADATA: Record<string, { rw: string; rtCount: number; characteristic: string }> = {
  'Dusun Wegil': { rw: 'RW 01', rtCount: 7, characteristic: 'Pusat Balai Desa & Kantor Pelayanan' },
  'Dusun Duwan': { rw: 'RW 02', rtCount: 6, characteristic: 'Kawasan Perdagangan & Pasar Desa' },
  'Dusun Jepatan': { rw: 'RW 03', rtCount: 5, characteristic: 'Kawasan Embung & Wisata Hijau' },
  'Dusun Kincir': { rw: 'RW 04', rtCount: 4, characteristic: 'Lumbung Pangan & Pertanian Padi' },
  'Dusun Godongan': { rw: 'RW 05', rtCount: 4, characteristic: 'Sentra Pengrajin & UMKM Desa' },
  'Dusun Cangkringan': { rw: 'RW 05', rtCount: 4, characteristic: 'Kawasan Perkebunan & Hortikultura' },
};

export const PopulationSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [selectedDusun, setSelectedDusun] = useState<string>('Semua');
  const [activeTab, setActiveTab] = useState<'dusun' | 'usia' | 'pekerjaan' | 'pendidikan' | 'agama'>('dusun');
  const [searchDusunQuery, setSearchDusunQuery] = useState('');
  const [showReportModal, setShowReportModal] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Colors for charts
  const COLORS = ['#10b981', '#14b8a6', '#06b6d4', '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7'];

  // Filter dusun data
  const filteredDusunList = INITIAL_POPULATION_DATA.byDusun.filter(d => 
    d.dusun.toLowerCase().includes(searchDusunQuery.toLowerCase())
  );

  const currentDusunStats = selectedDusun === 'Semua' 
    ? INITIAL_POPULATION_DATA 
    : {
        totalResidents: INITIAL_POPULATION_DATA.byDusun.find(d => d.dusun === selectedDusun)?.population || 0,
        totalFamilies: INITIAL_POPULATION_DATA.byDusun.find(d => d.dusun === selectedDusun)?.kk || 0,
      };

  // Usia produktif 15-64 tahun (15-24: 986 + 25-54: 2450 + 55-64: 632 = 4068 jiwa)
  const productiveAgeCount = 4068;
  const productivePercent = ((productiveAgeCount / INITIAL_POPULATION_DATA.totalResidents) * 100).toFixed(1);
  const avgPerKk = (currentDusunStats.totalResidents / (currentDusunStats.totalFamilies || 1)).toFixed(2);

  const handleDownloadCSV = () => {
    const csvRows: string[][] = [
      ['KATEGORI DATA', 'DESKRIPSI / RINCIAN', 'JUMLAH (JIWA/KK)', 'SATUAN / KETERANGAN'],
      ['Pemerintahan', 'Desa Wegil, Kec. Sukolilo, Kab. Pati', 'Jawa Tengah', 'Kode Pos 59172'],
      ['Total Penduduk', 'Penduduk Terdaftar Resmi', INITIAL_POPULATION_DATA.totalResidents.toString(), 'Jiwa'],
      ['Kepala Keluarga', 'Total Kepala Keluarga', INITIAL_POPULATION_DATA.totalFamilies.toString(), 'KK'],
      ['Jenis Kelamin', 'Laki-Laki', INITIAL_POPULATION_DATA.maleCount.toString(), 'Jiwa'],
      ['Jenis Kelamin', 'Perempuan', INITIAL_POPULATION_DATA.femaleCount.toString(), 'Jiwa'],
      ['Wajib KTP / Pemilih', 'Penduduk Usia Memilih', INITIAL_POPULATION_DATA.voterCount.toString(), 'Jiwa'],
      ['Usia Produktif', 'Rentang Usia 15-64 Tahun', productiveAgeCount.toString(), `Jiwa (${productivePercent}%)`],
      [],
      ['WILAYAH DUSUN', 'RW / RT', 'PENDUDUK (JIWA)', 'KEPALA KELUARGA (KK)'],
      ...INITIAL_POPULATION_DATA.byDusun.map(d => [
        d.dusun, 
        `${DUSUN_METADATA[d.dusun]?.rw || '-'} (${DUSUN_METADATA[d.dusun]?.rtCount || 0} RT)`, 
        d.population.toString(), 
        d.kk.toString()
      ]),
      [],
      ['KELOMPOK UMUR', 'RENTANG USIA', 'TOTAL JIWA', 'LAKI-LAKI', 'PEREMPUAN'],
      ...INITIAL_POPULATION_DATA.byAgeGroup.map(a => [
        'Kelompok Usia', 
        a.group, 
        a.count.toString(), 
        a.male.toString(), 
        a.female.toString()
      ]),
      [],
      ['PENDIDIKAN', 'JENJANG PENDIDIKAN', 'JUMLAH WARGA (JIWA)'],
      ...INITIAL_POPULATION_DATA.byEducation.map(e => ['Jenjang Pendidikan', e.level, e.count.toString()]),
      [],
      ['PEKERJAAN', 'MATA PENCAHARIAN', 'JUMLAH WARGA (JIWA)'],
      ...INITIAL_POPULATION_DATA.byOccupation.map(o => ['Mata Pencaharian', o.job, o.count.toString()]),
      [],
      ['SUMBER DATA', 'Badan Pusat Statistik (BPS) Kab. Pati (Kecamatan Sukolilo Dalam Angka) & Disdukcapil Pati']
    ];

    const csvString = '\uFEFF' + csvRows.map(row => row.map(c => `"${(c || '').replace(/"/g, '""')}"`).join(',')).join('\r\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Data_Kependudukan_Resmi_Desa_Wegil_2026.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section id="kependudukan" className="py-16 lg:py-24 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <div className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-semibold text-xs tracking-wider uppercase bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/20">
                <Users className="w-3.5 h-3.5" /> Portal Data Kependudukan Resmi
              </div>
              <span className="text-[11px] text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-slate-700 font-medium">
                BPS Pati &amp; Disdukcapil
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Demografi &amp; Statistik Warga Desa Wegil
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base max-w-2xl leading-relaxed">
              Data terpadu dan valid berdasarkan publikasi Badan Pusat Statistik (BPS) Kabupaten Pati serta pencatatan kependudukan resmi wilayah Desa Wegil, Kecamatan Sukolilo.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              onClick={() => setShowReportModal(true)}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-sm transition-all"
            >
              <FileSpreadsheet className="w-4 h-4" />
              Lihat Ringkasan Resmi
            </button>
            <button
              onClick={handleDownloadCSV}
              className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 dark:border-slate-700 font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all"
            >
              <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Unduh CSV Data
            </button>
          </div>
        </div>

        {/* Download success toast indicator */}
        {downloadSuccess && (
          <div className="mb-6 p-3 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/50 rounded-xl text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>File data kependudukan resmi <strong>Data_Kependudukan_Resmi_Desa_Wegil_2026.csv</strong> berhasil diunduh ke perangkat Anda.</span>
          </div>
        )}

        {/* Dusun Filter Bar */}
        <div className="bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 mb-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <Filter className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Filter Berdasarkan Wilayah Dusun:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedDusun('Semua')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedDusun === 'Semua' 
                    ? 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950 font-bold shadow-sm' 
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 dark:border-transparent dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                Semua Dusun (Desa Wegil)
              </button>
              {INITIAL_POPULATION_DATA.byDusun.map(d => (
                <button
                  key={d.dusun}
                  onClick={() => setSelectedDusun(d.dusun)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedDusun === d.dusun 
                      ? 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950 font-bold shadow-sm' 
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 dark:border-transparent dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                  }`}
                >
                  {d.dusun}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Top Demographics Key Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          <div className="bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm dark:shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Total Penduduk</span>
              <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Users className="w-5 h-5" />
              </span>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {currentDusunStats.totalResidents.toLocaleString('id-ID')}
            </div>
            <div className="text-xs text-emerald-700 dark:text-emerald-400 mt-2 font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {selectedDusun === 'Semua' ? '5.924 Jiwa Resmi BPS/Disdukcapil' : `Cakupan ${selectedDusun}`}
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm dark:shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Kepala Keluarga (KK)</span>
              <span className="p-2 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                <Building2 className="w-5 h-5" />
              </span>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {currentDusunStats.totalFamilies.toLocaleString('id-ID')}
            </div>
            <div className="text-xs text-teal-700 dark:text-teal-400 mt-2 font-medium">
              Rata-rata {avgPerKk} Jiwa / KK
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm dark:shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Rasio Jenis Kelamin</span>
              <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                <PieIcon className="w-5 h-5" />
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-blue-400">
                {INITIAL_POPULATION_DATA.maleCount.toLocaleString('id-ID')} L
              </span>
              <span className="text-slate-500">/</span>
              <span className="text-2xl font-extrabold text-pink-400">
                {INITIAL_POPULATION_DATA.femaleCount.toLocaleString('id-ID')} P
              </span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden flex">
              <div 
                className="bg-blue-500 h-full" 
                style={{ width: `${(INITIAL_POPULATION_DATA.maleCount / INITIAL_POPULATION_DATA.totalResidents) * 100}%` }}
              ></div>
              <div 
                className="bg-pink-500 h-full" 
                style={{ width: `${(INITIAL_POPULATION_DATA.femaleCount / INITIAL_POPULATION_DATA.totalResidents) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm dark:shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Usia Produktif (15-64 Thn)</span>
              <span className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <Briefcase className="w-5 h-5" />
              </span>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {productiveAgeCount.toLocaleString('id-ID')} <span className="text-sm font-normal text-slate-500 dark:text-slate-400">Jiwa</span>
            </div>
            <div className="text-xs text-amber-600 dark:text-amber-400 mt-2 font-medium">
              {productivePercent}% Dari Total Penduduk
            </div>
          </div>
        </div>

        {/* Interactive Chart Tabs */}
        <div className="bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm dark:shadow-xl mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Grafik Interaktif Data Kependudukan
            </h3>

            {/* Category Navigation Tabs */}
            <div className="flex flex-wrap gap-1 bg-slate-200/80 dark:bg-slate-900 p-1 rounded-xl border border-slate-300 dark:border-slate-800 text-xs">
              <button
                onClick={() => setActiveTab('dusun')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === 'dusun' ? 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950 font-bold shadow-sm' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                Wilayah Dusun
              </button>
              <button
                onClick={() => setActiveTab('usia')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === 'usia' ? 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950 font-bold shadow-sm' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                Kelompok Umur
              </button>
              <button
                onClick={() => setActiveTab('pekerjaan')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === 'pekerjaan' ? 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950 font-bold shadow-sm' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                Pekerjaan
              </button>
              <button
                onClick={() => setActiveTab('pendidikan')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === 'pendidikan' ? 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950 font-bold shadow-sm' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                Pendidikan
              </button>
              <button
                onClick={() => setActiveTab('agama')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === 'agama' ? 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950 font-bold shadow-sm' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                Agama &amp; Gol. Darah
              </button>
            </div>
          </div>

          {/* Tab 1: Dusun Chart */}
          {activeTab === 'dusun' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Jumlah penduduk dan kepala keluarga (KK) tersebar di 6 Dusun wilayah Desa Wegil:
              </p>
              <div className="h-80 w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={INITIAL_POPULATION_DATA.byDusun} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#334155" : "#e2e8f0"} />
                    <XAxis dataKey="dusun" stroke={isDark ? "#94a3b8" : "#64748b"} tick={{ fontSize: 11 }} />
                    <YAxis stroke={isDark ? "#94a3b8" : "#64748b"} tick={{ fontSize: 11 }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: isDark ? '#0f172a' : '#ffffff', 
                        borderColor: isDark ? '#334155' : '#e2e8f0', 
                        borderRadius: '12px', 
                        color: isDark ? '#fff' : '#0f172a',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                    <Bar dataKey="population" name="Total Penduduk (Jiwa)" fill="#10b981" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="kk" name="Kepala Keluarga (KK)" fill="#06b6d4" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Tab 2: Age Pyramid */}
          {activeTab === 'usia' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Struktur kelompok umur warga Desa Wegil laki-laki vs perempuan:
              </p>
              <div className="h-80 w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={INITIAL_POPULATION_DATA.byAgeGroup} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#334155" : "#e2e8f0"} />
                    <XAxis dataKey="group" stroke={isDark ? "#94a3b8" : "#64748b"} tick={{ fontSize: 10 }} />
                    <YAxis stroke={isDark ? "#94a3b8" : "#64748b"} tick={{ fontSize: 11 }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: isDark ? '#0f172a' : '#ffffff', 
                        borderColor: isDark ? '#334155' : '#e2e8f0', 
                        borderRadius: '12px', 
                        color: isDark ? '#fff' : '#0f172a',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: 12, paddingTop: 10 }} />
                    <Bar dataKey="male" name="Laki-Laki" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="female" name="Perempuan" fill="#ec4899" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Tab 3: Occupation */}
          {activeTab === 'pekerjaan' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={INITIAL_POPULATION_DATA.byOccupation}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={4}
                      dataKey="count"
                      nameKey="job"
                      label={({ job, percent }) => `${job} (${(percent * 100).toFixed(0)}%)`}
                    >
                      {INITIAL_POPULATION_DATA.byOccupation.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: isDark ? '#0f172a' : '#ffffff', 
                        borderColor: isDark ? '#334155' : '#e2e8f0', 
                        borderRadius: '12px', 
                        color: isDark ? '#fff' : '#0f172a',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="md:col-span-5 space-y-2 text-xs">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-3">Rincian Mata Pencaharian:</h4>
                {INITIAL_POPULATION_DATA.byOccupation.map((item, idx) => (
                  <div key={item.job} className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: COLORS[idx % COLORS.length] }}></span>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{item.job}</span>
                    </div>
                    <span className="font-bold text-slate-900 dark:text-white">{item.count} orang</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Education */}
          {activeTab === 'pendidikan' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Tingkat jenjang pendidikan terakhir warga terdata Desa Wegil:
              </p>
              <div className="h-80 w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={INITIAL_POPULATION_DATA.byEducation} layout="vertical" margin={{ top: 10, right: 30, left: 40, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#334155" : "#e2e8f0"} />
                    <XAxis type="number" stroke={isDark ? "#94a3b8" : "#64748b"} tick={{ fontSize: 11 }} />
                    <YAxis dataKey="level" type="category" stroke={isDark ? "#94a3b8" : "#64748b"} tick={{ fontSize: 11 }} width={120} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: isDark ? '#0f172a' : '#ffffff', 
                        borderColor: isDark ? '#334155' : '#e2e8f0', 
                        borderRadius: '12px', 
                        color: isDark ? '#fff' : '#0f172a',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                    <Bar dataKey="count" name="Jumlah Warga" fill="#14b8a6" radius={[0, 6, 6, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Tab 5: Religion & Blood Type */}
          {activeTab === 'agama' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Agama / Kepercayaan
                </h4>
                {INITIAL_POPULATION_DATA.byReligion.map(r => (
                  <div key={r.religion} className="flex justify-between items-center text-xs p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-700 dark:text-slate-300">{r.religion}</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{r.count} Jiwa</span>
                  </div>
                ))}
              </div>

              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  Golongan Darah Warga
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {INITIAL_POPULATION_DATA.byBloodType.map(b => (
                    <div key={b.type} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center">
                      <div className="text-xs text-slate-500 dark:text-slate-400">{b.type}</div>
                      <div className="text-lg font-bold text-cyan-600 dark:text-cyan-400 mt-1">{b.count}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Dusun Directory Search Grid */}
        <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm dark:shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Daftar Wilayah Dusun &amp; RT/RW Desa Wegil
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Pilih dusun untuk melihat rincian jumlah warga dan kepala keluarga
              </p>
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchDusunQuery}
                onChange={(e) => setSearchDusunQuery(e.target.value)}
                placeholder="Cari nama dusun..."
                className="pl-9 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-emerald-500 w-full sm:w-60"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDusunList.map((item) => {
              const meta = DUSUN_METADATA[item.dusun];
              return (
                <div 
                  key={item.dusun}
                  onClick={() => setSelectedDusun(item.dusun)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    selectedDusun === item.dusun 
                      ? 'bg-emerald-50 border-emerald-500 shadow-md dark:bg-emerald-950/60 dark:border-emerald-500/80 dark:shadow-emerald-950/50' 
                      : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.dusun}</h4>
                    <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-md font-semibold border border-slate-200 dark:border-transparent">
                      {meta?.rw || 'RW'} ({meta?.rtCount || 0} RT)
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3 truncate">
                    {meta?.characteristic || 'Kawasan Desa Wegil'}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-50 dark:bg-slate-950 p-2 rounded-lg border border-slate-200 dark:border-transparent">
                      <span className="text-slate-500 dark:text-slate-400 text-[10px]">Penduduk</span>
                      <div className="font-bold text-slate-900 dark:text-white text-sm">{item.population.toLocaleString('id-ID')} Jiwa</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-950 p-2 rounded-lg border border-slate-200 dark:border-transparent">
                      <span className="text-slate-500 dark:text-slate-400 text-[10px]">Kepala Keluarga</span>
                      <div className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">{item.kk.toLocaleString('id-ID')} KK</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Downloadable Official Demographic Report Modal */}
      {showReportModal && (
        <div className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 text-slate-900 dark:text-slate-100 space-y-4 shadow-2xl animate-in fade-in zoom-in">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  Ringkasan Resmi Kependudukan Desa Wegil
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Kecamatan Sukolilo, Kabupaten Pati, Jawa Tengah</p>
              </div>
              <button 
                onClick={() => setShowReportModal(false)}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-emerald-700 dark:text-emerald-400 text-sm">
                  Rekapitulasi Data Resmi:
                </p>
                <span className="text-[10px] bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/20 font-medium">
                  Valid BPS &amp; Disdukcapil
                </span>
              </div>
              <ul className="space-y-2 list-disc pl-4 leading-relaxed">
                <li>Total Penduduk Terdaftar: <strong>{INITIAL_POPULATION_DATA.totalResidents.toLocaleString('id-ID')} Jiwa</strong> ({INITIAL_POPULATION_DATA.maleCount.toLocaleString('id-ID')} Laki-laki / {INITIAL_POPULATION_DATA.femaleCount.toLocaleString('id-ID')} Perempuan)</li>
                <li>Jumlah Kepala Keluarga: <strong>{INITIAL_POPULATION_DATA.totalFamilies.toLocaleString('id-ID')} KK</strong> (Rata-rata {avgPerKk} Jiwa/KK)</li>
                <li>Wilayah Administrasi: <strong>6 Dusun</strong>, <strong>5 RW</strong>, <strong>30 RT</strong> (Luas Wilayah 14,02 km²)</li>
                <li>Usia Produktif (15-64 Tahun): <strong>{productiveAgeCount.toLocaleString('id-ID')} Jiwa</strong> ({productivePercent}% dari total penduduk)</li>
                <li>Penduduk Wajib KTP / Pemilih: <strong>{INITIAL_POPULATION_DATA.voterCount.toLocaleString('id-ID')} Jiwa</strong></li>
                <li>Mata Pencaharian Utama: <strong>Petani / Pemilik Lahan</strong> (1.684 Jiwa) &amp; <strong>Buruh Tani</strong> (1.120 Jiwa)</li>
                <li>Pendidikan Dominan: Tamat SD (1.745 Jiwa), SMP (1.488 Jiwa), SMA/SMK (1.345 Jiwa)</li>
              </ul>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 leading-normal">
              <span className="font-semibold text-slate-800 dark:text-slate-300">Dasar Rujukan Data:</span> Publikasi <em>Kecamatan Sukolilo Dalam Angka</em> (Badan Pusat Statistik Kabupaten Pati) dan Rekapitulasi Data Kependudukan Terpadu Disdukcapil Kabupaten Pati.
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowReportModal(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 text-xs font-semibold rounded-xl transition-all"
              >
                Tutup
              </button>
              <button
                onClick={() => {
                  handleDownloadCSV();
                  setShowReportModal(false);
                }}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-sm transition-all"
              >
                <Download className="w-4 h-4" />
                Unduh Rekap CSV Lengkap
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
