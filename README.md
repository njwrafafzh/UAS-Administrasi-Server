
# Laporan UAS: Deployment Aplikasi Web dengan Docker dan GitHub Actions

**Administrasi Server - UAS**

**Nama:** Abdul Kharis

**NIM:** 2388010004

**Tanggal Pelaksanaan:** 05/06/2026

---

## 🎯 Tujuan

- Mendokumentasikan proses deployment aplikasi web menggunakan Docker dan GitHub Actions.
- Mengimplementasikan pengaturan server, container, dan workflow CI/CD.
- Menguji akses aplikasi melalui web statis, web dinamis, dan halaman admin.

---

## 📋 Langkah Kerja dan Dokumentasi

### 1. Membuat instance baru

- Menyiapkan dan membuat instance server baru di layanan cloud.
- Menyimpan file key pair `.pem` dengan aman untuk akses SSH.

Dokumentasi:

![Membuat instance baru](image/laporan/1780564423803.png)

---

### 2. Menyimpan key pair `.pem`

- Mengunduh file kunci privat `.pem` dari platform cloud.
- Menyimpan file ini di lokasi yang aman agar dapat digunakan untuk login server.

Dokumentasi:

![Menyimpan key pair .pem</code></code>](image/laporan/1780564508835.png)

---

### 3. Menyesuaikan konfigurasi firewall

- Membuka port `80` untuk akses HTTP.
- Membuka port `3000` untuk akses aplikasi web yang berjalan pada port tersebut.

Dokumentasi:

![Menyalakan port 80 dan 3000](image/laporan/1780577966045.png)

---

### 4. Menginstal Docker Engine

- Menghapus paket Docker lama terlebih dahulu.
- Menginstal `docker-ce`, `docker-ce-cli`, `containerd.io`, `docker-buildx-plugin`, dan `docker-compose-plugin`.
- Memverifikasi status layanan Docker agar dapat digunakan untuk deployment.

Perintah yang digunakan:

```bash
sudo apt remove $(dpkg --get-selections docker.io docker-compose docker-compose-v2 docker-doc podman-docker containerd runc | cut -f1)
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo systemctl status docker
```

Dokumentasi:

![Instalasi Docker Engine](image/laporan/1780565387156.png)

---

### 5. Menyiapkan Docker Hub

- Membuat token akses Docker Hub untuk autentikasi push image.
- Mengatur repository baru di Docker Hub dengan nama `konfigura_uas`.

Dokumentasi:

![Docker Hub token](image/laporan/1780567836151.png)

![Repo Docker Hub konfigura_uas</code></code>](image/laporan/1780568313881.png)

---

### 6. Mengonfigurasi GitHub Actions

- Membuat secret key di GitHub Actions agar workflow dapat terhubung ke Docker Hub.
- Menambahkan variabel rahasia untuk proses build dan deploy otomatis.

Dokumentasi:

![Secret key GitHub Actions](image/laporan/1780568575561.png)

---

### 7. Menyalin dan menyesuaikan file deploy

- Menyalin file aplikasi yang akan dideploy ke repository GitHub.
- Menyesuaikan konfigurasi Docker dan deployment sesuai struktur aplikasi.

Dokumentasi:

![Menyiapkan file deploy](image/laporan/1780584243437.png)

---

### 8. Push dan verifikasi deployment

- Mengirimkan perubahan ke GitHub untuk menjalankan workflow GitHub Actions.
- Memeriksa status deploy dan alamat IP publik aplikasi.

Dokumentasi:

![Verifikasi aplikasi dinamis](image/laporan/1780570722872.png)

---

### 9. Verifikasi tampilan web statis

- Mengecek halaman web statis setelah deploy.

Dokumentasi:

![Cek web statis](image/laporan/1780584487430.png)

---

### 10. Verifikasi tampilan web dinamis

- Mengecek halaman web dinamis yang berjalan di server.

Dokumentasi:

![Cek web dinamis](image/laporan/1780584436738.png)

---

### 11. Verifikasi halaman admin

- Mengecek halaman admin untuk memastikan akses backend berhasil.

Dokumentasi:

![Cek halaman admin](image/laporan/1780584532792.png)

---

## ✅ Hasil

- Instance server berhasil dibuat dan key pair `.pem` tersimpan aman.
- Port firewall yang diperlukan (`80`, `3000`) berhasil dibuka.
- Docker Engine berhasil diinstal dan berjalan normal.
- Docker Hub token dibuat dan repository `konfigura_uas` tersedia.
- GitHub Actions berhasil dikonfigurasi dan workflow deploy dijalankan.
- Aplikasi berhasil dideploy dan dapat diakses di lingkungan produksi.
- Verifikasi menunjukkan web statis, web dinamis, dan halaman admin berfungsi.

---

## 📌 Kesimpulan

Proses deployment dilakukan dengan tahapan yang jelas: pembuatan instance, konfigurasi keamanan, instalasi Docker, pembuatan repository Docker Hub, pengaturan GitHub Actions, dan verifikasi aplikasi. Semua dokumentasi dilengkapi sesuai langkah kerja sehingga laporan menjadi lebih profesional dan mudah diikuti.
