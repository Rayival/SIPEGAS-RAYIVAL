# SIPEGAS — Sistem Pengumpulan Tugas

**SIPEGAS** (*Sistem Pengumpulan Tugas*) adalah aplikasi web mandiri yang dibangun untuk mempublikasikan dan mendokumentasikan seluruh tugas mata kuliah **Sistem Operasi** secara langsung dalam bentuk artikel web interaktif, tabel perhitungan, serta visualisasi diagram alur proses (bukan sekadar tautan unduhan dokumen statis).

---

## Identitas Mahasiswa

| Keterangan | Detail |
| :--- | :--- |
| **Nama Lengkap** | Rayival Dede Saputra |
| **NIM** | 2503010032 |
| **Program Studi** | Teknik Informatika |
| **Kelas / Angkatan** | Kelas B / 2025 |
| **Fakultas** | Fakultas Teknik |
| **Perguruan Tinggi** | Universitas Perjuangan Tasikmalaya (UNPER) |
| **Mata Kuliah** | Sistem Operasi (Semester Ganjil 2026/2027) |

---

## Daftar Tugas Terpublikasi

1. **Tugas 1 — Algoritma Penjadwalan Disk (*Disk Scheduling*)**
   - **Deadline:** 23 November 2026
   - **Cakupan Materi:** Perhitungan total lintasan head disk (200 track, `0–199`, posisi awal head `50`) menggunakan algoritma **FCFS**, **SSTF**, **SCAN**, **C-SCAN**, **LOOK**, dan **C-LOOK**, lengkap dengan tabel perbandingan serta diagram vektor (SVG) arah pergerakan head.
2. **Tugas 2 — Algoritma Penjadwalan CPU (*CPU Scheduling*)**
   - **Deadline:** 30 November 2026
   - **Cakupan Materi:** Perhitungan total dan rata-rata lama tanggap (*Turnaround Time*) untuk proses `A–E` menggunakan algoritma **FCFS / PTPD**, **SJF / PTD**, **SRT / PTDP**, **HPRN / RPTD**, dan **Round Robin** (`kuantum = 3` & `kuantum = 5`), lengkap dengan tabel rekapitulasi serta diagram **Gantt Chart (0–30 ms)**.

---

## Fitur Utama

- **Publikasi Langsung di Web:** Seluruh pembahasan, tabel perhitungan, dan analisis dirender langsung pada halaman detail tugas.
- **Visualisasi Diagram SVG:** Grafik lintasan head track disk dan Gantt Chart CPU scheduling presisi untuk menggambarkan arah proses secara lengkap.
- **Cetak & Simpan PDF:** Dilengkapi aturan tata letak cetak (`@media print`) untuk mencetak atau menyimpan postingan tugas menjadi dokumen PDF ukuran A4 dengan bersih.
- **Filter Kategori Tugas:** Penyaringan koleksi dokumen berdasarkan kategori (`Semua`, `Tugas Harian`, `UTS`, `UAS`).
- **Editorial Minimalist UI & Smooth Motion:** Tata letak modern berbasis *Swiss grid* dengan animasi transisi **GSAP** dan *smooth scrolling* **Lenis**.

---

## Teknologi yang Digunakan

- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS v3
- **Routing:** React Router DOM
- **Animasi & Scroll:** GSAP & Lenis
- **Ikon:** Lucide React
- **Hosting & Deployment:** Vercel

---

## Struktur Direktori

```text
SIPEGAS-RAYIVAL/
├── public/
│   └── image/
│       └── rayival.jpg
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── data/
│   │   └── tasksData.js
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Home.jsx
│   │   ├── TaskDetail.jsx
│   │   └── Tasks.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js