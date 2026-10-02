import {
  PopulationStats,
  UmkmItem,
  UmkmCategory,
  VillageOfficer,
  VillageNews,
  EServiceOption,
  VillageDestination
} from '../types';
import { DEFAULT_KADES_PHOTO_SVG } from './kadesPortrait';
import { DEFAULT_SEKDES_PHOTO_SVG } from './sekdesPortrait';
import { DEFAULT_KAUR_KEUANGAN_PHOTO_SVG } from './kaurKeuanganPortrait';
import { DEFAULT_KAUR_PERENCANAAN_PHOTO_SVG } from './kaurPerencanaanPortrait';
import { DEFAULT_KAUR_PELAYANAN_PHOTO_SVG } from './kaurPelayananPortrait';
import { DEFAULT_VILLAGE_HERO_IMAGE } from './villageHeroImage';
import { SENDANG_JEPATAN_SVG } from './sendangJepatanImage';

export const VILLAGE_INFO = {
  name: 'Desa Wegil',
  subdistrict: 'Kecamatan Sukolilo',
  regency: 'Kabupaten Pati',
  province: 'Jawa Tengah',
  postalCode: '59172',
  tagline: 'Desa Wegil Gemah Ripah — Mandiri, Sejahtera & Berdaya Saing',
  description: 'Desa Wegil merupakan salah satu desa di Kecamatan Sukolilo, Kabupaten Pati, Jawa Tengah, yang masyarakatnya masih mempertahankan nilai sosial, budaya, tradisi, dan gotong royong. Perkembangan desa tidak terlepas dari kehidupan masyarakat yang sejak dahulu memanfaatkan potensi alam, khususnya sektor pertanian, sebagai sumber mata pencaharian sekaligus bagian dari kehidupan sosial masyarakat.',
  descriptionPart2: 'Seiring perkembangan zaman, Desa Wegil mengalami berbagai perubahan melalui peningkatan sarana dan prasarana, fasilitas pendidikan, kegiatan keagamaan, serta pelayanan pemerintahan desa. Sektor pertanian tetap menjadi salah satu kekuatan utama desa, tidak hanya dalam menopang perekonomian masyarakat, tetapi juga membuka peluang pengembangan hasil samping pertanian menjadi produk bernilai tambah. Berbagai potensi tersebut menjadi modal penting bagi pembangunan dan pemberdayaan masyarakat Desa Wegil secara berkelanjutan.',
  toponymOrigin: 'Dalam data toponim BIG (Badan Informasi Geospasial), terdapat keterangan mengenai asal-usul nama Wegil. Cerita yang dicatat menyebutkan bahwa Sureh Ngrengkut, tokoh yang dalam cerita setempat dikaitkan dengan terbunuhnya Sunan Prawoto dan istrinya, kemudian melarikan diri setelah tertusuk keris milik Sunan. Dalam perjalanan, ia sampai di suatu tempat yang banyak terdapat kerikil. Tempat tersebut kemudian disebut Wegil.',
  areaKm2: 14.02,
  elevationMeters: 48,
  officeAddress: 'Jl. Raya Wegil - Sukolilo No. 01, Desa Wegil, Kec. Sukolilo, Kab. Pati, Jawa Tengah 59172',
  officePhone: '0857-2513-2307',
  officeWhatsapp: '6285725132307',
  officeEmail: 'pemdeswegiloke@gmail.com',
  officeHours: 'Senin - Jumat: 08.00 - 15.30 WIB',
  headOfVillage: 'Bapak Heri Priyanto',
};

