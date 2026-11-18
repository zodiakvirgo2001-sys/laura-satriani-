import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  fallbackClassName?: string;
}

export function ResilientImage({
  src,
  alt,
  title,
  className = 'w-full h-full object-cover',
  fallbackClassName = '',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center gap-2 bg-[#F1F3F2] text-[#223C37] p-6 text-center ${fallbackClassName}`}
        role="img"
        aria-label={alt}
      >
        <ImageIcon className="w-7 h-7 opacity-60" strokeWidth={1.5} />
        <span className="text-sm font-medium text-[#223C37]/80 max-w-[220px] leading-snug">
          {title || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
}
