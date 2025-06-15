export const dynamic = 'force-dynamic';
import { useEffect, useState } from 'react';
import { useRouter }            from 'next/router';
import Layout                   from '../components/Layout';
import { useAuth }              from '../components/AuthProvider';
import { db }                   from '../firebase';
import { collection, query, where, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export default function Admin() {
  const { user, isAdmin } = useAuth();
  const router            = useRouter();
  const [stories, setStories] = useState([]);

  useEffect(() => {
    if (user === null) return;
    if (!isAdmin) { router.replace('/'); return; }
    (async () => {
      const q    = query(collection(db,'stories'), where('approved','==',false));
      const snap = await getDocs(q);
      setStories(snap.docs.map(d=>({id:d.id, ...d.data()})));
    })();
  }, [user, isAdmin, router]);

  const approve = async (id) => {
    await updateDoc(doc(db,'stories',id), { approved: true });
    setStories(s => s.filter(x => x.id !== id));
  };
  const reject = async (id) => {
    await deleteDoc(doc(db,'stories',id), { approved: false });
    setStories(s => s.filter(x => x.id !== id));
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Panel Administracyjny</h1>
      {stories.length === 0 && <p>Brak nowych historii</p>}
      {stories.map(s => (
        <div key={s.id} className="bg-white p-4 mb-4 rounded shadow">
          <p className="font-semibold mb-2">{s.title}</p>
          <p className="mb-4">{s.content}</p>
          <button onClick={()=>approve(s.id)} className="bg-green-500 text-white px-4 py-2 rounded mr-2">Zatwierdź</button>
          <button onClick={()=>reject(s.id)} className="bg-red-500 text-white px-4 py-2 rounded">Odrzuć</button>
        </div>
      ))}
    </Layout>
  );
}