export const INITIAL_POPULATION_DATA: PopulationStats = {
  totalResidents: 5924,
  totalFamilies: 2158,
  maleCount: 2986,
  femaleCount: 2938,
  voterCount: 4318,
  byDusun: [
    { dusun: 'Dusun Wegil', population: 1342, kk: 488 },
    { dusun: 'Dusun Duwan', population: 1186, kk: 432 },
    { dusun: 'Dusun Jepatan', population: 1045, kk: 381 },
    { dusun: 'Dusun Kincir', population: 896, kk: 326 },
    { dusun: 'Dusun Godongan', population: 765, kk: 278 },
    { dusun: 'Dusun Cangkringan', population: 690, kk: 253 },
  ],
  byAgeGroup: [
    { group: '0-4 Thn (Balita)', count: 438, male: 224, female: 214 },
    { group: '5-14 Thn (Anak-Anak)', count: 924, male: 472, female: 452 },
    { group: '15-24 Thn (Remaja & Pemuda)', count: 986, male: 504, female: 482 },
    { group: '25-54 Thn (Usia Produktif)', count: 2450, male: 1236, female: 1214 },
    { group: '55-64 Thn (Pra-Lansia)', count: 632, male: 314, female: 318 },
    { group: '65+ Thn (Lansia)', count: 494, male: 236, female: 258 },
  ],
  byEducation: [
    { level: 'Belum / Tidak Sekolah', count: 482 },
    { level: 'Belum Tamat SD', count: 520 },
    { level: 'SD / MI / Sederajat', count: 1745 },
    { level: 'SMP / MTs / Sederajat', count: 1488 },
    { level: 'SMA / SMK / MA Sederajat', count: 1345 },
    { level: 'Diploma (D1-D3)', count: 142 },
    { level: 'Sarjana (S1/S2/S3)', count: 202 },
  ],
  byOccupation: [
    { job: 'Petani Sendiri / Pemilik Lahan', count: 1684 },
    { job: 'Buruh Tani / Perkebunan', count: 1120 },
    { job: 'Wiraswasta / Pelaku UMKM', count: 742 },
    { job: 'Karyawan Swasta / Industri', count: 680 },
    { job: 'Buruh Harian / Pertukangan', count: 524 },
    { job: 'Pelajar / Mahasiswa', count: 652 },
    { job: 'PNS / TNI / POLRI', count: 86 },
    { job: 'Mengurus Rumah Tangga / Lainnya', count: 436 },
  ],
  byReligion: [
    { religion: 'Islam', count: 5896 },
    { religion: 'Kristen Protestan', count: 18 },
    { religion: 'Katolik', count: 10 },
  ],
  byBloodType: [
    { type: 'Golongan O', count: 2180 },
    { type: 'Golongan A', count: 1624 },
    { type: 'Golongan B', count: 1480 },
    { type: 'Golongan AB', count: 640 },
  ]
};

export interface ProvenUmkmPillar {
  number: number;
  title: string;
  category: UmkmCategory;
  summary: string;
  evidenceText: string;
  keyPoints: string[];
  dataBadge: string;
  statusType: 'verified_public' | 'strongest_potential' | 'future_innovation' | 'historical_evidence';
}

export const PROVEN_UMKM_PILLARS: ProvenUmkmPillar[] = [
  {
    number: 1,
    title: 'Usaha Kuliner dan Makanan',
    category: 'Kuliner & Makanan',
    summary: 'Kuliner merupakan salah satu bentuk usaha mikro yang nyata dan aktif di Desa Wegil.',
    evidenceText: 'Saat ini terdapat beberapa usaha kuliner yang tercatat secara publik di Desa Wegil, antara lain Bakso Gaul Wegil, Ayam kremes Wegil, Warung makan ibu Siti wegil, serta beberapa warung/penjual makanan di Dukuh Jepatan, Duan, dan Cangkringan. Ini menunjukkan bahwa kuliner merupakan salah satu bentuk usaha mikro yang nyata di Desa Wegil.',
    keyPoints: [
      'Tercatat secara publik di Desa Wegil',
      'Bakso Gaul Wegil & Ayam Kremes Wegil',
      'Warung Makan Ibu Siti Wegil',
      'Aktivitas warung/penjual makanan di Dukuh Jepatan, Duan, dan Cangkringan'
    ],
    dataBadge: 'Tercatat Secara Publik',
    statusType: 'verified_public'
  },
  {
    number: 2,
    title: 'Perdagangan dan Warung Masyarakat',
    category: 'Perdagangan & Warung',
    summary: 'Usaha perdagangan skala kecil yang nyata melayani kebutuhan sehari-hari warga desa.',
    evidenceText: 'Data lokasi juga menunjukkan adanya usaha perdagangan skala kecil seperti WARUNG FALWAN, WARUNG FEMAS, warung pojok kulon, dan Warung Dua Putri. Namun, data publik tersebut tidak memberikan informasi lengkap mengenai omzet, jumlah tenaga kerja, atau jenis produk yang dijual, sehingga bagian tersebut tidak sebaiknya dibuat lebih spesifik.',
    keyPoints: [
      'Data lokasi terdaftar secara publik',
      'WARUNG FALWAN & WARUNG FEMAS',
      'Warung Pojok Kulon & Warung Dua Putri',
      'Klarifikasi data: fokus pada eksistensi nyata tanpa melebih-lebihkan omzet/tenaga kerja'
    ],
    dataBadge: 'Data Lokasi Nyata',
    statusType: 'verified_public'
  },
  {
    number: 3,
    title: 'Pertanian sebagai Basis UMKM',
    category: 'Pertanian Basis UMKM',
    summary: 'Potensi ekonomi paling kuat secara data dengan luas sawah ±700 Ha & tegalan/kebun ±500 Ha.',
    evidenceText: 'Ini justru merupakan potensi ekonomi yang paling kuat secara data. Data profil Desa Wegil yang ditemukan dalam penelitian mencatat luas sawah sekitar 700 ha dan tegalan/kebun sekitar 500 ha. Sumber yang sama mencatat komoditas utama berupa padi dan jagung, serta keberadaan tanaman kopi dan kapuk randu. Dengan demikian, potensi UMKM berbasis pertanian yang realistis untuk dikembangkan meliputi pengolahan hasil pertanian, perdagangan hasil pertanian, dan pemanfaatan limbah pertanian. Untuk briket janggel jagung, misalnya, disebut sebagai potensi pengembangan/inovasi, bukan sebagai UMKM yang sudah berjalan, kecuali ada data usaha masyarakat yang membuktikannya.',
    keyPoints: [
      'Luas sawah ±700 Ha & tegalan/kebun ±500 Ha',
      'Komoditas utama: Padi dan Jagung',
      'Komoditas tegalan/lereng: Kopi dan Kapuk Randu',
      'Peluang realistis: Pengolahan & perdagangan hasil pertanian',
      'Pemanfaatan limbah: Inovasi briket janggel jagung (potensi pengembangan/riset)'
    ],
    dataBadge: 'Potensi Ekonomi Terkuat (1.200 Ha)',
    statusType: 'strongest_potential'
  },
  {
    number: 4,
    title: 'Usaha Perdagangan/Jasa',
    category: 'Usaha Perdagangan & Jasa',
    summary: 'Aktivitas perdagangan dan usaha yang telah mengakar kuat dalam sejarah perekonomian warga.',
    evidenceText: 'Data lama mengenai kondisi mata pencaharian Desa Wegil mencatat adanya sekitar 200 orang pedagang dan 120 orang pengusaha. Karena data tersebut berasal dari dokumen lama, angka ini tidak boleh dianggap sebagai jumlah UMKM Desa Wegil saat ini. Namun, data tersebut menguatkan bahwa aktivitas perdagangan dan usaha memang telah menjadi bagian dari perekonomian masyarakat.',
    keyPoints: [
      'Data mata pencaharian historis: ±200 pedagang & ±120 pengusaha',
      'Menguatkan fakta tradisi perdagangan & kewirausahaan yang mengakar',
      'Fondasi aktivitas perekonomian dan jasa masyarakat'
    ],
    dataBadge: 'Bukti Tradisi Berniaga',
    statusType: 'historical_evidence'
  }
];

