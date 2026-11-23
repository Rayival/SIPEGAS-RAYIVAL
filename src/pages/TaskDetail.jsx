import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { tasksData } from '../data/tasksData';
import { ArrowLeft, Printer, FileDown, Calendar } from 'lucide-react';

export default function TaskDetail() {
  const { id } = useParams();
  const task = tasksData.find((t) => t.id === id);
  const articleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.detail-enter', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'transform',
      });
    }, articleRef);

    return () => ctx.revert();
  }, [id]);

  const handlePrintPdf = () => {
    window.print();
  };

  if (!task) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-[#0C0C0E] mb-4">Tugas Tidak Ditemukan</h1>
        <Link to="/tugas" className="text-[#0047FF] font-semibold hover:underline">
          Kembali ke Daftar Tugas
        </Link>
      </div>
    );
  }

  return (
    <article ref={articleRef} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16">
      {/* Top Action Bar */}
      <div className="detail-enter flex flex-wrap items-center justify-between gap-4 mb-6 no-print">
        <Link
          to="/tugas"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#52525B] hover:text-[#0C0C0E] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Daftar Tugas</span>
        </Link>

        <button
          type="button"
          onClick={handlePrintPdf}
          className="inline-flex items-center gap-2 bg-[#0C0C0E] hover:bg-[#0047FF] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
        >
          <Printer className="w-4 h-4" />
          <span>Cetak / Simpan PDF</span>
        </button>
      </div>

      {/* Main Document Card */}
      <div className="detail-enter print-card bg-white border border-[#E4E4E0] rounded-3xl p-6 sm:p-12 shadow-[0_4px_24px_rgb(0,0,0,0.03)]">
        {/* Document Header */}
        <div className="border-b border-[#E4E4E0] pb-8 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="font-mono text-xs font-semibold text-[#0047FF] bg-[#EEF3FF] px-3 py-1 rounded-full">
              {task.category}
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#71717A]">
              <Calendar className="w-3.5 h-3.5" /> Deadline: {task.deadline}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0C0C0E] mb-4 leading-tight">
            {task.title}
          </h1>

          <p className="text-base text-[#52525B] leading-relaxed mb-6">
            {task.description}
          </p>

          {/* Author & Course Metadata Box */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#F8F8F6] border border-[#E4E4E0] rounded-2xl p-4 font-mono text-xs">
            <div>
              <span className="text-[#71717A] block text-[10px]">MAHASISWA</span>
              <span className="font-semibold text-[#0C0C0E]">Rayival Dede Saputra</span>
            </div>
            <div>
              <span className="text-[#71717A] block text-[10px]">NIM / KELAS</span>
              <span className="font-semibold text-[#0C0C0E]">2503010032 · TI-B</span>
            </div>
            <div>
              <span className="text-[#71717A] block text-[10px]">MATA KULIAH</span>
              <span className="font-semibold text-[#0C0C0E]">Sistem Operasi</span>
            </div>
            <div>
              <span className="text-[#71717A] block text-[10px]">INSTITUSI</span>
              <span className="font-semibold text-[#0C0C0E]">UNPER Tasikmalaya</span>
            </div>
          </div>
        </div>

        {/* Task Content & Visual Diagrams */}
        <div
          className="text-[#0C0C0E]"
          dangerouslySetInnerHTML={{ __html: task.content }}
        />

        {/* Bottom Print/PDF Action */}
        <div className="border-t border-[#E4E4E0] pt-6 mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[11px] text-[#71717A]">
            *Dipublikasikan langsung sebagai halaman web mandiri pada SIPEGAS.
          </span>

          <button
            type="button"
            onClick={handlePrintPdf}
            className="no-print inline-flex items-center gap-2 bg-[#F8F8F6] hover:bg-[#0C0C0E] text-[#0C0C0E] hover:text-white border border-[#E4E4E0] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
          >
            <FileDown className="w-4 h-4" />
            <span>Simpan Dokumen PDF</span>
          </button>
        </div>
      </div>
    </article>
  );
}