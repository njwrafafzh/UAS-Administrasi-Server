interface StatsCardProps {
  title: string;
  value: string | number;
  trend?: string;
}

export default function StatsCard({ title, value, trend }: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-neutral-500">{title}</p>
      <p className="text-3xl font-bold text-primary-900 mt-2">{value}</p>
      {trend && (
        <p className="text-sm text-green-600 font-medium mt-2">{trend}</p>
      )}
    </div>
  );
}
