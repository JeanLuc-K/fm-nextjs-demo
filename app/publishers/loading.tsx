import { Skeleton } from '@/components/Skeleton';

export default function PublishersLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header + controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <Skeleton className="h-10 w-48" />
        <div className="flex gap-3">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-10 w-36" />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-zinc-200 dark:border-zinc-700">
          {['Name', 'Country', 'Founded', 'Books'].map((_, i) => (
            <Skeleton key={i} className="h-4 w-20" />
          ))}
        </div>

        {/* Table rows */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-zinc-100 dark:border-zinc-800 last:border-0"
          >
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-8" />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-8">
        <Skeleton className="h-9 w-20 rounded-lg" />
        <Skeleton className="h-9 w-20 rounded-lg" />
      </div>
    </div>
  );
}
