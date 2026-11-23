import React from 'react';

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
            <span className="bg-[#F8F8F6] border border-[#E4E4E0] text-[#0C0C0E] font-semibold px-3 py-1 rounded-lg">
              Rayival Dede Saputra
            </span>
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
          <span>© {new Date().getFullYear()} Rayival Dede Saputra. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}