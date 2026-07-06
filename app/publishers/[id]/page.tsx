import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPublisherById, getBooksByPublisherId, getAuthorById } from '@/lib/data';

export default async function PublisherPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const publisher = getPublisherById(parseInt(id));

  if (!publisher) {
    notFound();
  }

  const books = getBooksByPublisherId(publisher.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/publishers"
        className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 mb-6 inline-block"
      >
        ← Back to Publishers
      </Link>

      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8 mt-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              {publisher.name}
            </h1>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
              {publisher.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 min-w-48">
            <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-3 rounded-lg">
              <span className="text-sm text-zinc-500 dark:text-zinc-400 block mb-1">Country</span>
              <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                {publisher.country}
              </span>
            </div>
            <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-3 rounded-lg">
              <span className="text-sm text-zinc-500 dark:text-zinc-400 block mb-1">Founded</span>
              <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                {publisher.foundedYear}
              </span>
            </div>
            <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-3 rounded-lg">
              <span className="text-sm text-zinc-500 dark:text-zinc-400 block mb-1">Books</span>
              <span className="font-semibold text-zinc-900 dark:text-zinc-50">{books.length}</span>
            </div>
            <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-3 rounded-lg">
              <span className="text-sm text-zinc-500 dark:text-zinc-400 block mb-1">Website</span>
              <a
                href={publisher.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 break-all"
              >
                {publisher.website.replace(/^https?:\/\//, '')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Books */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
          Books by {publisher.name}
        </h2>

        {books.length === 0 ? (
          <p className="text-zinc-600 dark:text-zinc-400">No books found for this publisher.</p>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full bg-white dark:bg-zinc-900 divide-y divide-zinc-200 dark:divide-zinc-700">
              <thead className="bg-zinc-50 dark:bg-zinc-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Year
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Genre
                  </th>
                  <th className="px-6 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {books.map((book) => {
                  const author = getAuthorById(book.authorId);
                  return (
                    <tr
                      key={book.id}
                      className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                    >
                      <td className="px-6 py-4 font-semibold text-zinc-900 dark:text-zinc-50">
                        {book.title}
                      </td>
                      <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400">
                        {author ? (
                          <Link
                            href={`/authors/${author.id}`}
                            className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                          >
                            {author.name}
                          </Link>
                        ) : (
                          'Unknown'
                        )}
                      </td>
                      <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400">
                        {book.publishedYear}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200">
                          {book.genre}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Link
                          href={`/books/${book.id}`}
                          className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                        >
                          View →
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
