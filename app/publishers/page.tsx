import { Suspense } from 'react';
import { getAllPublishers, getAllBooks } from '@/lib/data';
import PublishersClient from '@/components/PublishersClient';

export default function PublishersPage() {
  const publishers = getAllPublishers();
  const books = getAllBooks();

  return (
    <Suspense fallback={<div className="p-12 text-center text-zinc-500">Loading publishers...</div>}>
      <PublishersClient publishers={publishers} books={books} />
    </Suspense>
  );
}
