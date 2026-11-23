import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { tasksData } from '../data/tasksData';
import { ArrowUpRight, User, FileText, Layers } from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-stagger', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.09,
        ease: 'power3.out',
        clearProps: 'transform',
      });

      gsap.from('.hero-panel', {
        y: 28,
        opacity: 0,
        duration: 0.9,
        delay: 0.25,
        ease: 'power3.out',
        clearProps: 'transform',
      });

      gsap.from('.hero-line', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.95,
        delay: 0.3,
        ease: 'power3.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-14">
      {/* Top Institutional Strip */}
      <div className="hero-stagger flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-[#E4E4E0] font-mono text-[11px] sm:text-xs text-[#52525B]">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          UNIVERSITAS PERJUANGAN TASIKMALAYA
        </span>
        <span>TEKNIK INFORMATIKA · KELAS B · GANJIL 2026/2027</span>
      </div>

      {/* Asymmetric Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 py-12 sm:py-20 items-start">
        {/* Left Column: Main Editorial Statement */}
        <div className="lg:col-span-7">
          <div className="hero-stagger inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4E4E0] mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0047FF]" />
            <span className="font-mono text-[11px] font-semibold tracking-wide text-[#0C0C0E]">
              SISTEM PENGUMPULAN TUGAS — SISTEM OPERASI
            </span>
          </div>

          <h1 className="hero-stagger text-5xl sm:text-7xl font-extrabold tracking-[-0.035em] leading-[0.96] text-[#0C0C0E] mb-6">
            SIPEGAS<span className="text-[#0047FF]">.</span>
            <span className="block text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-[-0.02em] leading-[1.2] text-[#52525B] mt-3">
              Arsip Web Mandiri &amp; Dokumentasi Algoritma Sistem Operasi.
            </span>
          </h1>

          <p className="hero-stagger max-w-xl text-sm sm:text-base text-[#52525B] leading-relaxed mb-10">
            Disusun oleh <strong className="text-[#0C0C0E] font-semibold">Rayival Dede Saputra</strong> (NIM 2503010032).
            Seluruh analisis perhitungan <span className="text-[#0C0C0E] font-medium">Penjadwalan Disk</span> dan{' '}
            <span className="text-[#0C0C0E] font-medium">Penjadwalan CPU</span> dipublikasikan langsung dalam bentuk
            tabel interaktif, diagram alur proses, serta dokumen siap cetak PDF.
          </p>

          {/* Dua Tombol Navigasi Utama */}
          <div className="hero-stagger flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <Link
              to="/tugas"
              className="group inline-flex items-center justify-between sm:justify-center gap-3 bg-[#0C0C0E] hover:bg-[#0047FF] text-white font-semibold px-7 py-4 rounded-xl text-sm transition-colors duration-300"
            >
              <span>Lihat Daftar Tugas</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-between sm:justify-center gap-3 bg-white hover:bg-[#F1F1EE] text-[#0C0C0E] font-semibold px-7 py-4 rounded-xl text-sm border border-[#E4E4E0] transition-colors duration-200"
            >
              <User className="w-4 h-4 text-[#0047FF]" />
              <span>Tentang Saya</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Live Archive Summary & Quick Index */}
        <div className="hero-panel lg:col-span-5 bg-white border border-[#E4E4E0] rounded-3xl p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.03)]">
          <div className="flex items-center justify-between pb-4 border-b border-[#E4E4E0]">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#0047FF]" />
              <span className="font-mono text-xs font-bold text-[#0C0C0E]">INDEKS TUGAS TERBARU</span>
            </div>
            <span className="font-mono text-[11px] font-semibold text-[#0047FF] bg-[#EEF3FF] px-2.5 py-0.5 rounded-full">
              {String(tasksData.length).padStart(2, '0')} DOKUMEN
            </span>
          </div>

          <div className="divide-y divide-[#F1F1EE] my-2">
            {tasksData.map((task, idx) => (
              <Link
                key={task.id}
                to={`/tugas/${task.id}`}
                className="group py-4 flex items-start justify-between gap-3 hover:bg-[#F8F8F6] -mx-3 px-3 rounded-xl transition-colors"
              >
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-[#71717A] block">
                    0{idx + 1} · DEADLINE {task.deadline.toUpperCase()}
                  </span>
                  <h2 className="text-sm font-bold text-[#0C0C0E] group-hover:text-[#0047FF] transition-colors leading-snug">
                    {task.title}
                  </h2>
                </div>
                <span className="w-7 h-7 shrink-0 rounded-full border border-[#E4E4E0] bg-white group-hover:bg-[#0C0C0E] group-hover:text-white group-hover:border-[#0C0C0E] flex items-center justify-center transition-colors mt-1">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E4E4E0] flex items-center justify-between font-mono text-[11px] text-[#71717A]">
            <span className="inline-flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#0047FF]" />
              Format: Postingan Web &amp; PDF
            </span>
            <Link to="/tugas" className="text-[#0C0C0E] font-semibold hover:text-[#0047FF] transition-colors">
              Semua →
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-line h-px bg-[#E4E4E0] w-full" />

      {/* Bottom 3-Column Feature Index */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E4E4E0] border-b border-[#E4E4E0]">
        <div className="hero-stagger py-8 md:pr-8">
          <span className="font-mono text-xs text-[#0047FF] font-semibold block mb-2.5">
            01 / PUBLIKASI LANGSUNG
          </span>
          <h3 className="text-base font-bold text-[#0C0C0E] mb-2">Postingan Web Terstruktur</h3>
          <p className="text-sm text-[#52525B] leading-relaxed">
            Seluruh jawaban tugas ditampilkan langsung di halaman web dalam bentuk tabel perhitungan lengkap,
            sesuai ketentuan perkuliahan.
          </p>
        </div>

        <div className="hero-stagger py-8 md:px-8">
          <span className="font-mono text-xs text-[#0047FF] font-semibold block mb-2.5">
            02 / VISUALISASI ALUR
          </span>
          <h3 className="text-base font-bold text-[#0C0C0E] mb-2">Diagram Lintasan &amp; Gantt Chart</h3>
          <p className="text-sm text-[#52525B] leading-relaxed">
            Setiap algoritma dilengkapi grafik pergerakan head track (0–199) dan linimasa eksekusi proses CPU
            secara terperinci.
          </p>
        </div>

        <div className="hero-stagger py-8 md:pl-8">
          <span className="font-mono text-xs text-[#0047FF] font-semibold block mb-2.5">
            03 / DOKUMEN PORTABEL
          </span>
          <h3 className="text-base font-bold text-[#0C0C0E] mb-2">Cetak &amp; Simpan ke PDF</h3>
          <p className="text-sm text-[#52525B] leading-relaxed">
            Dilengkapi tata letak cetak khusus agar setiap postingan tugas dapat langsung diunduh atau dicetak
            menjadi dokumen PDF yang rapi.
          </p>
        </div>
      </div> */}
    </div>
  );
}