import { FormEvent, useState } from 'react';
import {
  Check,
  Copy,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Printer,
  Send,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ContactFooterSectionProps {
  onOpenContactPortrait: () => void;
}

export function ContactFooterSection({
  onOpenContactPortrait,
}: ContactFooterSectionProps) {
  const [copiedField, setCopiedField] = useState<'phone' | 'email' | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [messageText, setMessageText] = useState('');
  const [formNotice, setFormNotice] = useState<string | null>(null);

  const handleCopy = async (value: string, field: 'phone' | 'email') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setCopiedField(null);
    }
  };

  const handleWhatsAppSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !messageText.trim()) {
      setFormNotice('Mohon isi nama dan pesan Anda terlebih dahulu.');
      return;
    }
    const orgLine = senderOrg.trim() ? ` (${senderOrg.trim()})` : '';
    const compiled = `Halo Laura Satriani, saya ${senderName.trim()}${orgLine}. ${messageText.trim()}`;
    const url = `${PROFILE.whatsappHref}?text=${encodeURIComponent(compiled)}`;
    setFormNotice('Membuka WhatsApp dengan pesan yang sudah disiapkan...');
    window.location.href = url;
  };

  const handleEmailCompose = () => {
    const subject = senderName.trim()
      ? `Kolaborasi / Peluang Kerja — ${senderName.trim()}`
      : 'Kolaborasi / Peluang Kerja — Portofolio Laura Satriani';
    const body = messageText.trim()
      ? `Halo Laura,\n\nSaya ${senderName.trim() || '[Nama]'}${
          senderOrg.trim() ? ` dari ${senderOrg.trim()}` : ''
        }.\n\n${messageText.trim()}`
      : 'Halo Laura,\n\nSaya tertarik berdiskusi mengenai peluang kolaborasi atau posisi yang relevan dengan latar belakang Statistika, Pemetaan QGIS, dan K3 Konstruksi.';
    window.location.href = `${PROFILE.emailHref}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <section id="kontak" className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Column: Direct Contact & Quick Composer */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <p className="font-mono-tabular text-xs font-medium text-[#4A5955] mb-2">
                  07 · Kontak Saya
                </p>
                <h2
                  className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#182220] leading-tight"
                  style={{ textWrap: 'balance' }}
                >
                  Mari Berkolaborasi!
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#4A5955] leading-relaxed max-w-xl">
                  Terbuka untuk kesempatan kerja maupun kolaborasi proyek di bidang pengolahan data statistik, pemetaan spasial QGIS, survei lapangan, serta pengawasan K3 konstruksi.
                </p>

                {/* Direct Contact Rows */}
                <div className="mt-8 border-t border-[#E5E8E6]">
                  {/* Phone / WhatsApp */}
                  <div className="py-4 border-b border-[#E5E8E6] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-[#223C37] text-white flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-[#4A5955]">Telepon / WhatsApp</p>
                        <a
                          href={PROFILE.whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono-tabular text-base font-semibold text-[#182220] hover:text-[#223C37] transition-colors"
                        >
                          {PROFILE.phoneDisplay}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleCopy(PROFILE.phoneDisplay, 'phone')}
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#354440] bg-[#F5F6F4] hover:bg-[#E8ECEA] border border-[#E5E8E6] rounded-lg transition-colors whitespace-nowrap shrink-0"
                      >
                        {copiedField === 'phone' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#223C37]" />
                            <span>Tersalin</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Salin</span>
                          </>
                        )}
                      </button>
                      <a
                        href={PROFILE.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-[#223C37] hover:bg-[#192D29] rounded-lg transition-colors whitespace-nowrap shrink-0"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Chat WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="py-4 border-b border-[#E5E8E6] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-[#223C37] text-white flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-[#4A5955]">Email</p>
                        <a
                          href={PROFILE.emailHref}
                          className="text-sm sm:text-base font-semibold text-[#182220] hover:text-[#223C37] transition-colors break-all"
                        >
                          {PROFILE.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleCopy(PROFILE.email, 'email')}
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#354440] bg-[#F5F6F4] hover:bg-[#E8ECEA] border border-[#E5E8E6] rounded-lg transition-colors whitespace-nowrap shrink-0"
                      >
                        {copiedField === 'email' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#223C37]" />
                            <span>Tersalin</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Salin</span>
                          </>
                        )}
                      </button>
                      <a
                        href={PROFILE.emailHref}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#182220] bg-[#F5F6F4] hover:bg-[#E8ECEA] border border-[#E5E8E6] rounded-lg transition-colors whitespace-nowrap shrink-0"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Kirim Email</span>
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="py-4 border-b border-[#E5E8E6] flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#F5F6F4] border border-[#E5E8E6] text-[#223C37] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-[#4A5955]">Domisili</p>
                      <p className="text-sm sm:text-base font-semibold text-[#182220]">
                        {PROFILE.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Direct Message Composer */}
                <form
                  onSubmit={handleWhatsAppSubmit}
                  className="mt-8 bg-[#F5F6F4] border border-[#E5E8E6] rounded-2xl p-5 sm:p-6 space-y-4 no-print"
                >
                  <div>
                    <h3 className="font-display text-base font-bold text-[#182220]">
                      Kirim Pesan Langsung
                    </h3>
                    <p className="text-xs text-[#4A5955] mt-0.5">
                      Tulis pesan singkat untuk langsung terhubung lewat WhatsApp atau Email.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="contact-name" className="sr-only">
                        Nama Lengkap
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Nama Anda"
                        value={senderName}
                        onChange={(e) => {
                          setSenderName(e.target.value);
                          setFormNotice(null);
                        }}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D7DDD9] rounded-lg text-[#182220] placeholder:text-[#6B7A75] focus:outline-none focus:border-[#223C37]"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-org" className="sr-only">
                        Instansi atau Perusahaan (Opsional)
                      </label>
                      <input
                        id="contact-org"
                        type="text"
                        placeholder="Instansi / Perusahaan (opsional)"
                        value={senderOrg}
                        onChange={(e) => setSenderOrg(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D7DDD9] rounded-lg text-[#182220] placeholder:text-[#6B7A75] focus:outline-none focus:border-[#223C37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-msg" className="sr-only">
                      Pesan
                    </label>
                    <textarea
                      id="contact-msg"
                      rows={3}
                      placeholder="Sampaikan kebutuhan rekrutmen, proyek pemetaan QGIS, atau kolaborasi..."
                      value={messageText}
                      onChange={(e) => {
                        setMessageText(e.target.value);
                        setFormNotice(null);
                      }}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D7DDD9] rounded-lg text-[#182220] placeholder:text-[#6B7A75] focus:outline-none focus:border-[#223C37]"
                    />
                  </div>

                  {formNotice && (
                    <p className="text-xs font-medium text-[#223C37]" role="status">
                      {formNotice}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[#223C37] hover:bg-[#192D29] rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                      <Send className="w-4 h-4" />
                      <span>Kirim via WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleEmailCompose}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#182220] bg-white hover:bg-[#E8ECEA] border border-[#D7DDD9] rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Buka di Email</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column: Editorial Portrait */}
            <div className="lg:col-span-5 flex">
              <button
                type="button"
                onClick={onOpenContactPortrait}
                className="group relative w-full min-h-[380px] lg:min-h-0 lg:h-full rounded-2xl overflow-hidden bg-[#F5F6F4] border border-[#E5E8E6] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#223C37]"
                aria-label="Perbesar foto Laura Satriani"
              >
                <ResilientImage
                  src={PROFILE.contactPortrait}
                  alt="Laura Satriani — Kabupaten Tangerang"
                  title="Laura Satriani"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/75 via-black/30 to-transparent text-white">
                  <p className="text-xs text-white/80">Terima kasih telah mengunjungi portofolio saya</p>
                  <p className="text-lg font-display font-bold text-white mt-0.5">
                    {PROFILE.name}
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quiet Editorial Footer */}
      <footer className="bg-[#F5F6F4] border-t border-[#E5E8E6] py-8">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-display text-sm font-bold text-[#182220]">
              {PROFILE.name}
            </p>
            <p className="text-xs text-[#4A5955] mt-0.5">
              Statistika · Pemetaan QGIS · Petugas K3 Konstruksi · {PROFILE.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#4A5955] no-print">
            <a href="#beranda" className="hover:text-[#182220] transition-colors">
              Kembali ke Atas
            </a>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 hover:text-[#182220] transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak Halaman</span>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
