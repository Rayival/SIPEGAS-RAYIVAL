const renderDiskSvg = (title, seq, total) => {
  const width = 760;
  const paddingX = 36;
  const usableW = width - paddingX * 2;
  const topY = 34;
  const rowStep = 20;
  const height = topY + seq.length * rowStep + 22;
  const scaleX = (track) => paddingX + (track / 199) * usableW;
  const ticks = [0, 16, 24, 43, 50, 67, 71, 82, 111, 123, 140, 162, 170, 178, 190, 199];

  const points = seq.map((tr, i) => `${scaleX(tr).toFixed(1)},${topY + i * rowStep}`).join(' ');

  return `
    <div class="diagram-box bg-[#F8F8F6] border border-[#E4E4E0] rounded-2xl p-4">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
        <span class="font-bold text-xs text-[#0C0C0E]">${title}</span>
        <span class="font-mono text-xs font-semibold text-[#0047FF] bg-[#EEF3FF] px-2.5 py-0.5 rounded-full">Total = ${total} lintasan</span>
      </div>
      <div class="overflow-x-auto">
        <svg viewBox="0 0 ${width} ${height}" class="w-full min-w-[620px] h-auto block">
          <line x1="${paddingX}" y1="20" x2="${width - paddingX}" y2="20" stroke="#D4D4D8" stroke-width="1.5" />
          ${ticks
            .map(
              (t) => `
            <line x1="${scaleX(t).toFixed(1)}" y1="16" x2="${scaleX(t).toFixed(1)}" y2="${height - 14}" stroke="#E4E4E0" stroke-width="1" stroke-dasharray="2,2" />
            <text x="${scaleX(t).toFixed(1)}" y="12" text-anchor="middle" font-size="8.5" font-family="JetBrains Mono, monospace" fill="#71717A">${t}</text>
          `
            )
            .join('')}
          <polyline fill="none" stroke="#0047FF" stroke-width="2" points="${points}" />
          ${seq
            .map((tr, i) => {
              const cx = scaleX(tr).toFixed(1);
              const cy = topY + i * rowStep;
              const isStart = i === 0;
              return `
                <circle cx="${cx}" cy="${cy}" r="${isStart ? 4.5 : 3.5}" fill="${isStart ? '#0C0C0E' : '#0047FF'}" />
                <text x="${Number(cx) + 6}" y="${cy + 3}" font-size="9" font-family="JetBrains Mono, monospace" font-weight="600" fill="#0C0C0E">${tr}</text>
              `;
            })
            .join('')}
        </svg>
      </div>
    </div>
  `;
};

const renderGanttSvg = (title, segments, totalTat, avgTat) => {
  const width = 760;
  const paddingX = 24;
  const usableW = width - paddingX * 2;
  const maxTime = 30;
  const scaleX = (t) => paddingX + (t / maxTime) * usableW;

  const palette = {
    A: { bg: '#0C0C0E', text: '#FFFFFF' },
    B: { bg: '#0047FF', text: '#FFFFFF' },
    C: { bg: '#E4E4E0', text: '#0C0C0E' },
    D: { bg: '#D6E4FF', text: '#0047FF' },
    E: { bg: '#52525B', text: '#FFFFFF' },
  };

  return `
    <div class="diagram-box bg-[#F8F8F6] border border-[#E4E4E0] rounded-2xl p-4">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span class="font-bold text-xs text-[#0C0C0E]">${title}</span>
        <span class="font-mono text-xs font-semibold text-[#0047FF] bg-[#EEF3FF] px-2.5 py-0.5 rounded-full">Total = ${totalTat} · Rata-rata = ${avgTat}</span>
      </div>
      <div class="overflow-x-auto">
        <svg viewBox="0 0 ${width} 68" class="w-full min-w-[600px] h-auto block">
          ${segments
            .map(([proc, start, end]) => {
              const x = scaleX(start);
              const w = scaleX(end) - x;
              const style = palette[proc];
              return `
                <rect x="${x.toFixed(1)}" y="8" width="${w.toFixed(1)}" height="32" rx="4" fill="${style.bg}" stroke="#FFFFFF" stroke-width="1.5" />
                <text x="${(x + w / 2).toFixed(1)}" y="28" text-anchor="middle" font-size="11" font-family="JetBrains Mono, monospace" font-weight="700" fill="${style.text}">${proc}</text>
                <text x="${x.toFixed(1)}" y="54" text-anchor="middle" font-size="9.5" font-family="JetBrains Mono, monospace" fill="#52525B">${start}</text>
              `;
            })
            .join('')}
          <text x="${scaleX(30).toFixed(1)}" y="54" text-anchor="middle" font-size="9.5" font-family="JetBrains Mono, monospace" fill="#52525B">30</text>
        </svg>
      </div>
    </div>
  `;
};

