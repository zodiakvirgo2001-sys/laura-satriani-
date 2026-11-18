export type GalleryCategory = 'semua' | 'qgis' | 'pendataan' | 'k3';

export interface DocumentationItem {
  id: string;
  category: Exclude<GalleryCategory, 'semua'>;
  categoryLabel: string;
  title: string;
  context: string;
  description: string;
  imageSrc: string;
  aspectClass: string;
  objectPosition?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  period: string;
  degree: string;
  gpa: string;
  scale: string;
  notes: string;
}

export interface ExperienceBlock {
  id: string;
  index: string;
  category: Exclude<GalleryCategory, 'semua'>;
  title: string;
  subtitle: string;
  organization: string;
  summary: string;
  highlights: {
    label: string;
    detail: string;
  }[];
  tools: string;
}

export const PROFILE = {
  name: 'Laura Satriani',
  discipline: 'Statistika',
  headline: 'Statistika, Pemetaan Spasial & Validasi Data',
  kicker: 'Statistika · Pemetaan QGIS · Petugas K3 Konstruksi',
  year: '2026',
  about:
    'Halo! Saya lulusan S1 Statistika Universitas Terbuka dengan pengalaman lebih dari 3 tahun bekerja di BPS Kabupaten Agam. Selama bekerja, saya terlibat dalam kegiatan pendataan, entri dan pengolahan data, serta pemetaan wilayah kerja statistik menggunakan QGIS. Pengalaman ini membuat saya terbiasa bekerja dengan data, melakukan pengecekan untuk memastikan keakuratannya, dan bekerja sama dengan tim dalam menyelesaikan pekerjaan.',
  location: 'Kabupaten Tangerang',
  experienceLocation: 'BPS Kabupaten Agam, Sumatera Barat',
  phoneDisplay: '082380858172',
  phoneHref: 'tel:+6282380858172',
  whatsappHref: 'https://wa.me/6282380858172',
  email: 'laurasatrianii@gmail.com',
  emailHref: 'mailto:laurasatrianii@gmail.com',
  heroPortrait: '/assets/photos/photo_00_960x1440.jpg',
  graduationPortrait: '/assets/photos/photo_02_800x1280.jpg',
  contactPortrait: '/assets/photos/photo_12_691x1120.jpg',
};

export const KEY_METRICS = [
  {
    value: '3+ Tahun',
    label: 'Pengalaman di BPS Kabupaten Agam',
  },
  {
    value: '8 Kecamatan',
    label: 'Pemetaan Wilkerstat Menggunakan QGIS',
  },
  {
    value: '3.30 / 4.00',
    label: 'IPK Sarjana Statistika — Universitas Terbuka',
  },
  {
    value: 'Kemnaker RI',
    label: 'Pelatihan Resmi Petugas K3 Konstruksi',
  },
];

export const CORE_COMPETENCIES = [
  {
    title: 'Pemetaan Spasial (QGIS)',
    detail: 'Digitalisasi peta wilayah kerja statistik (wilkerstat), pembaruan poligon SLS, dan verifikasi batas administrasi.',
  },
  {
    title: 'Pendataan & Koordinasi Lapangan',
    detail: 'Pengumpulan data primer, briefing petugas lapangan, dan koordinasi bersama pengawas untuk akurasi responden.',
  },
  {
    title: 'Entri, Validasi & Quality Control',
    detail: 'Pemeriksaan konsistensi data hasil survei, identifikasi anomali, dan penyelesaian temuan bersama tim pengolahan.',
  },
  {
    title: 'Keselamatan & Kesehatan Kerja (K3)',
    detail: 'Penerapan prosedur keselamatan konstruksi, inspeksi APD, penanganan P3K, serta mitigasi risiko kerja.',
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'ut-s1',
    institution: 'Universitas Terbuka',
    period: '2024 – 2026',
    degree: 'Sarjana Statistika (S1)',
    gpa: '3.30',
    scale: '4.00',
    notes: 'Studi lanjut sembari berkarier aktif dalam pengolahan data dan pemetaan statistik di BPS Kabupaten Agam.',
  },
  {
    id: 'unp-d3',
    institution: 'Universitas Negeri Padang',
    period: '2019 – 2022',
    degree: 'Diploma 3 Statistika (D3)',
    gpa: '3.49',
    scale: '4.00',
    notes: 'Fondasi kuat dalam metodologi survei, statistika terapan, dan analisis data kuantitatif.',
  },
];

