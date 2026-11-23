import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { tasksData } from '../data/tasksData';
import { ArrowUpRight, Calendar } from 'lucide-react';

export default function Tasks() {
  const [filter, setFilter] = useState('Semua');
  const listRef = useRef(null);

  const categories = ['Semua', 'Tugas Harian', 'UTS', 'UAS'];

  const filteredTasks =
    filter === 'Semua' ? tasksData : tasksData.filter((t) => t.category === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.task-item',
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: 'power3.out',
          clearProps: 'transform',
        }
      );
    }, listRef);

    return () => ctx.revert();
  }, [filter]);

  return (
    <div ref={listRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E4E4E0]">
        <div>
          <span className="font-mono text-xs text-[#0047FF] font-semibold block mb-2">
            DIREKTORI DOKUMEN · {String(filteredTasks.length).padStart(2, '0')} ITEM
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0C0C0E]">
            Koleksi Tugas Sistem Operasi
          </h1>
        </div>

        {/* Minimalist Segmented Filter */}
        <div className="inline-flex flex-wrap items-center gap-1 bg-white p-1.5 rounded-xl border border-[#E4E4E0]">
          {categories.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  active
                    ? 'bg-[#0C0C0E] text-white'
                    : 'text-[#52525B] hover:text-[#0C0C0E] hover:bg-[#F1F1EE]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Task Cards Grid */}
      {filteredTasks.length === 0 ? (
        <div className="py-20 text-center bg-white border border-[#E4E4E0] rounded-2xl mt-8">
          <p className="font-mono text-xs text-[#71717A] mb-1">BELUM ADA DOKUMEN</p>
          <p className="text-sm text-[#52525B]">
            Belum ada tugas yang dipublikasikan pada kategori <strong className="text-[#0C0C0E]">{filter}</strong>.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {filteredTasks.map((task, idx) => (
            <Link
              key={task.id}
              to={`/tugas/${task.id}`}
              className="task-item group bg-white border border-[#E4E4E0] hover:border-[#0C0C0E] rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)]"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="font-mono text-xs font-semibold text-[#0047FF] bg-[#EEF3FF] px-3 py-1 rounded-full">
                    DOC-{String(idx + 1).padStart(2, '0')} · {task.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#71717A]">
                    <Calendar className="w-3.5 h-3.5" />
                    {task.deadline}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#0C0C0E] group-hover:text-[#0047FF] transition-colors mb-3 leading-snug">
                  {task.title}
                </h2>

                <p className="text-sm text-[#52525B] leading-relaxed mb-8">
                  {task.description}
                </p>
              </div>

              <div className="pt-5 border-t border-[#F1F1EE] flex items-center justify-between text-xs font-semibold text-[#0C0C0E]">
                <span>Buka Pembahasan &amp; Diagram Lengkap</span>
                <span className="w-8 h-8 rounded-full bg-[#F8F8F6] group-hover:bg-[#0C0C0E] group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}