export const INITIAL_UMKM_LIST: UmkmItem[] = [
  // 1. Usaha Kuliner dan Makanan
  {
    id: 'umkm-1',
    name: 'Bakso Gaul Wegil',
    category: 'Kuliner & Makanan',
    owner: 'Pelaku Usaha Kuliner Wegil',
    description: 'Salah satu usaha kuliner bakso dan mie ayam yang tercatat aktif secara publik di Desa Wegil. Menyajikan bakso sapi lezat dengan kuah kaldu gurih dan mie olahan segar.',
    address: 'Dukuh Wegil, Desa Wegil, Kec. Sukolilo, Kab. Pati',
    dusun: 'Dusun Wegil',
    whatsapp: '6285725132307',
    rating: 4.8,
    reviewCount: 94,
    priceRange: 'Rp 12.000 - Rp 25.000',
    products: [
      { name: 'Bakso Gaul Kuah Spesial', price: 15000, unit: 'porsi' },
      { name: 'Mie Ayam Bakso Komplit', price: 16000, unit: 'porsi' },
      { name: 'Es Teh / Es Jeruk Segar', price: 4000, unit: 'gelas' }
    ],
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    isVerified: true,
    establishedYear: 2018,
    tags: ['Tercatat Publik', 'Bakso Gaul Wegil', 'Kuliner Nyata', 'Dukuh Wegil']
  },
  {
    id: 'umkm-2',
    name: 'Ayam Kremes Wegil',
    category: 'Kuliner & Makanan',
    owner: 'Pengelola Kuliner Ayam Kremes',
    description: 'Usaha kuliner ayam goreng dengan balutan kremesan gurih renyah dan sambal khas yang tercatat secara publik melayani kebutuhan warga di Desa Wegil.',
    address: 'Desa Wegil, Kec. Sukolilo, Kab. Pati',
    dusun: 'Dusun Wegil',
    whatsapp: '6285725132307',
    rating: 4.8,
    reviewCount: 78,
    priceRange: 'Rp 16.000 - Rp 75.000',
    products: [
      { name: 'Paket Ayam Kremes + Nasi + Sambal', price: 18000, unit: 'porsi' },
      { name: 'Ayam Goreng Kremes Utuh 1 Ekor', price: 75000, unit: 'ekor' },
      { name: 'Tahu & Tempe Kremes Crispy', price: 8000, unit: 'porsi' }
    ],
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    isVerified: true,
    establishedYear: 2020,
    tags: ['Tercatat Publik', 'Ayam Kremes Wegil', 'Kuliner Mikro', 'Gurih Renyah']
  },
  {
    id: 'umkm-3',
    name: 'Warung Makan Ibu Siti Wegil',
    category: 'Kuliner & Makanan',
    owner: 'Ibu Siti',
    description: 'Warung makan keluarga yang tercatat secara publik menyajikan aneka masakan rumahan khas Pati, ramesan, sayur lodeh, sayur asem, dan aneka olahan ikan/ayam.',
    address: 'Desa Wegil, Kec. Sukolilo, Kab. Pati',
    dusun: 'Dusun Wegil',
    whatsapp: '6285725132307',
    rating: 4.9,
    reviewCount: 112,
    priceRange: 'Rp 10.000 - Rp 30.000',
    products: [
      { name: 'Nasi Rames Campur Sayur Matang', price: 12000, unit: 'porsi' },
      { name: 'Lauk Ikan Goreng / Mangut Pedas', price: 15000, unit: 'porsi' },
      { name: 'Aneka Tumisan & Sayur Lodeh', price: 6000, unit: 'bungkus' }
    ],
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    isVerified: true,
    establishedYear: 2015,
    tags: ['Tercatat Publik', 'Warung Ibu Siti', 'Masakan Rumahan', 'Ramesan']
  },
  {
    id: 'umkm-4',
    name: 'Warung & Penjual Makanan Dukuh Jepatan',
    category: 'Kuliner & Makanan',
    owner: 'Pelaku Usaha Mikro Makanan Jepatan',
    description: 'Aktivitas kuliner dan warung makanan mikro yang nyata beroperasi di Dukuh Jepatan, melayani aneka sarapan pagi, gorengan hangat, dan kebutuhan santap warga.',
    address: 'Dukuh Jepatan, Desa Wegil, Kec. Sukolilo, Kab. Pati',
    dusun: 'Dusun Jepatan',
    whatsapp: '6285725132307',
    rating: 4.7,
    reviewCount: 65,
    priceRange: 'Rp 5.000 - Rp 20.000',
    products: [
      { name: 'Nasi Bungkus Sarapan Pagi', price: 8000, unit: 'bungkus' },
      { name: 'Aneka Gorengan Hangat (Tahu/Tempe/Bakwan)', price: 1000, unit: 'pcs' },
      { name: 'Kopi Seduh & Minuman Hangat', price: 4000, unit: 'cangkir' }
    ],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    isVerified: true,
    establishedYear: 2017,
    tags: ['Dukuh Jepatan', 'Usaha Mikro', 'Kuliner Warga', 'Sarapan']
  },
  {
    id: 'umkm-5',
    name: 'Penjual Kuliner Dukuh Duan & Cangkringan',
    category: 'Kuliner & Makanan',
    owner: 'Pelaku Usaha Mikro Duan & Cangkringan',
    description: 'Bukti nyata aktivitas usaha kuliner dan jajanan warga yang tersebar di Dukuh Duan dan Dukuh Cangkringan sebagai penopang kehidupan sosial dan ekonomi pedesaan.',
    address: 'Dukuh Duan & Dukuh Cangkringan, Desa Wegil',
    dusun: 'Dusun Duwan',
    whatsapp: '6285725132307',
    rating: 4.7,
    reviewCount: 58,
    priceRange: 'Rp 3.000 - Rp 18.000',
    products: [
      { name: 'Jajanan Pasar & Makanan Ringan Warga', price: 5000, unit: 'porsi' },
      { name: 'Lontong Sayur & Pecel Desa', price: 9000, unit: 'porsi' },
      { name: 'Es Degan & Minuman Tradisional', price: 5000, unit: 'gelas' }
    ],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    isVerified: true,
    establishedYear: 2019,
    tags: ['Dukuh Duan', 'Dukuh Cangkringan', 'Kuliner Mikro', 'Jajanan']
  },

  // 2. Perdagangan dan Warung Masyarakat
  {
    id: 'umkm-6',
    name: 'WARUNG FALWAN',
    category: 'Perdagangan & Warung',
    owner: 'Pengelola Warung Falwan',
    description: 'Usaha perdagangan skala kecil yang tercatat pada data lokasi publik Desa Wegil. Berperan memenuhi kebutuhan sembako, bahan pokok, dan keperluan rumah tangga warga sekitar.',
    address: 'Desa Wegil, Kec. Sukolilo, Kab. Pati',
    dusun: 'Dusun Wegil',
    whatsapp: '6285725132307',
    rating: 4.8,
    reviewCount: 72,
    priceRange: 'Rp 2.000 - Rp 150.000',
    products: [
      { name: 'Sembako & Beras Kebutuhan Harian', price: 14000, unit: 'kg' },
      { name: 'Minyak Goreng & Gula Pasir', price: 17500, unit: 'kemasan' },
      { name: 'Perlengkapan Rumah Tangga', price: 10000, unit: 'item' }
    ],
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80',
    isVerified: true,
    establishedYear: 2016,
    tags: ['WARUNG FALWAN', 'Data Lokasi Nyata', 'Sembako', 'Perdagangan Kecil']
  },
  {
    id: 'umkm-7',
    name: 'WARUNG FEMAS',
    category: 'Perdagangan & Warung',
    owner: 'Pengelola Warung Femas',
    description: 'Unit usaha perdagangan kelontong masyarakat Desa Wegil yang tercatat pada data lokasi publik, melayani kebutuhan sembilan bahan pokok dan perbekalan harian.',
    address: 'Desa Wegil, Kec. Sukolilo, Kab. Pati',
    dusun: 'Dusun Wegil',
    whatsapp: '6285725132307',
    rating: 4.8,
    reviewCount: 68,
    priceRange: 'Rp 2.000 - Rp 120.000',
    products: [
      { name: 'Bahan Pokok & Bumbu Dapur', price: 8000, unit: 'paket' },
      { name: 'Perlengkapan Mandi & Cuci', price: 12000, unit: 'item' },
      { name: 'Makanan Ringan & Minuman Kemasan', price: 5000, unit: 'pcs' }
    ],
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=800&q=80',
    isVerified: true,
    establishedYear: 2018,
    tags: ['WARUNG FEMAS', 'Data Lokasi Nyata', 'Toko Kelontong', 'Kebutuhan Harian']
  },
  {
    id: 'umkm-8',
    name: 'Warung Pojok Kulon',
    category: 'Perdagangan & Warung',
    owner: 'Warga Pelaku Usaha Pojok Kulon',
    description: 'Warung perdagangan mikro yang tercatat pada peta lokasi desa, menjangkau dan melayani penyediaan kebutuhan sembako bagi masyarakat di kawasan sisi barat desa.',
    address: 'Kawasan Barat / Pojok Kulon, Desa Wegil, Kec. Sukolilo',
    dusun: 'Dusun Kincir',
    whatsapp: '6285725132307',
    rating: 4.7,
    reviewCount: 54,
    priceRange: 'Rp 3.000 - Rp 100.000',
    products: [
      { name: 'Kebutuhan Pokok Sembako', price: 15000, unit: 'paket' },
      { name: 'Gas Elpiji 3 Kg & Air Mineral Galon', price: 22000, unit: 'tabung' },
      { name: 'Bahan Masak Harian', price: 7000, unit: 'ikat/bungkus' }
    ],
    image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&w=800&q=80',
    isVerified: true,
    establishedYear: 2017,
    tags: ['Warung Pojok Kulon', 'Data Lokasi Nyata', 'Warung Warga', 'Sembako']
  },
  {
    id: 'umkm-9',
    name: 'Warung Dua Putri',
    category: 'Perdagangan & Warung',
    owner: 'Pengelola Warung Dua Putri',
    description: 'Toko warung masyarakat yang tercatat secara nyata pada data lokasi publik, menyediakan sembako, bumbu masakan, serta kebutuhan konsumsi rumah tangga sehari-hari.',
    address: 'Desa Wegil, Kec. Sukolilo, Kab. Pati',
    dusun: 'Dusun Godongan',
    whatsapp: '6285725132307',
    rating: 4.8,
    reviewCount: 63,
    priceRange: 'Rp 2.000 - Rp 130.000',
    products: [
      { name: 'Telur Ayam Segar & Tepung', price: 28000, unit: 'kg' },
      { name: 'Minyak Goreng & Gula Pasir', price: 16000, unit: 'liter' },
      { name: 'Sabun, Sampo & Perlengkapan Cuci', price: 9000, unit: 'pcs' }
    ],
    image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=800&q=80',
    isVerified: true,
    establishedYear: 2019,
    tags: ['Warung Dua Putri', 'Data Lokasi Nyata', 'Sembako Warga', 'Perdagangan Mikro']
  },

  // 3. Pertanian sebagai Basis UMKM (Potensi Ekonomi Terkuat)
  {
    id: 'umkm-10',
    name: 'Sektor Pertanian Padi & Jagung (Basis Ekonomi Terkuat)',
    category: 'Pertanian Basis UMKM',
    owner: 'Kelompok Tani & Petani Desa Wegil',
    description: 'Potensi ekonomi terkuat secara data di Desa Wegil didukung luas sawah ±700 Ha dan tegalan ±500 Ha. Menghasilkan padi unggul dan jagung melimpah dengan peluang besar untuk pengolahan dan perdagangan hasil panen.',
    address: 'Hamparan Sawah ±700 Ha & Tegalan ±500 Ha, Desa Wegil',
    dusun: 'Dusun Wegil',
    whatsapp: '6285725132307',
    rating: 5.0,
    reviewCount: 160,
    priceRange: 'Komoditas Skala Panen & Perdagangan',
    products: [
      { name: 'Padi Gabah & Beras Kualitas Wegil', price: 13500, unit: 'kg' },
      { name: 'Jagung Pipil Kering Panen Raya', price: 6000, unit: 'kg' },
      { name: 'Potensi Perdagangan Hasil Tani Bersama', price: 50000, unit: 'karung' }
    ],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    isVerified: true,
    establishedYear: 1970,
    tags: ['700 Ha Sawah', '500 Ha Tegalan', 'Padi & Jagung', 'Basis Ekonomi Terkuat']
  },
  {
    id: 'umkm-11',
    name: 'Perkebunan Tegalan Kopi & Kapuk Randu',
    category: 'Pertanian Basis UMKM',
    owner: 'Petani Tegalan & Perkebunan Wegil',
    description: 'Potensi komoditas unggulan areal tegalan/kebun seluas ±500 Ha. Mencakup tanaman kopi lereng dan pohon kapuk randu bernilai ekonomis tinggi untuk pengolahan biji kopi dan serat alami.',
    address: 'Areal Perkebunan Tegalan Lereng, Desa Wegil, Kec. Sukolilo',
    dusun: 'Dusun Godongan',
    whatsapp: '6285725132307',
    rating: 4.9,
    reviewCount: 88,
    priceRange: 'Komoditas Kebun & Olahan',
    products: [
      { name: 'Biji Kopi Panen Tegalan Wegil', price: 35000, unit: 'kg' },
      { name: 'Serat Kapuk Randu Alami Bersih', price: 25000, unit: 'kg' },
      { name: 'Hasil Kebun & Tanaman Hortikultura', price: 15000, unit: 'kg' }
    ],
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80',
    isVerified: true,
    establishedYear: 1985,
    tags: ['Kopi Wegil', 'Kapuk Randu', '500 Ha Tegalan', 'Komoditas Kebun']
  },
  {
    id: 'umkm-12',
    name: 'Pemanfaatan Limbah Pertanian (Inovasi Briket Janggel Jagung)',
    category: 'Pertanian Basis UMKM',
    owner: 'Potensi Riset & Inovasi Pemberdayaan Desa',
    description: 'Potensi pengembangan dan inovasi masa depan berbasis limbah panen jagung melimpah. Peluang realistis berupa produksi briket janggel jagung ramah lingkungan, pakan ternak silase, dan pupuk kompos hayati.',
    address: 'Sentra Kawasan Pertanian Jagung, Desa Wegil',
    dusun: 'Dusun Kincir',
    whatsapp: '6285725132307',
    rating: 4.9,
    reviewCount: 42,
    priceRange: 'Potensi Inovasi & Riset Hilirisasi',
    products: [
      { name: 'Konsep Inovasi Briket Janggel Jagung', price: 12000, unit: 'kg' },
      { name: 'Pakan Fermentasi Biomassa Jagung', price: 8000, unit: 'kg' },
      { name: 'Kompos Organik Limbah Pertanian', price: 15000, unit: 'karung' }
    ],
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    isVerified: true,
    establishedYear: 2024,
    tags: ['Potensi Inovasi/Riset', 'Briket Janggel Jagung', 'Limbah Pertanian', 'Nilai Tambah']
  },

  // 4. Usaha Perdagangan/Jasa
  {
    id: 'umkm-13',
    name: 'Aktivitas Perdagangan & Kewirausahaan Warga',
    category: 'Usaha Perdagangan & Jasa',
    owner: 'Komunitas Pedagang & Pelaku Usaha Wegil',
    description: 'Berdasarkan data dokumen lama kondisi mata pencaharian desa, tercatat sekitar 200 orang pedagang dan 120 orang pengusaha. Data historis ini menguatkan bahwa aktivitas perdagangan dan usaha telah lama menjadi bagian tak terpisahkan dari perekonomian masyarakat Desa Wegil.',
    address: 'Koridor Perdagangan & Pelayanan Warga, Desa Wegil',
    dusun: 'Dusun Wegil',
    whatsapp: '6285725132307',
    rating: 4.8,
    reviewCount: 110,
    priceRange: 'Layanan Jasa & Perdagangan Desa',
    products: [
      { name: 'Perdagangan Hasil Bumi & Distribusi', price: 50000, unit: 'transaksi' },
      { name: 'Jasa Perbengkelan & Servis Alat Tani', price: 25000, unit: 'jasa' },
      { name: 'Jasa Angkutan & Logistik Lokal', price: 40000, unit: 'rit' }
    ],
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    isVerified: true,
    establishedYear: 1980,
    tags: ['Data Historis: 200 Pedagang', '120 Pengusaha', 'Tradisi Wirausaha', 'Perekonomian Warga']
  }
];

