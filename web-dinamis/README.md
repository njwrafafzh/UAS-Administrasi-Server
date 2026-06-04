# Konfigura Corp

Perusahaan terpadu di bidang **teknologi**, **pertanian**, **pendidikan**, dan **pengembangan sosial**.

## Tech Stack
- **Next.js** 16 + **React** 19 + **TypeScript**
- **NextAuth** v4 (Credentials + bcrypt)
- **Tailwind CSS** 4
- **MySQL / MariaDB** (mysql2/promise)
- Steganografi via QR Code (dekripsi + convert text to image)

## Instalasi
1. Setup database:
   ```bash
   mysql -u root -p < src/lib/schema.sql
   ```
2. Copy `.env.example` → `.env` dan isi kredensial database.
3. Install dependencies: `npm install`
4. Jalankan: `npm run dev`
5. Akses admin: `/login` dengan default user `admin@konfigura.co.id / admin123`

## Struktur
- `src/app/` - Halaman (public + admin)
- `src/components/` - Komponen UI
- `src/lib/` - Database & utilitas
- `src/contexts/` - Context (steganografi)
