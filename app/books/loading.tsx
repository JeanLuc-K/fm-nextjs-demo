import { Skeleton } from '@/components/Skeleton';

function BookCardSkeleton() {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden">
      <Skeleton className="h-64 w-full rounded-none" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  );
}

export default function BooksLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header + search bar area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-10 w-64" />
      </div>

      {/* Genre filter chips */}
      <div className="flex gap-2 flex-wrap mb-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-8 w-20 rounded-full" />
        ))}
      </div>

      {/* Book grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <BookCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
