"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await signIn("credentials", {
      email: data.get("email") as string,
      password: data.get("password") as string,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError("Email atau password salah.");
    } else {
      router.push("/admin");
      router.refresh();
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-neutral-200 p-8">
      <h1 className="text-2xl font-bold text-primary-900 mb-1">Masuk Admin Toko Kue</h1>
      <p className="text-neutral-600 mb-6">
        Akses panel administratif Toko Kue Anagata.
      </p>

      {error && (
        <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-red-700 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-neutral-900">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition"
            placeholder="admin@anagata.co.id"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-900">
            Password
          </label>
          <input
            name="password"
            type="password"
            required
            className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-primary-600 py-2.5 text-white font-semibold hover:bg-primary-700 transition disabled:opacity-70"
        >
          {loading ? "Memverifikasi..." : "Masuk"}
        </button>
      </form>
    </div>
  );
}
