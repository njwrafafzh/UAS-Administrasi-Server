CREATE DATABASE IF NOT EXISTS toko_kue;
USE toko_kue;

CREATE TABLE IF NOT EXISTS admin (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    nama_lengkap VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS produk (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nama_kue VARCHAR(150) NOT NULL,
    harga INT UNSIGNED NOT NULL,
    deskripsi TEXT,
    gambar VARCHAR(255)
);

INSERT IGNORE INTO admin (username, password, nama_lengkap)
VALUES ('admin', '$2y$10$PXgdO6GTuoKyGQSQNQrA7e0JvzbsZpeZFpCUEA7wu7ZBB.vfhx1BC', 'Administrator');
