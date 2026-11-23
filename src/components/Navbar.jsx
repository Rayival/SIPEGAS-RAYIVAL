import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const navItems = [
    { path: '/', num: '01', label: 'Beranda' },
    { path: '/tugas', num: '02', label: 'Arsip Tugas' },
    { path: '/about', num: '03', label: 'Profil' },
  ];

  return (
    <header className="fixed top-5 inset-x-0 z-50 px-4 pointer-events-none no-print">
      <div className="max-w-3xl mx-auto pointer-events-auto bg-white/85 backdrop-blur-md border border-[#E4E4E0] rounded-full px-3 sm:px-5 h-14 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <Link to="/" className="flex items-center gap-2.5 pl-1">
          <span className="w-2 h-2 rounded-full bg-[#0047FF]" />
          <span className="font-extrabold tracking-tight text-sm sm:text-base text-[#0C0C0E]">
            SIPEGAS
          </span>
          <span className="hidden md:inline-block font-mono text-[11px] text-[#71717A] border-l border-[#E4E4E0] pl-2.5">
            SO · TI-B
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  active
                    ? 'bg-[#0C0C0E] text-white'
                    : 'text-[#52525B] hover:text-[#0C0C0E] hover:bg-[#F1F1EE]'
                }`}
              >
                <span
                  className={`font-mono text-[10px] ${
                    active ? 'text-[#7AA2FF]' : 'text-[#A1A1AA]'
                  }`}
                >
                  {item.num}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}