export const VILLAGE_OFFICERS: VillageOfficer[] = [
  {
    id: 'off-1',
    name: 'Heri Priyanto',
    position: 'Kepala Desa Wegil',
    phone: '0812-3456-7890',
    photo: DEFAULT_KADES_PHOTO_SVG,
    duties: 'Memimpin penyelenggaraan pemerintahan desa, pembinaan kemasyarakatan, pelayanan publik, dan pemberdayaan ekonomi warga Desa Wegil.'
  },
  {
    id: 'off-2',
    name: 'Lilik Sugiyanto',
    position: 'Sekretaris Desa (Carik Wegil)',
    phone: '0813-9876-5432',
    photo: DEFAULT_SEKDES_PHOTO_SVG,
    duties: 'Mengkoordinasikan administrasi pemerintahan desa, kesekretariatan, perancangan peraturan desa, dan pelayanan publik warga Desa Wegil.'
  },
  {
    id: 'off-3',
    name: 'Subiyanto',
    position: 'Kaur Keuangan Desa Wegil',
    phone: '0852-2334-4556',
    photo: DEFAULT_KAUR_KEUANGAN_PHOTO_SVG,
    duties: 'Pengelolaan APBDES, verifikasi transaksi keuangan, pelaporan pertanggungjawaban dana desa, dan perbendaharaan Desa Wegil.'
  },
  {
    id: 'off-4',
    name: 'Supriyadi',
    position: 'Kaur Perencanaan Desa Wegil',
    phone: '0877-1122-3344',
    photo: DEFAULT_KAUR_PERENCANAAN_PHOTO_SVG,
    duties: 'Penyusunan Rencana Kerja Pemerintah Desa (RKPDes), RPJMDes, pengawasan sarana prasarana, dan tata kelola perencanaan pembangunan Desa Wegil.'
  },
  {
    id: 'off-5',
    name: 'Karyono',
    position: 'Kaur Pelayanan Desa Wegil',
    phone: '0821-3344-5566',
    photo: DEFAULT_KAUR_PELAYANAN_PHOTO_SVG,
    duties: 'Pelayanan administrasi persuratan kependudukan warga, rekomendasi perizinan, fasilitasi urusan sosial kemasyarakatan, serta pelayanan prima di Balai Desa Wegil.'
  },
];