export const tasksData = [
  {
    id: 'tugas-1-sistem-operasi',
    title: 'Tugas 1: Algoritma Penjadwalan Disk (Disk Scheduling)',
    category: 'Tugas Harian',
    deadline: '23 November 2026',
    description:
      'Perhitungan total lintasan head disk dan gambaran arah pergerakan lengkap menggunakan seluruh algoritma (FCFS, SSTF, SCAN, C-SCAN, LOOK, dan C-LOOK).',
    content: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold text-[#0C0C0E] mb-2">1. Parameter Kasus</h3>
          <p class="text-sm text-[#52525B] leading-relaxed">
            Sebuah hard disk memiliki <strong>200 track</strong> bernomor <strong>0 hingga 199</strong> dengan posisi awal head pada <strong>track 50</strong>.
            Antrian permintaan akses track (16 permintaan) yang masuk secara berurutan adalah:
          </p>
          <div class="mt-3 p-3.5 rounded-xl bg-[#F8F8F6] border border-[#E4E4E0] font-mono text-xs text-[#0C0C0E]">
            82, 170, 43, 140, 24, 16, 190, 123, 67, 43, 162, 24, 71, 111, 43, 178
          </div>
        </div>

        <div>
          <h3 class="text-lg font-bold text-[#0C0C0E] mb-3">2. Tabel Perhitungan Total Lintasan &amp; Urutan Head</h3>
          <div class="overflow-x-auto border border-[#E4E4E0] rounded-2xl">
            <table class="w-full text-left border-collapse text-sm">
              <thead>
                <tr class="bg-[#F8F8F6] text-[#0C0C0E] border-b border-[#E4E4E0]">
                  <th class="p-3.5 font-bold">Algoritma</th>
                  <th class="p-3.5 font-bold">Urutan Arah Lintasan &amp; Rincian Selisih</th>
                  <th class="p-3.5 font-bold text-center">Total Lintasan</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E4E4E0] text-[#0C0C0E]">
                <tr>
                  <td class="p-3.5 font-bold align-top">1. FCFS</td>
                  <td class="p-3.5 font-mono text-xs leading-relaxed">
                    50 → 82 → 170 → 43 → 140 → 24 → 16 → 190 → 123 → 67 → 43 → 162 → 24 → 71 → 111 → 43 → 178
                    <span class="block text-[#71717A] mt-1">
                      32 + 88 + 127 + 97 + 116 + 8 + 174 + 67 + 56 + 24 + 119 + 138 + 47 + 40 + 68 + 135
                    </span>
                  </td>
                  <td class="p-3.5 text-center font-mono font-bold text-[#0047FF] align-top">1336</td>
                </tr>
                <tr>
                  <td class="p-3.5 font-bold align-top">2. SSTF</td>
                  <td class="p-3.5 font-mono text-xs leading-relaxed">
                    50 → 43 → 43 → 43 → 24 → 24 → 16 → 67 → 71 → 82 → 111 → 123 → 140 → 162 → 170 → 178 → 190
                    <span class="block text-[#71717A] mt-1">
                      (50 − 16) + (190 − 16) = 34 + 174
                    </span>
                  </td>
                  <td class="p-3.5 text-center font-mono font-bold text-[#0047FF] align-top">208</td>
                </tr>
                <tr>
                  <td class="p-3.5 font-bold align-top">3. SCAN (Elevator)</td>
                  <td class="p-3.5 font-mono text-xs leading-relaxed">
                    50 → 67 → 71 → 82 → 111 → 123 → 140 → 162 → 170 → 178 → 190 → 199 → 43 → 43 → 43 → 24 → 24 → 16
                    <span class="block text-[#71717A] mt-1">
                      Naik ke batas atas (199 − 50 = 149) + berbalik turun (199 − 16 = 183)
                    </span>
                  </td>
                  <td class="p-3.5 text-center font-mono font-bold text-[#0047FF] align-top">332</td>
                </tr>
                <tr>
                  <td class="p-3.5 font-bold align-top">4. C-SCAN</td>
                  <td class="p-3.5 font-mono text-xs leading-relaxed">
                    50 → 67 → 71 → 82 → 111 → 123 → 140 → 162 → 170 → 178 → 190 → 199 → 0 → 16 → 24 → 24 → 43 → 43 → 43
                    <span class="block text-[#71717A] mt-1">
                      (199 − 50) + (199 − 0) + (43 − 0) = 149 + 199 + 43
                    </span>
                  </td>
                  <td class="p-3.5 text-center font-mono font-bold text-[#0047FF] align-top">391</td>
                </tr>
                <tr>
                  <td class="p-3.5 font-bold align-top">5. LOOK</td>
                  <td class="p-3.5 font-mono text-xs leading-relaxed">
                    50 → 67 → 71 → 82 → 111 → 123 → 140 → 162 → 170 → 178 → 190 → 43 → 43 → 43 → 24 → 24 → 16
                    <span class="block text-[#71717A] mt-1">
                      (190 − 50) + (190 − 16) = 140 + 174
                    </span>
                  </td>
                  <td class="p-3.5 text-center font-mono font-bold text-[#0047FF] align-top">314</td>
                </tr>
                <tr>
                  <td class="p-3.5 font-bold align-top">6. C-LOOK</td>
                  <td class="p-3.5 font-mono text-xs leading-relaxed">
                    50 → 67 → 71 → 82 → 111 → 123 → 140 → 162 → 170 → 178 → 190 → 16 → 24 → 24 → 43 → 43 → 43
                    <span class="block text-[#71717A] mt-1">
                      (190 − 50) + (190 − 16) + (43 − 16) = 140 + 174 + 27
                    </span>
                  </td>
                  <td class="p-3.5 text-center font-mono font-bold text-[#0047FF] align-top">341</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-bold text-[#0C0C0E] mb-3">3. Gambaran Arah Pergerakan Head (Track 0 – 199)</h3>
          <div class="space-y-4">
            ${renderDiskSvg('A. FCFS (First-Come, First-Served)', [50, 82, 170, 43, 140, 24, 16, 190, 123, 67, 43, 162, 24, 71, 111, 43, 178], 1336)}
            ${renderDiskSvg('B. SSTF (Shortest Seek Time First)', [50, 43, 43, 43, 24, 24, 16, 67, 71, 82, 111, 123, 140, 162, 170, 178, 190], 208)}
            ${renderDiskSvg('C. SCAN (Arah Naik ke 199 lalu Berbalik Turun)', [50, 67, 71, 82, 111, 123, 140, 162, 170, 178, 190, 199, 43, 43, 43, 24, 24, 16], 332)}
            ${renderDiskSvg('D. C-SCAN (Arah Naik ke 199, Kembali ke 0, lalu Naik)', [50, 67, 71, 82, 111, 123, 140, 162, 170, 178, 190, 199, 0, 16, 24, 24, 43, 43, 43], 391)}
            ${renderDiskSvg('E. LOOK (Naik ke Permintaan Tertinggi 190 lalu Turun ke 16)', [50, 67, 71, 82, 111, 123, 140, 162, 170, 178, 190, 43, 43, 43, 24, 24, 16], 314)}
            ${renderDiskSvg('F. C-LOOK (Naik ke 190, Lompat ke 16, lalu Naik ke 43)', [50, 67, 71, 82, 111, 123, 140, 162, 170, 178, 190, 16, 24, 24, 43, 43, 43], 341)}
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 'tugas-2-sistem-operasi',
    title: 'Tugas 2: Algoritma Penjadwalan CPU (CPU Scheduling)',
    category: 'Tugas Harian',
    deadline: '30 November 2026',
    description:
      'Perhitungan total dan rata-rata lama tanggap (Turnaround Time = Waktu Selesai − Saat Tiba) menggunakan FCFS/PTPD, SJF/PTD, SRT/PTDP, HPRN/RPTD, dan Round Robin (q=3 & q=5) beserta diagram Gantt.',
    content: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold text-[#0C0C0E] mb-3">1. Tabel Antrian Proses</h3>
          <div class="overflow-x-auto border border-[#E4E4E0] rounded-2xl">
            <table class="w-full text-center border-collapse text-sm">
              <thead>
                <tr class="bg-[#F8F8F6] text-[#0C0C0E] border-b border-[#E4E4E0]">
                  <th class="p-3 font-bold">Nama Proses</th>
                  <th class="p-3 font-bold">Saat Tiba (Arrival Time)</th>
                  <th class="p-3 font-bold">Lama Proses (Burst Time)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E4E4E0] font-mono">
                <tr><td class="p-2.5 font-bold text-[#0047FF]">A</td><td class="p-2.5">0</td><td class="p-2.5">7</td></tr>
                <tr><td class="p-2.5 font-bold text-[#0047FF]">B</td><td class="p-2.5">3</td><td class="p-2.5">5</td></tr>
                <tr><td class="p-2.5 font-bold text-[#0047FF]">C</td><td class="p-2.5">5</td><td class="p-2.5">8</td></tr>
                <tr><td class="p-2.5 font-bold text-[#0047FF]">D</td><td class="p-2.5">8</td><td class="p-2.5">6</td></tr>
                <tr><td class="p-2.5 font-bold text-[#0047FF]">E</td><td class="p-2.5">12</td><td class="p-2.5">4</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-bold text-[#0C0C0E] mb-3">2. Tabel Rekapitulasi Lama Tanggap (Turnaround Time)</h3>
          <div class="overflow-x-auto border border-[#E4E4E0] rounded-2xl">
            <table class="w-full text-left border-collapse text-sm">
              <thead>
                <tr class="bg-[#F8F8F6] text-[#0C0C0E] border-b border-[#E4E4E0]">
                  <th class="p-3.5 font-bold">Algoritma</th>
                  <th class="p-3.5 font-bold">Rincian Waktu Selesai &amp; Lama Tanggap (Selesai − Tiba)</th>
                  <th class="p-3.5 font-bold text-center">Total</th>
                  <th class="p-3.5 font-bold text-center">Rata-rata</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E4E4E0]">
                <tr>
                  <td class="p-3.5 font-bold align-top">1. FCFS / PTPD</td>
                  <td class="p-3.5 font-mono text-xs leading-relaxed">
                    A(7−0)=7, B(12−3)=9, C(20−5)=15, D(26−8)=18, E(30−12)=18
                    <span class="block text-[#71717A] mt-1">Urutan eksekusi: A → B → C → D → E</span>
                  </td>
                  <td class="p-3.5 text-center font-mono font-bold align-top">67</td>
                  <td class="p-3.5 text-center font-mono font-bold text-[#0047FF] align-top">13.4</td>
                </tr>
                <tr>
                  <td class="p-3.5 font-bold align-top">2. SJF / PTD</td>
                  <td class="p-3.5 font-mono text-xs leading-relaxed">
                    A(7−0)=7, B(12−3)=9, E(16−12)=4, D(22−8)=14, C(30−5)=25
                    <span class="block text-[#71717A] mt-1">Urutan eksekusi: A → B → E → D → C</span>
                  </td>
                  <td class="p-3.5 text-center font-mono font-bold align-top">59</td>
                  <td class="p-3.5 text-center font-mono font-bold text-[#0047FF] align-top">11.8</td>
                </tr>
                <tr>
                  <td class="p-3.5 font-bold align-top">3. SRT / PTDP</td>
                  <td class="p-3.5 font-mono text-xs leading-relaxed">
                    A(7−0)=7, B(12−3)=9, E(16−12)=4, D(22−8)=14, C(30−5)=25
                    <span class="block text-[#71717A] mt-1">Preemptive check di t=3,5,8,12: sisa waktu proses berjalan selalu lebih kecil</span>
                  </td>
                  <td class="p-3.5 text-center font-mono font-bold align-top">59</td>
                  <td class="p-3.5 text-center font-mono font-bold text-[#0047FF] align-top">11.8</td>
                </tr>
                <tr>
                  <td class="p-3.5 font-bold align-top">4. HPRN / RPTD</td>
                  <td class="p-3.5 font-mono text-xs leading-relaxed">
                    A(7−0)=7, B(12−3)=9, C(20−5)=15, D(26−8)=18, E(30−12)=18
                    <span class="block text-[#71717A] mt-1">t=7: R(B)=1.80 &gt; R(C)=1.25; t=12: R(C)=1.875 &gt; R(D)=1.67 &gt; R(E)=1.00; t=20: R(D)=R(E)=3.00 (FCFS: D)</span>
                  </td>
                  <td class="p-3.5 text-center font-mono font-bold align-top">67</td>
                  <td class="p-3.5 text-center font-mono font-bold text-[#0047FF] align-top">13.4</td>
                </tr>
                <tr>
                  <td class="p-3.5 font-bold align-top">5a. RR (Kuantum = 3)</td>
                  <td class="p-3.5 font-mono text-xs leading-relaxed">
                    A(18−0)=18, B(14−3)=11, C(30−5)=25, D(27−8)=19, E(28−12)=16
                    <span class="block text-[#71717A] mt-1">18 + 11 + 25 + 19 + 16</span>
                  </td>
                  <td class="p-3.5 text-center font-mono font-bold align-top">89</td>
                  <td class="p-3.5 text-center font-mono font-bold text-[#0047FF] align-top">17.8</td>
                </tr>
                <tr>
                  <td class="p-3.5 font-bold align-top">5b. RR (Kuantum = 5)</td>
                  <td class="p-3.5 font-mono text-xs leading-relaxed">
                    A(17−0)=17, B(10−3)=7, C(29−5)=24, D(30−8)=22, E(26−12)=14
                    <span class="block text-[#71717A] mt-1">17 + 7 + 24 + 22 + 14</span>
                  </td>
                  <td class="p-3.5 text-center font-mono font-bold align-top">84</td>
                  <td class="p-3.5 text-center font-mono font-bold text-[#0047FF] align-top">16.8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-bold text-[#0C0C0E] mb-3">3. Gambaran Arah Proses / Gantt Chart (0 – 30 ms)</h3>
          <div class="space-y-4">
            ${renderGanttSvg('1. FCFS / PTPD', [['A', 0, 7], ['B', 7, 12], ['C', 12, 20], ['D', 20, 26], ['E', 26, 30]], 67, '13.4')}
            ${renderGanttSvg('2. SJF / PTD (Non-Preemptive)', [['A', 0, 7], ['B', 7, 12], ['E', 12, 16], ['D', 16, 22], ['C', 22, 30]], 59, '11.8')}
            ${renderGanttSvg('3. SRT / PTDP (Preemptive)', [['A', 0, 7], ['B', 7, 12], ['E', 12, 16], ['D', 16, 22], ['C', 22, 30]], 59, '11.8')}
            ${renderGanttSvg('4. HPRN / RPTD', [['A', 0, 7], ['B', 7, 12], ['C', 12, 20], ['D', 20, 26], ['E', 26, 30]], 67, '13.4')}
            ${renderGanttSvg('5a. Round Robin (Kuantum = 3)', [['A', 0, 3], ['B', 3, 6], ['A', 6, 9], ['C', 9, 12], ['B', 12, 14], ['D', 14, 17], ['A', 17, 18], ['E', 18, 21], ['C', 21, 24], ['D', 24, 27], ['E', 27, 28], ['C', 28, 30]], 89, '17.8')}
            ${renderGanttSvg('5b. Round Robin (Kuantum = 5)', [['A', 0, 5], ['B', 5, 10], ['C', 10, 15], ['A', 15, 17], ['D', 17, 22], ['E', 22, 26], ['C', 26, 29], ['D', 29, 30]], 84, '16.8')}
          </div>
        </div>
      </div>
    `,
  },
];