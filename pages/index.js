export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { db } from '../firebase';
import {
  collection,
  query,
  where,
  orderBy,
  getDocs
} from 'firebase/firestore';

export default function Home() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    (async () => {
      const q = query(
        collection(db, 'stories'),
        where('approved', '==', true),
        orderBy('createdAt', 'desc')
      );
      const snap = await getDocs(q);
      setStories(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    })();
  }, []);

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Top Stories</h1>
          <Link href="/add-story">
            <a className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Dodaj historię
            </a>
          </Link>
        </div>

        {stories.length === 0 ? (
          <p className="text-center text-gray-600">Brak historii do wyświetlenia.</p>
        ) : stories.map(s => (
          <div key={s.id} className="bg-white p-4 mb-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
            <p className="text-gray-700 mb-4">{s.content}</p>
            <div className="text-sm text-gray-500">
              {s.createdAt?.seconds
                ? new Date(s.createdAt.seconds * 1000).toLocaleString()
                : ''}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
