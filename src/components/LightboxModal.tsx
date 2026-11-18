import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

export interface LightboxSlide {
  id: string;
  title: string;
  context: string;
  description: string;
  imageSrc: string;
  categoryLabel: string;
}

interface LightboxModalProps {
  slides: LightboxSlide[];
  activeIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function LightboxModal({
  slides,
  activeIndex,
  onClose,
  onSelectIndex,
}: LightboxModalProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const isOpen = activeIndex !== null && slides[activeIndex] !== undefined;
  const current = isOpen ? slides[activeIndex] : null;

  useEffect(() => {
    setIsZoomed(false);
  }, [activeIndex]);

  useEffect(() => {
    if (!isOpen || activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onSelectIndex((activeIndex + 1) % slides.length);
      } else if (e.key === 'ArrowLeft') {
        onSelectIndex((activeIndex - 1 + slides.length) % slides.length);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, activeIndex, slides.length, onClose, onSelectIndex]);

  if (!isOpen || !current || activeIndex === null) return null;

  const handlePrev = () => {
    onSelectIndex((activeIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    onSelectIndex((activeIndex + 1) % slides.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0D1614]/92 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-6 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={current.title}
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="flex items-center justify-between gap-4 text-white max-w-6xl w-full mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-w-0">
          <p className="text-xs text-white/70 font-mono-tabular">
            {current.categoryLabel} · {activeIndex + 1} / {slides.length}
          </p>
          <h3 className="text-base sm:text-lg font-semibold truncate text-white">
            {current.title}
          </h3>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setIsZoomed((z) => !z)}
            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-white whitespace-nowrap shrink-0"
            aria-label={isZoomed ? 'Perkecil gambar' : 'Perbesar gambar'}
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            <span className="hidden sm:inline">{isZoomed ? 'Normal' : 'Perbesar'}</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center w-10 h-10 text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-white shrink-0"
            aria-label="Tutup tampilan foto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Media Frame */}
      <div
        className="relative flex-1 flex items-center justify-center my-4 overflow-auto max-w-6xl w-full mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {slides.length > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            className="hidden sm:inline-flex items-center justify-center w-11 h-11 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors mr-4 shrink-0 focus-visible:outline-2 focus-visible:outline-white"
            aria-label="Foto sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        <div
          className={`relative rounded-xl overflow-hidden bg-[#14221F] border border-white/10 transition-transform duration-200 ${
            isZoomed ? 'max-h-none cursor-zoom-out' : 'max-h-[70vh] cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed((z) => !z)}
        >
          <ResilientImage
            src={current.imageSrc}
            alt={current.title}
            title={current.title}
            className={
              isZoomed
                ? 'w-auto max-w-none h-[85vh] object-contain'
                : 'max-h-[70vh] w-auto max-w-full object-contain'
            }
          />
        </div>

        {slides.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            className="hidden sm:inline-flex items-center justify-center w-11 h-11 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors ml-4 shrink-0 focus-visible:outline-2 focus-visible:outline-white"
            aria-label="Foto berikutnya"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Bottom Caption */}
      <div
        className="max-w-3xl w-full mx-auto text-center text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-xs text-white/75 mb-1">{current.context}</p>
        <p className="text-sm text-white/90 leading-relaxed">{current.description}</p>
        {slides.length > 1 && (
          <div className="flex sm:hidden items-center justify-center gap-3 mt-3">
            <button
              type="button"
              onClick={handlePrev}
              className="px-4 py-2 text-xs font-medium bg-white/10 hover:bg-white/20 rounded-lg text-white whitespace-nowrap shrink-0"
            >
              Sebelumnya
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 text-xs font-medium bg-white/10 hover:bg-white/20 rounded-lg text-white whitespace-nowrap shrink-0"
            >
              Berikutnya
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
