import { Suspense } from 'react';
import { getAllBooks, getAllAuthors } from '@/lib/data';
import BooksClient from '@/components/BooksClient';

export default function BooksPage() {
  const books = getAllBooks();
  const authors = getAllAuthors();

  return (
    <Suspense fallback={<div className="p-12 text-center text-zinc-500">Loading books...</div>}>
      <BooksClient initialBooks={books} authors={authors} />
    </Suspense>
  );
}
