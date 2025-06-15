import Layout from '../components/Layout';
import { useAuth } from '../components/AuthProvider';
import { useRouter } from 'next/router';
import { useEffect,useState } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export default function Admin() {
  const { user, isAdmin } = useAuth();
  const router = useRouter();
  const [stories,setStories]=useState([]);
  useEffect(()=>{
    if(user===null) return;
    if(!isAdmin) { router.replace('/'); return; }
    (async()=>{
      const q=query(collection(db,'stories'), where('approved','==',false));
      const snap=await getDocs(q);
      setStories(snap.docs.map(d=>({ id:d.id,...d.data()})));
    })();
  },[user,isAdmin]);
  const approve = async id => {
    await updateDoc(doc(db,'stories',id),{approved:true});
    setStories(stories.filter(s=>s.id!==id));
  };
  const reject = async id => {
    await deleteDoc(doc(db,'stories',id));
    setStories(stories.filter(s=>s.id!==id));
  };
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Panel Admina</h1>
      {stories.map(s=>(
        <div key={s.id} className="bg-white p-4 mb-4 rounded shadow">
          <p className="font-semibold">{s.title}</p>
          <p className="mb-2">{s.content}</p>
          <button onClick={()=>approve(s.id)} className="bg-green-500 text-white px-4 py-2 rounded mr-2">Zatwierdź</button>
          <button onClick={()=>reject(s.id)} className="bg-red-500 text-white px-4 py-2 rounded">Odrzuć</button>
        </div>
      ))}
    </Layout>
  );
}
