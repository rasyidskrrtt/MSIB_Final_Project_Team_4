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

   Server backend akan berjalan pada URL yang ditentukan (biasanya `http://localhost:5000`).

---

## Tentang Proyek

### Teknologi yang Digunakan

Backend UltiGear dibangun menggunakan teknologi berikut:

- **Node.js**: Runtime JavaScript untuk membangun aplikasi backend yang cepat dan ringan.
- **Express.js**: Framework untuk membangun API yang kuat dan modular.
- **MongoDB**: Basis data NoSQL untuk menyimpan data secara fleksibel.

### Struktur Proyek

Struktur direktori utama:

- `controllers/`: Berisi logika aplikasi dan pengolahan data.
- `routes/`: Menangani routing untuk setiap endpoint API.
- `models/`: Berisi definisi skema database menggunakan Mongoose.
- `config/`: Pengaturan dan konfigurasi seperti koneksi database.

---

Selamat coding dengan **UltiGear Backend**!