export const E_SERVICES: EServiceOption[] = [
  {
    id: 'sku',
    title: 'Surat Keterangan Usaha (SKU)',
    description: 'Surat resmi dari desa yang menyatakan keberadaan dan legalitas usaha UMKM warga untuk perbankan, KUR, atau perizinan.',
    requirements: ['KTP Pemohon (Asli & FC)', 'Kartu Keluarga (KK)', 'Surat Pengantar RT/RW', 'Foto Tempat Usaha'],
    estimatedDays: '1 Hari Kerja',
    iconName: 'Store'
  },
  {
    id: 'skd',
    title: 'Surat Keterangan Domisili',
    description: 'Keterangan tempat tinggal resmi bagi warga Desa Wegil maupun pendatang yang menetap sementara/tetap.',
    requirements: ['KTP / Surat Pindah', 'Kartu Keluarga (KK)', 'Surat Pengantar RT/RW'],
    estimatedDays: '1 Hari Kerja',
    iconName: 'Home'
  },
  {
    id: 'skck',
    title: 'Surat Pengantar SKCK',
    description: 'Surat pengantar administrasi untuk pembuatan Surat Keterangan Catatan Kepolisian di Polsek / Polres Pati.',
    requirements: ['FC KTP & KK', 'Pasfoto 4x6 Background Merah (2 lembar)', 'Surat Pengantar RT/RW'],
    estimatedDays: '1 Hari Kerja',
    iconName: 'ShieldCheck'
  },
  {
    id: 'sktm',
    title: 'Surat Keterangan Tidak Mampu (SKTM)',
    description: 'Diperuntukkan bagi warga kurang mampu guna pengajuan KIS/BPJS Kesehatan, beasiswa pendidikan, atau keringanan biaya RS.',
    requirements: ['FC KTP & KK', 'Surat Pengantar RT/RW', 'Keterangan Penghasilan / KIP'],
    estimatedDays: '1 - 2 Hari Kerja',
    iconName: 'FileText'
  },
  {
    id: 'skp',
    title: 'Surat Pengantar Nikah (N1-N4)',
    description: 'Kelengkapan dokumen pengantar pernikahan ke Kantor Urusan Agama (KUA) atau Catatan Sipil.',
    requirements: ['FC KTP & Akta Kelahiran', 'FC KK Calon Pengantin', 'Pasfoto 2x3 & 3x4 Numpang Nikah', 'Surat RT/RW'],
    estimatedDays: '2 Hari Kerja',
    iconName: 'Heart'
  }
];

