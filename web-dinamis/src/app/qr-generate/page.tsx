"use client";

import QRCode from "qrcode";
import { useEffect, useState } from "react";

export default function QRGenerateClient() {
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [qrDataUrl, setQrDataUrl] = useState("");

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) return;
    const dataUrl = await QRCode.toDataURL(text, { width: 400, margin: 2 });
    setQrDataUrl(dataUrl);
  };

  return (
    <div className="mx-auto max-w-lg bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">Generate Text sebagai QR Code</h2>
      <form onSubmit={handleGenerate} className="space-y-4">
        <label className="block text-sm font-medium text-neutral-900">Data Teks</label>
        <textarea
          className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-primary-500 focus:outline-none"
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Masukkan teks yang ingin diubah menjadi QR Code"
        />
        <button
          type="submit"
          className="rounded-lg bg-primary-600 px-4 py-2 text-white font-semibold hover:bg-primary-700 transition"
        >
          Buat QR Code
        </button>
      </form>
      {qrDataUrl && (
        <div className="mt-8 text-center">
          <img src={qrDataUrl} alt="Generated QR" className="mx-auto border border-neutral-200 rounded-lg p-2" />
          <a
            href={qrDataUrl}
            download="qrcode.png"
            className="inline-block mt-4 rounded-lg bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800 transition"
          >
            Download QR Code
          </a>
        </div>
      )}
    </div>
  );
}
