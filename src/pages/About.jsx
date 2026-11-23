import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowUpRight, GraduationCap, MapPin, BookOpen } from 'lucide-react';

const assetImages = import.meta.glob(
  '../assets/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
);

const bundledPhoto =
  Object.entries(assetImages).find(([path]) =>
    /\/(valdes|rayival)\.(jpg|jpeg|png|webp)$/i.test(path)
  )?.[1] || Object.values(assetImages)[0];

export default function About() {
  const aboutRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(bundledPhoto || '/image/valdes.jpg');
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-stagger', {
        y: 22,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'transform',
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const handleImageError = () => {
    if (imgSrc === '/image/valdes.jpg') {
      setImgSrc('/image/rayival.jpg');
    } else if (imgSrc === '/image/rayival.jpg') {
      setImgSrc('/IMAGE/RAYIVAL.JPG');
    } else {
      setImgFailed(true);
    }
  };

  const academicSpecs = [
    { label: 'Nama Lengkap', value: 'Rayival Dede Saputra' },
    { label: 'Nomor Induk Mahasiswa (NIM)', value: '2503010032' },
    { label: 'Program Studi', value: 'Teknik Informatika' },
    { label: 'Kelas / Angkatan', value: 'Kelas B · Angkatan 2025' },
    { label: 'Fakultas', value: 'Fakultas Teknik' },
    { label: 'Perguruan Tinggi', value: 'Universitas Perjuangan Tasikmalaya (UNPER)' },
    { label: 'Mata Kuliah', value: 'Sistem Operasi (Semester Ganjil 2026/2027)' },
    { label: 'Domisili', value: 'Kota Tasikmalaya, Jawa Barat' },
  ];

  const socials = [
    { name: 'GitHub', handle: '@Rayival', url: 'https://github.com/Rayival' },
    { name: 'Instagram', handle: '@ryvlds_', url: 'https://instagram.com/ryvlds_' },
    { name: 'TikTok', handle: '@ryvlzz', url: 'https://tiktok.com/@ryvlzz' },
  ];

  return (
    <div ref={aboutRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-16">
      <div className="about-stagger flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#E4E4E0] mb-8">
        <div>
          <span className="font-mono text-xs text-[#0047FF] font-semibold block mb-2">
            IDENTITAS PENYUSUN · KARTU PROFIL MAHASISWA
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0C0C0E]">
            Tentang Saya
          </h1>
        </div>
        <span className="font-mono text-xs text-[#71717A]">
          NIM 2503010032 · TI-B UNPER
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="about-stagger lg:col-span-5 bg-white border border-[#E4E4E0] rounded-3xl p-6 sm:p-8 shadow-[0_4px_24px_rgb(0,0,0,0.02)]">
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#F8F8F6] border border-[#E4E4E0] mb-6">
            {!imgFailed ? (
              <img
                src={imgSrc}
                alt="Rayival Dede Saputra"
                onError={handleImageError}
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <span className="text-5xl font-extrabold tracking-tight text-[#0C0C0E]">RDS</span>
                <span className="font-mono text-xs text-[#71717A] mt-2">2503010032</span>
              </div>
            )}

            <div className="absolute bottom-3 inset-x-3 bg-white/90 backdrop-blur-md border border-[#E4E4E0] rounded-xl px-3.5 py-2 flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold text-[#0C0C0E]">VALDES</span>
              <span className="font-mono text-[10px] text-[#0047FF] font-semibold">INFORMATICS · 25</span>
            </div>
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-[#0C0C0E]">
            Rayival Dede Saputra
          </h2>
          <p className="text-sm text-[#52525B] mt-1 flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-[#0047FF] shrink-0" />
            <span>Teknik Informatika — Kelas B</span>
          </p>
          <p className="text-xs text-[#71717A] mt-1 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#71717A] shrink-0" />
            <span>Universitas Perjuangan Tasikmalaya</span>
          </p>

          <div className="mt-7 pt-6 border-t border-[#F1F1EE] space-y-2">
            <span className="font-mono text-[11px] text-[#71717A] block mb-2.5">
              PROFIL &amp; REPOSITORI PUBLIK
            </span>
            {socials.map((soc) => (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between text-xs font-semibold text-[#0C0C0E] hover:text-[#0047FF] bg-[#F8F8F6] hover:bg-[#EEF3FF]/60 px-4 py-3 rounded-xl border border-[#E4E4E0] transition-colors"
              >
                <span>
                  {soc.name}{' '}
                  <span className="font-mono text-[#71717A] group-hover:text-[#0047FF] font-normal">
                    ({soc.handle})
                  </span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="about-stagger lg:col-span-7 space-y-6">
          <div className="bg-white border border-[#E4E4E0] rounded-3xl p-6 sm:p-10 shadow-[0_4px_24px_rgb(0,0,0,0.02)]">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-[#E4E4E0] mb-6">
              <h3 className="text-lg font-bold text-[#0C0C0E]">Biodata Akademik</h3>
              <span className="font-mono text-xs text-[#0047FF] bg-[#EEF3FF] px-3 py-1 rounded-full font-semibold">
                AKTIF · SEMESTER 3
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {academicSpecs.map((item) => (
                <div key={item.label} className="pb-4 border-b border-[#F1F1EE]">
                  <span className="font-mono text-[11px] text-[#71717A] block mb-1">
                    {item.label}
                  </span>
                  <span className="text-sm font-bold text-[#0C0C0E]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#E4E4E0] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <span className="font-mono text-[11px] font-semibold text-[#0047FF] block">
                TENTANG PLATFORM SIPEGAS
              </span>
              <p className="text-sm text-[#52525B] leading-relaxed">
                Dibangun menggunakan React, Tailwind CSS, GSAP, dan Lenis sebagai media publikasi
                tugas mandiri mata kuliah <strong className="text-[#0C0C0E]">Sistem Operasi</strong>.
              </p>
            </div>

            <Link
              to="/tugas"
              className="shrink-0 inline-flex items-center justify-center gap-2 bg-[#0C0C0E] hover:bg-[#0047FF] text-white text-xs font-semibold px-5 py-3.5 rounded-xl transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Lihat Tugas</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}