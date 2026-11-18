import { useMemo, useState } from 'react';
import { Layers, Map as MapIcon, Maximize2, ClipboardCheck } from 'lucide-react';
import {
  DOCUMENTATION_ITEMS,
  EXPERIENCE_BLOCKS,
  GalleryCategory,
} from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ExperienceGallerySectionProps {
  onOpenLightbox: (docId: string) => void;
}

const FILTER_TABS: { id: GalleryCategory; label: string }[] = [
  { id: 'semua', label: 'Semua Dokumentasi' },
  { id: 'qgis', label: 'Pemetaan QGIS' },
  { id: 'pendataan', label: 'Pendataan & Validasi' },
  { id: 'k3', label: 'Sertifikasi K3' },
];

export function ExperienceGallerySection({
  onOpenLightbox,
}: ExperienceGallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('semua');

  const filteredDocs = useMemo(() => {
    if (activeCategory === 'semua') return DOCUMENTATION_ITEMS;
    return DOCUMENTATION_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="pengalaman" className="py-16 lg:py-20 bg-white border-b border-[#E5E8E6]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <p className="font-mono-tabular text-xs font-medium text-[#4A5955] mb-2">
            04 · Pengalaman Kerja — BPS Kabupaten Agam
          </p>
          <h2
            className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#182220] leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Pemetaan Spasial QGIS, Pendataan Lapangan & Validasi Data
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4A5955] leading-relaxed">
            Lebih dari 3 tahun berkontribusi aktif dalam operasional statistik di Badan Pusat Statistik Kabupaten Agam—dari pengumpulan data primer hingga pemutakhiran peta wilayah kerja.
          </p>
        </div>

        {/* Two Core Experience Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {EXPERIENCE_BLOCKS.map((exp) => {
            const Icon = exp.category === 'qgis' ? MapIcon : ClipboardCheck;
            return (
              <article
                key={exp.id}
                className="bg-[#F5F6F4] border border-[#E5E8E6] rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-mono-tabular text-xs font-medium text-[#4A5955]">
                      {exp.index} · {exp.organization}
                    </span>
                    <Icon className="w-5 h-5 text-[#223C37] shrink-0" strokeWidth={1.75} />
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#182220]">
                    {exp.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#223C37]">
                    {exp.subtitle}
                  </p>

                  <p className="mt-4 text-sm text-[#354440] leading-relaxed">
                    {exp.summary}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#E5E8E6] space-y-4">
                    {exp.highlights.map((h) => (
                      <div key={h.label}>
                        <h4 className="text-xs font-semibold tracking-wide text-[#182220]">
                          {h.label}
                        </h4>
                        <p className="mt-1 text-sm text-[#4A5955] leading-relaxed">
                          {h.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5E8E6] flex items-center justify-between gap-4">
                  <span className="text-xs text-[#4A5955]">{exp.tools}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory(exp.category);
                      document
                        .getElementById('dokumentasi')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#223C37] hover:underline whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#223C37]"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Lihat Foto</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Interactive Documentation Gallery */}
        <div id="dokumentasi" className="pt-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <p className="font-mono-tabular text-xs font-medium text-[#4A5955] mb-2">
                05 · Dokumentasi Kerja & Pelatihan
              </p>
              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#182220]">
                Bukti Lapangan, Peta Wilkerstat & Praktik K3
              </h3>
              <p className="mt-1 text-sm text-[#4A5955]">
                Klik foto mana saja untuk melihat resolusi penuh langsung di browser tanpa mengunduh file.
              </p>
            </div>

            {/* Interactive Segmented Filter Tabs */}
            <div
              className="flex flex-wrap items-center gap-1 p-1 bg-[#F5F6F4] border border-[#E5E8E6] rounded-xl self-start md:self-auto"
              role="tablist"
              aria-label="Filter dokumentasi portofolio"
            >
              {FILTER_TABS.map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#223C37] ${
                      isActive
                        ? 'bg-[#223C37] text-white'
                        : 'text-[#4A5955] hover:text-[#182220] hover:bg-white/60'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bento / Editorial Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocs.map((doc) => (
              <button
                key={doc.id}
                type="button"
                onClick={() => onOpenLightbox(doc.id)}
                className="group text-left bg-white border border-[#E5E8E6] hover:border-[#223C37]/40 rounded-2xl overflow-hidden flex flex-col transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#223C37]"
              >
                <div className="relative w-full aspect-[4/3] bg-[#F5F6F4] overflow-hidden border-b border-[#E5E8E6]">
                  <ResilientImage
                    src={doc.imageSrc}
                    alt={doc.title}
                    title={doc.title}
                    className={`w-full h-full object-cover ${
                      doc.objectPosition || 'object-center'
                    } transition-transform duration-300 group-hover:scale-[1.03]`}
                  />
                  <span
                    className="absolute top-3 right-3 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-black/55 text-white opacity-90 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-[#4A5955] mb-1.5">
                      {doc.categoryLabel} · {doc.context}
                    </p>
                    <h4 className="font-display text-base font-bold text-[#182220] leading-snug group-hover:text-[#223C37] transition-colors">
                      {doc.title}
                    </h4>
                    <p className="mt-2 text-sm text-[#4A5955] leading-relaxed line-clamp-3">
                      {doc.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
