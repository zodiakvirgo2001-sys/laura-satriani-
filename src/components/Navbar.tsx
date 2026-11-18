import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#pendidikan', label: 'Pendidikan' },
  { href: '#pengalaman', label: 'Pengalaman' },
  { href: '#sertifikasi', label: 'Sertifikasi' },
  { href: '#kontak', label: 'Kontak' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E8E6]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#beranda"
          className="font-display text-lg font-bold tracking-tight text-[#182220] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#223C37] rounded-sm"
        >
          Laura Satriani
        </a>

        {/* Zone 2: 5 concise single-line text nav links */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A5955]"
          aria-label="Navigasi utama"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#182220] transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#223C37] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#223C37]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#kontak"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#223C37] hover:bg-[#192D29] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#223C37]"
          >
            Hubungi Saya
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-[#182220] hover:bg-[#F5F6F4] rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#223C37]"
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#E5E8E6] bg-white px-5 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-medium text-[#354440] hover:text-[#182220]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#kontak"
              onClick={() => setMobileOpen(false)}
              className="inline-flex w-full items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-[#223C37] hover:bg-[#192D29] rounded-lg transition-colors"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
