import { Skeleton } from '@/components/Skeleton';

export default function AuthorDetailLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Skeleton className="h-5 w-32 mb-6" />

      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8 mt-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <Skeleton className="w-48 h-48 rounded-full" />
          </div>

          {/* Details */}
          <div className="flex-1 space-y-4">
            <Skeleton className="h-10 w-2/3" />
            <Skeleton className="h-9 w-28 rounded-lg" />

            <div className="flex flex-wrap gap-4">
              <Skeleton className="h-10 w-32 rounded-lg" />
              <Skeleton className="h-10 w-32 rounded-lg" />
              <Skeleton className="h-10 w-32 rounded-lg" />
            </div>

            <div className="space-y-2 pt-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </div>
        </div>
      </div>

      {/* Books by author */}
      <div className="mt-12">
        <Skeleton className="h-8 w-48 mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden">
              <Skeleton className="h-48 w-full rounded-none" />
              <div className="p-4 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
