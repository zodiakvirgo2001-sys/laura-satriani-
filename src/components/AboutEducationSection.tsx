import { GraduationCap, Maximize2 } from 'lucide-react';
import { CORE_COMPETENCIES, EDUCATION_LIST, PROFILE } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface AboutEducationSectionProps {
  onOpenGraduationPhoto: () => void;
}

export function AboutEducationSection({
  onOpenGraduationPhoto,
}: AboutEducationSectionProps) {
  return (
    <>
      {/* 02. Tentang Saya */}
      <section id="tentang" className="py-16 lg:py-20 bg-white border-b border-[#E5E8E6]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <p className="font-mono-tabular text-xs font-medium text-[#4A5955] mb-2">
                02 · Tentang Saya
              </p>
              <h2
                className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#182220] leading-tight"
                style={{ textWrap: 'balance' }}
              >
                Ketelitian data lapangan hingga pemetaan spasial
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#354440] leading-relaxed">
                {PROFILE.about}
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="border-t border-[#E5E8E6]">
                {CORE_COMPETENCIES.map((item, idx) => (
                  <div
                    key={item.title}
                    className="py-5 border-b border-[#E5E8E6] grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
                  >
                    <div className="sm:col-span-5 flex items-baseline gap-3">
                      <span className="font-mono-tabular text-xs text-[#6B7A75]">
                        0{idx + 1}.
                      </span>
                      <h3 className="font-display text-base font-semibold text-[#182220]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="sm:col-span-7 text-sm text-[#4A5955] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Pendidikan */}
      <section id="pendidikan" className="py-16 lg:py-20 bg-[#F5F6F4] border-b border-[#E5E8E6]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left: Academic History */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <p className="font-mono-tabular text-xs font-medium text-[#4A5955] mb-2">
                  03 · Pendidikan
                </p>
                <h2
                  className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#182220] leading-tight mb-8"
                  style={{ textWrap: 'balance' }}
                >
                  Latar Belakang Akademik Statistika
                </h2>

                <div className="space-y-6">
                  {EDUCATION_LIST.map((edu) => (
                    <article
                      key={edu.id}
                      className="bg-white border border-[#E5E8E6] rounded-xl p-6 sm:p-7"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                        <span className="text-xs font-mono-tabular text-[#4A5955]">
                          {edu.period}
                        </span>
                        <span className="font-mono-tabular text-sm font-semibold text-[#223C37]">
                          IPK {edu.gpa} / {edu.scale}
                        </span>
                      </div>

                      <h3 className="font-display text-xl font-bold text-[#182220]">
                        {edu.institution}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-[#223C37] flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 shrink-0" />
                        <span>{edu.degree}</span>
                      </p>
                      <p className="mt-3 text-sm text-[#4A5955] leading-relaxed">
                        {edu.notes}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Graduation Portrait */}
            <div className="lg:col-span-5 flex">
              <button
                type="button"
                onClick={onOpenGraduationPhoto}
                className="group relative w-full min-h-[360px] lg:min-h-0 lg:h-full rounded-2xl overflow-hidden bg-white border border-[#E5E8E6] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#223C37]"
                aria-label="Perbesar foto wisuda Laura Satriani"
              >
                <ResilientImage
                  src={PROFILE.graduationPortrait}
                  alt="Wisuda Diploma 3 Statistika Universitas Negeri Padang - Laura Satriani"
                  title="Wisuda Statistika — Universitas Negeri Padang"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/75 via-black/30 to-transparent text-white flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs text-white/80">2019 – 2022 · IPK 3.49 / 4.00</p>
                    <p className="text-sm font-semibold text-white">
                      Wisuda Universitas Negeri Padang
                    </p>
                  </div>
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/15 text-white shrink-0">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
