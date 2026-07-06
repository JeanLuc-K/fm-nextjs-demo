import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  prevHref: string | null;
  nextHref: string | null;
}

export default function Pagination({ currentPage, totalPages, prevHref, nextHref }: PaginationProps) {
  if (totalPages <= 1) return null;

  const linkClass = 'px-4 py-2 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-sm font-medium';
  const disabledClass = 'px-4 py-2 rounded-md bg-zinc-50 dark:bg-zinc-900 text-zinc-300 dark:text-zinc-600 text-sm font-medium cursor-not-allowed select-none';

  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      {prevHref ? (
        <Link href={prevHref} className={linkClass}>← Previous</Link>
      ) : (
        <span className={disabledClass}>← Previous</span>
      )}

      <span className="text-sm text-zinc-600 dark:text-zinc-400">
        Page {currentPage} of {totalPages}
      </span>

      {nextHref ? (
        <Link href={nextHref} className={linkClass}>Next →</Link>
      ) : (
        <span className={disabledClass}>Next →</span>
      )}
    </div>
  );
}
