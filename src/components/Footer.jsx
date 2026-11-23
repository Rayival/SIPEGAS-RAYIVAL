import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#E4E4E0] bg-white/80 mt-20 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#F1F1EE]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0047FF]" />
              <span className="font-extrabold tracking-tight text-sm text-[#0C0C0E]">
                SIPEGAS — Sistem Pengumpulan Tugas
              </span>
            </div>
            <p className="text-xs text-[#52525B] mt-1">
              Mata Kuliah: <strong className="text-[#0C0C0E] font-semibold">Sistem Operasi</strong> · Semester Ganjil 2026/2027
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
            <a
              href="https://rayival.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              title="Kunjungi Portofolio Rayival Dede Saputra"
              className="group inline-flex items-center gap-1 bg-[#F8F8F6] hover:bg-[#0C0C0E] border border-[#E4E4E0] hover:border-[#0C0C0E] text-[#0C0C0E] hover:text-white font-semibold px-3 py-1 rounded-lg transition-colors duration-200"
            >
              <span>Rayival Dede Saputra</span>
              <ArrowUpRight className="w-3 h-3 text-[#0047FF] group-hover:text-white transition-colors" />
            </a>
            <span className="bg-[#F8F8F6] border border-[#E4E4E0] text-[#52525B] px-3 py-1 rounded-lg">
              NIM: 2503010032
            </span>
            <span className="bg-[#EEF3FF] border border-[#D6E4FF] text-[#0047FF] font-semibold px-3 py-1 rounded-lg">
              Teknik Informatika · Kelas B
            </span>
          </div>
        </div>

        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-[#71717A]">
          <span>Universitas Perjuangan Tasikmalaya (UNPER)</span>
          <div className="flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()}</span>
            <a
              href="https://rayival.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0C0C0E] hover:text-[#0047FF] font-semibold underline decoration-[#E4E4E0] hover:decoration-[#0047FF] underline-offset-4 transition-colors"
            >
              Rayival Dede Saputra
            </a>
            <span>·</span>
            <a
              href="https://rayival.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-[#0047FF] hover:underline font-medium"
            >
              <span>rayival.vercel.app</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}