import { ArrowRight, MapPin } from 'lucide-react';
import { KEY_METRICS, PROFILE } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onOpenPortrait: () => void;
}

export function HeroSection({ onOpenPortrait }: HeroSectionProps) {
  return (
    <section id="beranda" className="bg-white border-b border-[#E5E8E6]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 pb-12 lg:pt-14 lg:pb-16">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy & Primary Action */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#223C37] text-white rounded-2xl p-7 sm:p-10 lg:p-12">
            <div>
              <p className="text-xs sm:text-sm text-white/75 tracking-wide mb-5">
                {PROFILE.kicker}
              </p>

              <h1
                className="font-display font-bold tracking-tight text-white leading-[1.08] mb-5"
                style={{
                  fontSize: 'clamp(2.25rem, 4.2vw, 3.6rem)',
                  textWrap: 'balance',
                }}
              >
                {PROFILE.name}
              </h1>

              <p className="text-lg sm:text-xl font-medium text-white/90 leading-snug mb-5 max-w-xl">
                {PROFILE.headline}
              </p>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
                Lulusan S1 Statistika Universitas Terbuka dengan pengalaman lebih dari 3 tahun di BPS Kabupaten Agam dalam pendataan lapangan, validasi kualitas data, dan pemetaan wilayah kerja statistik berbasis QGIS.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#pengalaman"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#182220] bg-white hover:bg-[#F5F6F4] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span>Lihat Pengalaman</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#dokumentasi"
                  className="inline-flex items-center px-4 py-2.5 text-sm font-medium text-white/90 hover:text-white border border-white/25 hover:border-white/50 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Galeri Dokumentasi
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-white/75 whitespace-nowrap shrink-0">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>{PROFILE.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Matching-Height Portrait */}
          <div className="lg:col-span-5 flex">
            <button
              type="button"
              onClick={onOpenPortrait}
              className="group relative w-full min-h-[380px] lg:min-h-0 lg:h-full rounded-2xl overflow-hidden bg-[#F5F6F4] border border-[#E5E8E6] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#223C37]"
              aria-label="Perbesar foto profil Laura Satriani"
            >
              <ResilientImage
                src={PROFILE.heroPortrait}
                alt="Potret profesional Laura Satriani"
                title="Laura Satriani — Statistika"
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/75 via-black/30 to-transparent text-white">
                <p className="text-xs text-white/80">Portofolio {PROFILE.year}</p>
                <p className="text-sm font-semibold text-white">
                  {PROFILE.name} · {PROFILE.discipline}
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Full-Width 4-Column Quantitative Proof Strip */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 border border-[#E5E8E6] rounded-xl bg-[#F5F6F4] divide-y lg:divide-y-0 lg:divide-x divide-[#E5E8E6]">
          {KEY_METRICS.map((metric) => (
            <div key={metric.label} className="p-5 sm:p-6">
              <p className="font-mono-tabular text-xl sm:text-2xl font-semibold text-[#182220] tracking-tight">
                {metric.value}
              </p>
              <p className="mt-1.5 text-xs sm:text-sm text-[#4A5955] leading-snug">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
