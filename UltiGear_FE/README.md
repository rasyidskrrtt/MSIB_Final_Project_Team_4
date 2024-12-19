# Panduan Setup Frontend UltiGear

Panduan ini akan membantu Anda mengatur aplikasi Frontend UltiGear secara lokal.

---

## Langkah-Langkah Instalasi

Ikuti langkah-langkah berikut untuk menjalankan aplikasi di komputer Anda:

1. **Kloning Repository**

   ```bash
   git clone <repository-url>
   ```

2. **Pindah ke Branch Frontend**

   ```bash
   git checkout frontend
   ```

3. **Masuk ke Direktori Proyek**

   Tampilkan file dalam repository untuk menemukan direktori `UltiGear_FE`:

   ```bash
   ls
   ```

   Masuk ke direktori `UltiGear_FE`:

   ```bash
   cd UltiGear_FE/
   ```

4. **Instalasi Dependensi**

   Jalankan perintah berikut untuk menginstal semua paket yang diperlukan:

   ```bash
   npm install
   ```

5. **Jalankan Server Pengembangan**

   Mulai aplikasi dalam mode pengembangan:

   ```bash
   npm run dev
   ```

   Setelah server berjalan, Anda dapat mengakses aplikasi melalui browser pada URL yang diberikan (biasanya `http://localhost:2828`).

---

## Tentang Proyek

### React + Vite

Proyek ini menggunakan Vite untuk pengalaman pengembangan yang cepat dan optimal dengan React.

### Plugin

Dua plugin resmi didukung untuk meningkatkan fungsionalitas:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Menggunakan [Babel](https://babeljs.io/) untuk Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Menggunakan [SWC](https://swc.rs/) untuk Fast Refresh.

Lihat dokumentasi mereka untuk detail tambahan dan opsi konfigurasi.

---

Selamat coding dengan **UltiGear Frontend**!

