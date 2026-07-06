import { Skeleton } from '@/components/Skeleton';

export default function PublisherDetailLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Skeleton className="h-5 w-36 mb-6" />

      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8 mt-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Name + description */}
          <div className="flex-1 space-y-3">
            <Skeleton className="h-10 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-3 min-w-48">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-zinc-100 dark:bg-zinc-800 px-4 py-3 rounded-lg space-y-1">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-5 w-28" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Books table */}
      <div className="mt-12">
        <Skeleton className="h-8 w-56 mb-6" />

        <div className="overflow-x-auto rounded-lg shadow">
          <div className="min-w-full bg-white dark:bg-zinc-900 divide-y divide-zinc-200 dark:divide-zinc-700">
            {/* Header */}
            <div className="bg-zinc-50 dark:bg-zinc-800 grid grid-cols-5 gap-4 px-6 py-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-3 w-16" />
              ))}
            </div>

            {/* Rows */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-5 gap-4 px-6 py-4 border-b border-zinc-100 dark:border-zinc-800 last:border-0"
              >
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-4 w-20 rounded-full" />
                <Skeleton className="h-4 w-12 ml-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
