# Panduan Setup Backend UltiGear

Panduan ini akan membantu Anda mengatur aplikasi Backend UltiGear secara lokal.

---

## Langkah-Langkah Instalasi

Ikuti langkah-langkah berikut untuk menjalankan aplikasi di komputer Anda:

1. **Kloning Repository**

   ```bash
   git clone <repository-url>
   ```

2. **Pindah ke Branch Backend**

   ```bash
   git checkout backend
   ```

3. **Masuk ke Direktori Proyek**

   Tampilkan file dalam repository untuk menemukan direktori `UltiGear_BE`:

   ```bash
   ls
   ```

   Masuk ke direktori `UltiGear_BE`:

   ```bash
   cd UltiGear_BE/
   ```

4. **Instalasi Dependensi**

   Jalankan perintah berikut untuk menginstal semua paket yang diperlukan:

   ```bash
   npm install
   ```

5. **Jalankan Server Pengembangan**

   Mulai aplikasi backend dalam mode pengembangan:

   ```bash
   npm run dev
   ```

   Server backend akan berjalan pada URL yang ditentukan (biasanya `http://localhost:2828`).

---

## Tentang Proyek

### Teknologi yang Digunakan

Backend UltiGear dibangun menggunakan teknologi berikut:

- **Node.js**: Runtime JavaScript untuk membangun aplikasi backend yang cepat dan ringan.
- **Express.js**: Framework untuk membangun API yang kuat dan modular.
- **MongoDB**: Basis data NoSQL untuk menyimpan data secara fleksibel.

### Struktur Proyek

Struktur direktori utama:

- `src/`
  - `config/`: Pengaturan dan konfigurasi seperti koneksi database.
  - `controllers/`: Berisi logika aplikasi dan pengolahan data.
  - `middleware/`: Middleware untuk menangani request sebelum mencapai controller.
  - `models/`: Berisi definisi skema database menggunakan Mongoose.
  - `routes/`: Menangani routing untuk setiap endpoint API.
  - `seeders/`: Berisi file untuk mengisi data awal ke database.
  - `utils/`: Fungsi utilitas umum yang digunakan dalam aplikasi.
  - `app.js`: File utama untuk menginisialisasi aplikasi.

- `.env`: File konfigurasi lingkungan untuk variabel-variabel sensitif.
- `.env.example`: Contoh file konfigurasi lingkungan.
- `.gitignore`: File untuk mengecualikan file/direktori tertentu dari Git.
- `package.json`: Berisi metadata proyek dan dependensi yang dibutuhkan.
- `package-lock.json`: File yang mencatat versi pasti dari dependensi.
- `randomString.js`: File utilitas untuk menghasilkan string acak.
- `README.md`: Dokumentasi proyek.

---

Selamat coding dengan **UltiGear Backend**!

