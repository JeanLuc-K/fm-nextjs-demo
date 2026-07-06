'use client';

import { useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Publisher, Book } from '@/lib/data';

interface PublishersClientProps {
  publishers: Publisher[];
  books: Book[];
}

type SortField = 'name' | 'country' | 'foundedYear' | 'bookCount';
type SortDir = 'asc' | 'desc';

export default function PublishersClient({ publishers, books }: PublishersClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = searchParams.get('search') ?? '';
  const country = searchParams.get('country') ?? 'all';
  const sortField = (searchParams.get('sort') ?? 'name') as SortField;
  const sortDir = (searchParams.get('dir') ?? 'asc') as SortDir;

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === '' || value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`/publishers?${params.toString()}`);
  };

  const handleSort = (field: SortField) => {
    const params = new URLSearchParams(searchParams.toString());
    if (sortField === field) {
      params.set('dir', sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      params.set('sort', field);
      params.delete('dir');
    }
    router.push(`/publishers?${params.toString()}`);
  };

  const countries = useMemo(() => {
    const set = new Set(publishers.map((p) => p.country));
    return Array.from(set).sort();
  }, [publishers]);

  const processed = useMemo(() => {
    const withCount = publishers.map((p) => ({
      ...p,
      bookCount: books.filter((b) => b.publisherId === p.id).length,
    }));

    const filtered = withCount.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesCountry = country === 'all' || p.country === country;
      return matchesSearch && matchesCountry;
    });

    filtered.sort((a, b) => {
      let cmp = 0;
      if (sortField === 'name') cmp = a.name.localeCompare(b.name);
      else if (sortField === 'country') cmp = a.country.localeCompare(b.country);
      else if (sortField === 'foundedYear') cmp = a.foundedYear - b.foundedYear;
      else if (sortField === 'bookCount') cmp = a.bookCount - b.bookCount;
      return sortDir === 'asc' ? cmp : -cmp;
    });

    return filtered;
  }, [publishers, books, search, country, sortField, sortDir]);

  const SortIndicator = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <span className="text-zinc-400 ml-1">↕</span>;
    return <span className="ml-1">{sortDir === 'asc' ? '↑' : '↓'}</span>;
  };

  const thClass =
    'px-6 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider cursor-pointer select-none hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">
        Publishers
      </h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search publishers..."
          value={search}
          onChange={(e) => updateParam('search', e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500"
        />
        <select
          value={country}
          onChange={(e) => updateParam('country', e.target.value)}
          className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-500"
        >
          <option value="all">All Countries</option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        {processed.length} {processed.length === 1 ? 'publisher' : 'publishers'} found
      </p>

      {processed.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            No publishers found matching your criteria.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white dark:bg-zinc-900 divide-y divide-zinc-200 dark:divide-zinc-700">
            <thead className="bg-zinc-50 dark:bg-zinc-800">
              <tr>
                <th className={thClass} onClick={() => handleSort('name')}>
                  Name <SortIndicator field="name" />
                </th>
                <th className={thClass} onClick={() => handleSort('country')}>
                  Country <SortIndicator field="country" />
                </th>
                <th className={thClass} onClick={() => handleSort('foundedYear')}>
                  Founded <SortIndicator field="foundedYear" />
                </th>
                <th className={thClass} onClick={() => handleSort('bookCount')}>
                  Books <SortIndicator field="bookCount" />
                </th>
                <th className="px-6 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {processed.map((publisher) => (
                <tr
                  key={publisher.id}
                  className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  <td className="px-6 py-4">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                      {publisher.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400">
                    {publisher.country}
                  </td>
                  <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400">
                    {publisher.foundedYear}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200">
                      {publisher.bookCount}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      href={`/publishers/${publisher.id}`}
                      className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                    >
                      View →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
