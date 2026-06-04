import { hash } from "bcryptjs";
import { pool } from "./db";

export async function initializeDatabase() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      name VARCHAR(255),
      role VARCHAR(50) DEFAULT 'admin',
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  const existing: any[] = await pool.query(
    "SELECT id FROM users WHERE email = ?",
    ["admin@konfigura.co.id"]
  );

  if (existing[0].length === 0) {
    const hashed = await hash("admin123", 10);
    await pool.query(
      "INSERT INTO users (email, password, name) VALUES (?, ?, ?)",
      ["admin@konfigura.co.id", hashed, "Admin Konfigura"]
    );
    console.log("Default admin user created: admin@konfigura.co.id / admin123");
  }
}

export async function seedDummyData() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS ecosystems (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      image VARCHAR(500),
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS projects (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      status VARCHAR(100),
      unit VARCHAR(255),
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      message TEXT,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  const ecosystems = [
    ["Konfigura Tech", "Solusi teknologi modern untuk transformasi digital.", "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"],
    ["Konfigura Farm", "Pengelolaan pertanian dan peternakan berkelanjutan.", "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80"],
    ["Konfigura Institute", "Pendidikan dan pelatihan berbasis praktik.", "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"],
    ["Konfigura Foundation", "Program pemberdayaan sosial dan kemanusiaan.", "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"],
  ];

  for (const [name, desc, img] of ecosystems) {
    await pool.query(
      "INSERT IGNORE INTO ecosystems (name, description, image) VALUES (?, ?, ?)",
      [name, desc, img]
    );
  }

  const projects = [
    ["Sistem Informasi Terpadu", "Pengembangan platform TI untuk semua unit bisnis.", "Active", "Konfigura Tech"],
    ["Program Kepemimpinan", "Pelatihan kepemimpinan untuk staf dan mitra.", "Active", "Konfigura Institute"],
    ["Green Farm Initiative", "Program pertanian berkelanjutan skala masyarakat.", "Ongoing", "Konfigura Farm"],
  ];

  for (const [title, desc, status, unit] of projects) {
    await pool.query(
      "INSERT IGNORE INTO projects (title, description, status, unit) VALUES (?, ?, ?, ?)",
      [title, desc, status, unit]
    );
  }

  const contacts = [
    ["Budi Santoso", "budi@contoh.com", "Saya tertarik bekerja sama dengan ."],
    ["Siti Nurhaliza", "siti@perusahaan.id", "Ingin info lebih lanjut tentang program CSR."],
    ["Andi Wijaya", "andi@startup.id", "Permintaan partnership untuk proyek farm."],
  ];

  for (const [name, email, msg] of contacts) {
    await pool.query(
      "INSERT IGNORE INTO contacts (name, email, message) VALUES (?, ?, ?)",
      [name, email, msg]
    );
  }

  console.log("Dummy data seeded: ecosystems, projects, contacts.");
}