export const EXPERIENCE_BLOCKS: ExperienceBlock[] = [
  {
    id: 'qgis-mapping',
    index: '01',
    category: 'qgis',
    title: 'Pengolahan & Pemetaan QGIS',
    subtitle: 'Pemetaan Wilayah Kerja Statistik (Wilkerstat)',
    organization: 'BPS Kabupaten Agam',
    summary:
      'Melakukan pemetaan wilayah kerja statistik (wilkerstat) di 8 kecamatan Kabupaten Agam menggunakan QGIS, termasuk pembaruan data spasial dan batas administrasi secara presisi.',
    highlights: [
      {
        label: 'Cakupan Wilayah',
        detail: '8 kecamatan di Kabupaten Agam, mencakup batas nagari/desa, jorong, hingga Satuan Lingkungan Setempat (SLS).',
      },
      {
        label: 'Presisi Data Spasial',
        detail: 'Pembaruan garis batas wilayah, titik bangunan, serta tata letak peta kerja standar Badan Pusat Statistik.',
      },
    ],
    tools: 'QGIS Software · Peta Wilkerstat BPS · Digitasi Spasial',
  },
  {
    id: 'field-office-validation',
    index: '02',
    category: 'pendataan',
    title: 'Pendataan, Entri & Validasi Data',
    subtitle: 'Field Collection, Survey & Quality Control',
    organization: 'BPS Kabupaten Agam',
    summary:
      'Mengelola alur data statistik dari pengumpulan informasi primer di lapangan hingga proses verifikasi dan pembersihan data di kantor.',
    highlights: [
      {
        label: 'Field Collection & Survey',
        detail:
          'Melaksanakan pengumpulan data primer serta berkoordinasi aktif dengan petugas lapangan dan pengawas guna memastikan akurasi data responden.',
      },
      {
        label: 'Office Processing & Quality Control',
        detail:
          'Melakukan entri, pemeriksaan, dan validasi data hasil lapangan. Mengidentifikasi inkonsistensi data serta menyelesaikan temuan bersama tim pengolahan agar siap dianalisis.',
      },
    ],
    tools: 'Survei Primer · Koordinasi Tim · Data Entry & Quality Control',
  },
];

export const K3_CERTIFICATION = {
  title: 'Petugas K3 Konstruksi',
  subtitle: 'Pelatihan Resmi Kemnaker',
  provider: 'Skillhub · Pelatihan resmi Kemnaker',
  bnspTitle: 'Sertifikasi BNSP',
  bnspStatus: 'Dalam proses penerbitan',
  description:
    'Mengikuti pelatihan komprehensif Petugas Keselamatan dan Kesehatan Kerja (K3) Konstruksi dengan materi praktik penggunaan Alat Pelindung Diri (APD), Full Body Harness, Alat Pemadam Api Ringan (APAR), dan Pertolongan Pertama Pada Kecelakaan (P3K).',
};

