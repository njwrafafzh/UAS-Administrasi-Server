import { hash } from "bcryptjs";
import { pool } from "./db";

const sampleEcosystems = [
  ["Konfigura Tech", "Solusi teknologi modern untuk transformasi digital.", "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"],
  ["Konfigura Farm", "Pengelolaan pertanian dan peternakan berkelanjutan.", "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80"],
  ["Konfigura Institute", "Pendidikan dan pelatihan berbasis praktik.", "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"],
  ["Konfigura Foundation", "Program pemberdayaan sosial dan kemanusiaan.", "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"],
];

const sampleProjects = [
  ["Sistem Informasi Terpadu", "Pengembangan platform TI untuk semua unit bisnis.", "Active", "Konfigura Tech"],
  ["Program Kepemimpinan", "Pelatihan kepemimpinan untuk staf dan mitra.", "Active", "Konfigura Institute"],
  ["Green Farm Initiative", "Program pertanian berkelanjutan skala masyarakat.", "Ongoing", "Konfigura Farm"],
];

export async function seedDatabase() {
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

  for (const [name, desc, img] of sampleEcosystems) {
    await pool.query(
      "INSERT IGNORE INTO ecosystems (name, description, image) VALUES (?, ?, ?)",
      [name, desc, img]
    );
  }

  for (const [title, desc, status, unit] of sampleProjects) {
    await pool.query(
      "INSERT IGNORE INTO projects (title, description, status, unit) VALUES (?, ?, ?, ?)",
      [title, desc, status, unit]
    );
  }

  console.log("Seed data inserted.");
}

if (require.main === module) {
  seedDatabase()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
