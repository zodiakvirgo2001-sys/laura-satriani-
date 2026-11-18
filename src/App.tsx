/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo, useState } from 'react';
import { AboutEducationSection } from './components/AboutEducationSection';
import { CertificationSection } from './components/CertificationSection';
import { ContactFooterSection } from './components/ContactFooterSection';
import { ExperienceGallerySection } from './components/ExperienceGallerySection';
import { HeroSection } from './components/HeroSection';
import { LightboxModal, LightboxSlide } from './components/LightboxModal';
import { Navbar } from './components/Navbar';
import { DOCUMENTATION_ITEMS, PROFILE } from './data/portfolioData';

export default function App() {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number | null>(null);

  const allSlides: LightboxSlide[] = useMemo(() => {
    const portraitSlides: LightboxSlide[] = [
      {
        id: 'hero-portrait',
        categoryLabel: 'Profil',
        title: `${PROFILE.name} — ${PROFILE.discipline}`,
        context: `Portofolio ${PROFILE.year} · ${PROFILE.location}`,
        description:
          'Lulusan S1 Statistika Universitas Terbuka dengan pengalaman lebih dari 3 tahun di BPS Kabupaten Agam.',
        imageSrc: PROFILE.heroPortrait,
      },
      {
        id: 'graduation-portrait',
        categoryLabel: 'Pendidikan',
        title: 'Wisuda Universitas Negeri Padang',
        context: 'Diploma 3 Statistika (2019 – 2022) · IPK 3.49 / 4.00',
        description:
          'Momen kelulusan Diploma 3 Statistika di Universitas Negeri Padang sebelum melanjutkan jenjang Sarjana Statistika di Universitas Terbuka.',
        imageSrc: PROFILE.graduationPortrait,
      },
      {
        id: 'contact-portrait',
        categoryLabel: 'Profil',
        title: PROFILE.name,
        context: `Kontak & Kolaborasi · ${PROFILE.location}`,
        description:
          'Terbuka untuk kesempatan kerja dan kolaborasi di bidang statistika, pemetaan QGIS, validasi data, maupun K3 konstruksi.',
        imageSrc: PROFILE.contactPortrait,
      },
    ];

    const docSlides: LightboxSlide[] = DOCUMENTATION_ITEMS.map((doc) => ({
      id: doc.id,
      categoryLabel: doc.categoryLabel,
      title: doc.title,
      context: doc.context,
      description: doc.description,
      imageSrc: doc.imageSrc,
    }));

    return [...portraitSlides, ...docSlides];
  }, []);

  const openSlideById = (slideId: string) => {
    const idx = allSlides.findIndex((s) => s.id === slideId);
    if (idx !== -1) {
      setActiveSlideIndex(idx);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#182220] selection:bg-[#223C37] selection:text-white">
      <Navbar />

      <main>
        <HeroSection onOpenPortrait={() => openSlideById('hero-portrait')} />
        <AboutEducationSection
          onOpenGraduationPhoto={() => openSlideById('graduation-portrait')}
        />
        <ExperienceGallerySection onOpenLightbox={openSlideById} />
        <CertificationSection onOpenLightbox={openSlideById} />
        <ContactFooterSection
          onOpenContactPortrait={() => openSlideById('contact-portrait')}
        />
      </main>

      <LightboxModal
        slides={allSlides}
        activeIndex={activeSlideIndex}
        onClose={() => setActiveSlideIndex(null)}
        onSelectIndex={setActiveSlideIndex}
      />
    </div>
  );
}
