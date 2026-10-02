export type DusunName = 
  | 'Dusun Wegil'
  | 'Dusun Duwan'
  | 'Dusun Jepatan'
  | 'Dusun Kincir'
  | 'Dusun Godongan'
  | 'Dusun Cangkringan';

export type UmkmCategory = 
  | 'Kuliner & Makanan'
  | 'Perdagangan & Warung'
  | 'Pertanian Basis UMKM'
  | 'Usaha Perdagangan & Jasa'
  | 'Kuliner'
  | 'Kerajinan & Seni'
  | 'Hasil Tani & Ternak'
  | 'Fashion & Batik'
  | 'Jasa & Perdagangan';

export interface UmkmProduct {
  name: string;
  price: number;
  unit: string;
  image?: string;
}

export interface UmkmItem {
  id: string;
  name: string;
  category: UmkmCategory;
  owner: string;
  description: string;
  address: string;
  dusun: DusunName;
  whatsapp: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  products: UmkmProduct[];
  image: string;
  isVerified: boolean;
  establishedYear: number;
  tags: string[];
}

export interface PopulationStats {
  totalResidents: number;
  totalFamilies: number;
  maleCount: number;
  femaleCount: number;
  voterCount: number;
  byAgeGroup: { group: string; count: number; male: number; female: number }[];
  byEducation: { level: string; count: number }[];
  byOccupation: { job: string; count: number }[];
  byDusun: { dusun: DusunName; population: number; kk: number }[];
  byReligion: { religion: string; count: number }[];
  byBloodType: { type: string; count: number }[];
}

export interface VillageOfficer {
  id: string;
  name: string;
  position: string;
  nip?: string;
  phone: string;
  photo: string;
  duties: string;
}

export interface VillageNews {
  id: string;
  title: string;
  slug: string;
  snippet: string;
  content: string;
  category: 'Pengumuman' | 'Pembangunan' | 'Kegiatan' | 'Kesehatan' | 'UMKM';
  date: string;
  author: string;
  image: string;
  isPinned?: boolean;
}

export interface EServiceOption {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  estimatedDays: string;
  iconName: string;
}

export interface ServiceApplication {
  id: string;
  trackingCode: string;
  serviceId: string;
  serviceTitle: string;
  residentName: string;
  nik: string;
  phone: string;
  dusun: DusunName;
  rtRw: string;
  purpose: string;
  status: 'Diproses' | 'Disetujui' | 'Selesai' | 'Ditolak';
  createdAt: string;
}

export interface VillageDestination {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  location: string;
  openingHours: string;
  ticketPrice: string;
  rating: number;
  evidenceBadge?: string;
  evidenceNote?: string;
}