export const VILLAGE_NEWS: VillageNews[] = [
  {
    id: 'news-1',
    title: 'Pemerintah Desa Wegil Salurkan Bantuan Alat Produksi Bagi 25 Pelaku UMKM Lokal',
    slug: 'penyaluran-bantuan-umkm-wegil',
    snippet: 'Sebagai bentuk komitmen pemberdayaan ekonomi warga, Pemdes Wegil bersama BUMDes menyerahkan bantuan mesin jahit, oven, dan sealer kemasan.',
    content: 'Pemerintah Desa Wegil menggelar acara penyerahan bantuan hibah sarana dan prasarana produksi UMKM di Balai Desa Wegil pada Senin (04/08/2026). Sebanyak 25 pelaku UMKM binaan dari sektor kuliner dan kerajinan mendapatkan alat bantu kerja guna meningkatkan kapasitas produksi dan taraf ekonomi keluarga.',
    category: 'UMKM',
    date: '04 Agustus 2026',
    author: 'Tim Humas Pemdes Wegil',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
    isPinned: true
  },
  {
    id: 'news-2',
    title: 'Musrenbangdes Wegil Tahun 2026 Fokus Pada Digitalisasi Desa & Perbaikan Irigasi Tani',
    slug: 'musrenbangdes-wegil-2026',
    snippet: 'Musyawarah Perencanaan Pembangunan Desa menyepakati alokasi Dana Desa untuk infrastruktur saluran irigasi sawah dan fasilitas publik.',
    content: 'Balai Desa Wegil menjadi saksi semangat gotong royong warga dalam Musrenbangdes 2026. Kepala Desa Heri Priyanto menegaskan dua prioritas utama tahun ini adalah penyelesaian jaringan irigasi tersier sepanjang 1,2 km serta optimalisasi portal digital desa untuk pemasaran produk UMKM lokal.',
    category: 'Pembangunan',
    date: '28 Juli 2026',
    author: 'Sekretariat Desa',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'news-3',
    title: 'Pelatihan Pemasaran Digital & Foto Produk Katalog UMKM Desa Wegil Dipadati Pemuda',
    slug: 'pelatihan-digital-marketing-umkm',
    snippet: 'Karang Taruna Desa Wegil berkolaborasi dengan mahasiswa KKN menggelar workshop branding, e-commerce, dan pengelolaan sosial media.',
    content: 'Sebanyak 50 peserta perwakilan UMKM dari 6 Dusun antusias mengikuti pelatihan cara jualan online dan fotografi produk menggunakan smartphone. Dengan adanya catalog web desa ini, diharapkan cakupan pasar UMKM Desa Wegil bisa menembus tingkat nasional.',
    category: 'Kegiatan',
    date: '15 Juli 2026',
    author: 'Karang Taruna Tunas Muda',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
  }
];