export const DOCUMENTATION_ITEMS: DocumentationItem[] = [
  {
    id: 'doc-wilkerstat-map',
    category: 'qgis',
    categoryLabel: 'Pemetaan QGIS',
    title: 'Peta Wilkerstat RK 01 Kandis Bulaan',
    context: 'Kecamatan Lubuk Basung · Kabupaten Agam',
    description:
      'Output peta wilayah kerja statistik (Peta WS) skala 1:4638 lengkap dengan batas administrasi SLS, titik bangunan, legenda standar BPS, dan kode QR lokasi.',
    imageSrc: '/assets/photos/photo_03_453x640.jpg',
    aspectClass: 'aspect-[3/4]',
    objectPosition: 'object-top',
  },
  {
    id: 'doc-qgis-workspace',
    category: 'qgis',
    categoryLabel: 'Pemetaan QGIS',
    title: 'Pengolahan Layer Spasial di QGIS',
    context: 'Workflow Digitasi & Pembaruan Batas',
    description:
      'Proses penyuntingan dan pemutakhiran data poligon serta citra satelit pada perangkat lunak QGIS untuk memastikan kesesuaian batas wilayah kerja statistik.',
    imageSrc: '/assets/photos/photo_04_qgis_clean.jpg',
    aspectClass: 'aspect-[4/3]',
    objectPosition: 'object-center',
  },
  {
    id: 'doc-field-survey',
    category: 'pendataan',
    categoryLabel: 'Pendataan & Validasi',
    title: 'Pengumpulan Data Primer Lapangan',
    context: 'Wawancara Responden & Verifikasi Langsung',
    description:
      'Pelaksanaan pendataan langsung ke lapangan bersama responden guna memperoleh data primer yang akurat dan sesuai kondisi aktual.',
    imageSrc: '/assets/photos/photo_07_672x896.jpg',
    aspectClass: 'aspect-[3/4]',
    objectPosition: 'object-center',
  },
  {
    id: 'doc-sakernas-training',
    category: 'pendataan',
    categoryLabel: 'Pendataan & Validasi',
    title: 'Koordinasi & Pelatihan Survei BPS',
    context: 'BPS Kabupaten Agam · Briefing Petugas',
    description:
      'Sesi koordinasi bersama pengawas dan petugas lapangan dalam rangka penyamaan konsep, definisi operasional, dan tata cara pencacahan survei.',
    imageSrc: '/assets/photos/photo_05_572x354.jpg',
    aspectClass: 'aspect-[16/10]',
    objectPosition: 'object-center',
  },
  {
    id: 'doc-office-qc',
    category: 'pendataan',
    categoryLabel: 'Pendataan & Validasi',
    title: 'Pemeriksaan & Validasi Data Tim Pengolahan',
    context: 'Office Processing & Quality Control',
    description:
      'Proses review dokumen lapangan, verifikasi peta kerja, dan penyelesaian temuan inkonsistensi data bersama tim pengolahan agar data siap dianalisis.',
    imageSrc: '/assets/photos/photo_06_564x334.jpg',
    aspectClass: 'aspect-[16/10]',
    objectPosition: 'object-center',
  },
  {
    id: 'doc-k3-p3k',
    category: 'k3',
    categoryLabel: 'Sertifikasi K3',
    title: 'Praktik Penanganan P3K Konstruksi',
    context: 'Pelatihan Resmi Kemnaker · Skillhub',
    description:
      'Simulasi pemeriksaan perlengkapan kotak P3K dan prosedur tanggap darurat medis ringan di area kerja konstruksi menggunakan APD lengkap.',
    imageSrc: '/assets/photos/photo_08_432x768.jpg',
    aspectClass: 'aspect-[3/4]',
    objectPosition: 'object-top',
  },
  {
    id: 'doc-k3-apar',
    category: 'k3',
    categoryLabel: 'Sertifikasi K3',
    title: 'Simulasi Penggunaan APAR',
    context: 'Mitigasi Kebakaran & Keselamatan Kerja',
    description:
      'Praktik pengecekan tekanan dan tata cara pengoperasian Alat Pemadam Api Ringan (APAR) untuk kesiapsiagaan kebakaran di proyek.',
    imageSrc: '/assets/photos/photo_09_481x800.jpg',
    aspectClass: 'aspect-[3/4]',
    objectPosition: 'object-top',
  },
  {
    id: 'doc-k3-harness',
    category: 'k3',
    categoryLabel: 'Sertifikasi K3',
    title: 'Inspeksi & Pemasangan Full Body Harness',
    context: 'Keselamatan Kerja di Ketinggian',
    description:
      'Pemeriksaan kelayakan tali pengaman dan praktik pemasangan Full Body Harness sesuai standar prosedur keselamatan kerja konstruksi.',
    imageSrc: '/assets/photos/photo_10_504x896.jpg',
    aspectClass: 'aspect-[3/4]',
    objectPosition: 'object-top',
  },
  {
    id: 'doc-k3-discussion',
    category: 'k3',
    categoryLabel: 'Sertifikasi K3',
    title: 'Diskusi & Evaluasi Materi K3',
    context: 'Briefing Kelompok Pelatihan K3',
    description:
      'Pembahasan studi kasus identifikasi bahaya (hazard identification) dan pengendalian risiko bersama instruktur serta peserta pelatihan.',
    imageSrc: '/assets/photos/photo_11_640x360.jpg',
    aspectClass: 'aspect-[16/10]',
    objectPosition: 'object-center',
  },
];
