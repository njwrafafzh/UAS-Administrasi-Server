"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Mode = "create" | "edit";

type EcosystemValues = {
  id?: number;
  name: string;
  description: string;
  image: string;
};

type ProjectValues = {
  id?: number;
  title: string;
  description: string;
  status: string;
  unit: string;
};

type ContactValues = {
  id?: number;
  name: string;
  email: string;
  message: string;
};

async function sendRequest(url: string, method: "POST" | "PATCH", body: unknown) {
  const response = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.error || "Gagal menyimpan data.");
  }

  return response.json();
}

const createButtonLabel = {
  create: "Simpan",
  edit: "Perbarui",
} as const;

export function EcosystemForm({
  initialData,
  mode,
}: {
  initialData?: EcosystemValues;
  mode: Mode;
}) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSaving(true);

    const formData = new FormData(event.currentTarget);
    const payload: EcosystemValues = {
      name: String(formData.get("name") ?? "").trim(),
      description: String(formData.get("description") ?? "").trim(),
      image: String(formData.get("image") ?? "").trim(),
    };

    if (mode === "edit") {
      payload.id = initialData?.id;
    }

    try {
      await sendRequest("/api/ecosystems", mode === "create" ? "POST" : "PATCH", payload);
      router.push("/admin/ecosystems");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Gagal menyimpan data.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div>
        <label className="block text-sm font-medium text-neutral-900 mb-1.5">
          Nama
        </label>
        <input
          name="name"
          defaultValue={initialData?.name ?? ""}
          required
          className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none"
          placeholder="Nama ecosystem"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-900 mb-1.5">
          Deskripsi
        </label>
        <textarea
          name="description"
          required
          rows={4}
          defaultValue={initialData?.description ?? ""}
          className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none"
          placeholder="Deskripsi singkat"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-900 mb-1.5">
          URL Gambar
        </label>
        <input
          name="image"
          defaultValue={initialData?.image ?? ""}
          required
          className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none"
          placeholder="https://..."
        />
      </div>
      <button
        type="submit"
        disabled={saving}
        className="rounded-lg bg-primary-600 px-6 py-2.5 text-white font-semibold hover:bg-primary-700 transition disabled:opacity-70"
      >
        {createButtonLabel[mode]}
      </button>
    </form>
  );
}

export function ProjectForm({
  initialData,
  mode,
}: {
  initialData?: ProjectValues;
  mode: Mode;
}) {
  const router = useRouter();
  const [ecosystems, setEcosystems] = useState<Array<{ id: number; name: string }>>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadEcosystems() {
      try {
        const response = await fetch("/api/ecosystems");
        if (!response.ok) throw new Error("Gagal memuat ecosystem.");
        const data = await response.json();
        setEcosystems(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadEcosystems();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSaving(true);

    const formData = new FormData(event.currentTarget);
    const payload: ProjectValues = {
      title: String(formData.get("title") ?? "").trim(),
      description: String(formData.get("description") ?? "").trim(),
      status: String(formData.get("status") ?? "").trim(),
      unit: String(formData.get("unit") ?? "").trim(),
    };

    if (mode === "edit") {
      payload.id = initialData?.id;
    }

    try {
      await sendRequest("/api/projects", mode === "create" ? "POST" : "PATCH", payload);
      router.push("/admin/projects");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Gagal menyimpan data.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div>
        <label className="block text-sm font-medium text-neutral-900 mb-1.5">
          Judul
        </label>
        <input
          name="title"
          defaultValue={initialData?.title ?? ""}
          required
          className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none"
          placeholder="Judul project"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-900 mb-1.5">
          Deskripsi
        </label>
        <textarea
          name="description"
          required
          rows={4}
          defaultValue={initialData?.description ?? ""}
          className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none"
          placeholder="Deskripsi project"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-neutral-900 mb-1.5">
            Status
          </label>
          <input
            name="status"
            defaultValue={initialData?.status ?? ""}
            required
            className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none"
            placeholder="Active"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-900 mb-1.5">
            Unit
          </label>
          {ecosystems.length > 0 ? (
            <select
              name="unit"
              defaultValue={initialData?.unit ?? ""}
              required
              className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 focus:border-primary-500 focus:outline-none"
            >
              <option value="" disabled>
                Pilih unit ecosystem
              </option>
              {ecosystems.map((ecosystem) => (
                <option key={ecosystem.id} value={ecosystem.name}>
                  {ecosystem.name}
                </option>
              ))}
              {!ecosystems.some((eco) => eco.name === initialData?.unit) && initialData?.unit ? (
                <option value={initialData.unit}>{initialData.unit}</option>
              ) : null}
            </select>
          ) : (
            <>
              <input
                name="unit"
                defaultValue={initialData?.unit ?? ""}
                required
                className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none"
                placeholder="Tidak ada ecosystem tersedia"
                disabled={!initialData?.unit}
              />
              <p className="mt-2 text-sm text-neutral-500">
                Tambahkan ecosystem terlebih dahulu agar unit bisa dipilih dari daftar.
              </p>
            </>
          )}
        </div>
      </div>
      <button
        type="submit"
        disabled={saving}
        className="rounded-lg bg-primary-600 px-6 py-2.5 text-white font-semibold hover:bg-primary-700 transition disabled:opacity-70"
      >
        {createButtonLabel[mode]}
      </button>
    </form>
  );
}

export function ContactForm({
  initialData,
  mode,
}: {
  initialData?: ContactValues;
  mode: Mode;
}) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSaving(true);

    const formData = new FormData(event.currentTarget);
    const payload: ContactValues = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (mode === "edit") {
      payload.id = initialData?.id;
    }

    try {
      await sendRequest("/api/contact", mode === "create" ? "POST" : "PATCH", payload);
      router.push("/admin/contacts");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Gagal menyimpan data.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div>
        <label className="block text-sm font-medium text-neutral-900 mb-1.5">
          Nama
        </label>
        <input
          name="name"
          defaultValue={initialData?.name ?? ""}
          required
          className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none"
          placeholder="Nama pengirim"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-900 mb-1.5">
          Email
        </label>
        <input
          name="email"
          type="email"
          defaultValue={initialData?.email ?? ""}
          required
          className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none"
          placeholder="email@contoh.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-900 mb-1.5">
          Pesan
        </label>
        <textarea
          name="message"
          required
          rows={5}
          defaultValue={initialData?.message ?? ""}
          className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none"
          placeholder="Pesan"
        />
      </div>
      <button
        type="submit"
        disabled={saving}
        className="rounded-lg bg-primary-600 px-6 py-2.5 text-white font-semibold hover:bg-primary-700 transition disabled:opacity-70"
      >
        {createButtonLabel[mode]}
      </button>
    </form>
  );
}
