import { CheckCircle2, Clock, HardHat, Maximize2 } from 'lucide-react';
import { DOCUMENTATION_ITEMS, K3_CERTIFICATION } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface CertificationSectionProps {
  onOpenLightbox: (docId: string) => void;
}

export function CertificationSection({ onOpenLightbox }: CertificationSectionProps) {
  const k3Photos = DOCUMENTATION_ITEMS.filter((item) => item.category === 'k3');

  return (
    <section id="sertifikasi" className="py-16 lg:py-20 bg-[#F5F6F4] border-b border-[#E5E8E6]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Credential Details */}
          <div className="lg:col-span-5">
            <p className="font-mono-tabular text-xs font-medium text-[#4A5955] mb-2">
              06 · Sertifikasi K3
            </p>
            <h2
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#182220] leading-tight"
              style={{ textWrap: 'balance' }}
            >
              {K3_CERTIFICATION.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#354440] leading-relaxed">
              {K3_CERTIFICATION.description}
            </p>

            <div className="mt-8 space-y-4">
              {/* Credential 1 */}
              <div className="bg-white border border-[#E5E8E6] rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#223C37] text-white flex items-center justify-center shrink-0">
                  <HardHat className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#223C37]">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{K3_CERTIFICATION.subtitle}</span>
                  </div>
                  <h3 className="mt-1 font-display text-base font-bold text-[#182220]">
                    {K3_CERTIFICATION.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-[#4A5955]">
                    {K3_CERTIFICATION.provider}
                  </p>
                </div>
              </div>

              {/* Credential 2 */}
              <div className="bg-white border border-[#E5E8E6] rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#B45309]/12 text-[#B45309] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#B45309]">
                    <span>Status: {K3_CERTIFICATION.bnspStatus}</span>
                  </div>
                  <h3 className="mt-1 font-display text-base font-bold text-[#182220]">
                    {K3_CERTIFICATION.bnspTitle}
                  </h3>
                  <p className="mt-0.5 text-sm text-[#4A5955]">
                    Pelatihan dan uji kompetensi telah diselesaikan; sertifikat resmi BNSP sedang dalam tahap penerbitan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 4 Practical Training Photos */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              {k3Photos.map((photo) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => onOpenLightbox(photo.id)}
                  className="group relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden bg-white border border-[#E5E8E6] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#223C37]"
                  aria-label={`Perbesar dokumentasi: ${photo.title}`}
                >
                  <ResilientImage
                    src={photo.imageSrc}
                    alt={photo.title}
                    title={photo.title}
                    className={`w-full h-full object-cover ${
                      photo.objectPosition || 'object-center'
                    } transition-transform duration-300 group-hover:scale-[1.03]`}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 bg-gradient-to-t from-black/80 via-black/35 to-transparent text-white flex items-end justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-[11px] text-white/80 truncate">{photo.context}</p>
                      <p className="text-xs sm:text-sm font-semibold text-white truncate">
                        {photo.title}
                      </p>
                    </div>
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-white/15 text-white shrink-0">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
