"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface DataTableProps {
  columns: { key: string; label: string }[];
  rows: Record<string, unknown>[];
  addHref: string;
  editHrefPrefix?: string;
  deleteApiPath?: string;
}

export default function DataTable({ columns, rows, addHref, editHrefPrefix, deleteApiPath }: DataTableProps) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string | number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async (id: string | number) => {
    if (!deleteApiPath) return;
    if (!window.confirm("Hapus data ini? Tindakan ini tidak dapat dibatalkan.")) {
      return;
    }

    setDeletingId(id);
    setError(null);

    try {
      const response = await fetch(deleteApiPath, {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error || "Gagal menghapus data.");
      }

      router.refresh();
    } catch (deleteError) {
      setError(deleteError instanceof Error ? deleteError.message : "Gagal menghapus data.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-neutral-200 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-sm font-medium text-neutral-500">{rows.length} data</span>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          {error && <p className="text-sm text-red-600">{error}</p>}
          <a
            href={addHref}
            className="inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700 transition"
          >
            + Tambah
          </a>
        </div>
      </div>

      {rows.length === 0 ? (
        <div className="px-6 py-16 text-center">
          <p className="text-neutral-500">Belum ada data.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed divide-y divide-neutral-200">
            <colgroup>
              {columns.map((col) => (
                <col key={col.key} className="w-1/4" />
              ))}
              <col className="w-40" />
            </colgroup>
            <thead className="bg-neutral-50">
              <tr>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="max-w-[14rem] px-6 py-3 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wider whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    {col.label}
                  </th>
                ))}
                <th className="px-6 py-3 text-right text-xs font-semibold text-neutral-500 uppercase tracking-wider whitespace-nowrap">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 bg-white">
              {rows.map((row, idx) => {
                const rawId = row.id ?? row["id"];
                const id = typeof rawId === "string" || typeof rawId === "number" ? rawId : undefined;
                const editHref = editHrefPrefix && id !== undefined ? `${editHrefPrefix}/${id}` : undefined;

                return (
                  <tr key={idx} className="hover:bg-neutral-50 transition">
                    {columns.map((col) => (
                      <td key={col.key} className="max-w-[14rem] px-6 py-4 text-sm text-neutral-900 overflow-hidden whitespace-nowrap text-ellipsis">
                        <div className="truncate">{String(row[col.key] ?? "-")}</div>
                      </td>
                    ))}
                    <td className="px-6 py-4 text-right text-sm space-x-3 whitespace-nowrap">
                      {editHref ? (
                        <a
                          href={editHref}
                          className="text-primary-600 hover:text-primary-700 font-medium"
                        >
                          Edit
                        </a>
                      ) : null}
                      {deleteApiPath && id !== undefined ? (
                        <button
                          type="button"
                          disabled={deletingId === id}
                          onClick={() => handleDelete(id)}
                          className="text-red-600 hover:text-red-700 font-medium disabled:opacity-50"
                        >
                          Hapus
                        </button>
                      ) : null}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
