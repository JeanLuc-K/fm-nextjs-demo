import { Skeleton } from '@/components/Skeleton';

export default function BookDetailLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Skeleton className="h-5 w-28 mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        {/* Cover */}
        <div className="md:col-span-1">
          <Skeleton className="h-96 md:h-[500px] w-full rounded-lg" />
        </div>

        {/* Details */}
        <div className="md:col-span-2 space-y-4">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-6 w-24 rounded-full" />

          <div className="space-y-2 pt-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
          </div>

          <div className="flex gap-3 pt-2">
            <Skeleton className="h-8 w-24 rounded-full" />
            <Skeleton className="h-8 w-28 rounded-full" />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <Skeleton className="h-16 rounded-lg" />
            <Skeleton className="h-16 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Other books by author */}
      <div className="mt-12">
        <Skeleton className="h-8 w-56 mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex gap-4">
              <Skeleton className="h-24 w-16 flex-shrink-0 rounded" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