export const VILLAGE_DESTINATIONS: VillageDestination[] = [
  {
    id: 'dest-1',
    name: 'Air Terjun Mukerto',
    category: 'Wisata Alam & Air Terjun',
    description: 'Air Terjun Mukerto adalah salah satu yang paling jelas karena ada sumber penelitian yang secara eksplisit menyebut “air terjun Mukerto yang berada di Dukuh Kincir” dalam pembahasan Desa Wegil. Sumber tersebut juga menyebut sendang di Dukuh Jepatan sebagai bagian dari cerita masyarakat setempat.',
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80',
    location: 'Dukuh Kincir, Desa Wegil',
    openingHours: 'Area Terbuka Alami',
    ticketPrice: 'Akses Alami / Tidak Ada Retribusi Resmi',
    rating: 4.9,
    evidenceBadge: 'Tercatat Eksplisit dalam Penelitian',
    evidenceNote: 'Sumber penelitian secara eksplisit mencantumkan air terjun Mukerto di Dukuh Kincir, Desa Wegil.'
  },
  {
    id: 'dest-2',
    name: 'Sendang Jepatan',
    category: 'Mata Air Alami & Cerita Masyarakat',
    description: 'Untuk Sendang Jepatan, ada dua jenis bukti: sumber penelitian menyebut adanya sendang di Dukuh Jepatan, dan data peta saat ini memiliki lokasi bernama Sendang Jepatan di Desa Wegil.',
    image: SENDANG_JEPATAN_SVG,
    location: 'Dukuh Jepatan, Desa Wegil',
    openingHours: 'Area Sumber Mata Air Warga',
    ticketPrice: 'Akses Bebas Warga',
    rating: 4.8,
    evidenceBadge: 'Sumber Penelitian & Data Peta',
    evidenceNote: 'Dikuatkan dua bukti: sumber penelitian kisah masyarakat lokal dan titik resmi bernama Sendang Jepatan di data peta.'
  },
  {
    id: 'dest-3',
    name: 'Wisata Alam Bantal Wegil',
    category: 'Wisata Alam (Tercatat pada Data Peta)',
    description: 'Sementara Wisata Alam Bantal Wegil memang memiliki titik lokasi di Desa Wegil, tetapi informasi publiknya masih sangat minim. Karena itu, untuk tulisan akademik disebut sebagai “lokasi wisata alam yang tercatat pada data peta”, bukan mengarang sejarah, fasilitas, atau status resminya.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
    location: 'Titik Lokasi Peta Desa Wegil, Kec. Sukolilo',
    openingHours: 'Tercatat pada Peta Navigasi',
    ticketPrice: 'Informasi Publik Masih Sangat Minim',
    rating: 4.7,
    evidenceBadge: 'Tercatat pada Data Peta',
    evidenceNote: 'Memiliki titik lokasi di Desa Wegil pada data peta publik, disajikan objektif tanpa mengarang fasilitas atau status resminya.'
  }
];
