export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function AddStory() {
  const [title, setTitle]     = useState('');
  const [content, setContent] = useState('');
  const router                = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();
    await addDoc(collection(db, 'stories'), {
      title,
      content,
      approved: false,
      createdAt: serverTimestamp()
    });
    router.push('/');
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-12 bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-semibold mb-6">Dodaj nową historię</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="block text-sm font-medium mb-1">Tytuł</span>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block mb-6">
            <span className="block text-sm font-medium mb-1">Treść</span>
            <textarea
              value={content}
              onChange={e => setContent(e.target.value)}
              required
              rows="4"
              className="w-full p-2 border rounded"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
          >
            Wyślij do moderacji
          </button>
        </form>
      </div>
    </Layout>
  );
}
