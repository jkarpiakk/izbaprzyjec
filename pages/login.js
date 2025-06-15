import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
export default function Login() {
  const [email,setEmail]=useState(''); const [pwd,setPwd]=useState('');
  const router=useRouter(); const auth=getAuth();
  const submit=async e=>{ e.preventDefault();
    try{
      const uc=await signInWithEmailAndPassword(auth,email,pwd);
      const tok=await uc.user.getIdTokenResult();
      router.push(tok.claims.admin?'/admin':'/');
    }catch(e){console.error(e);}
  };
  return (
    <Layout>
      <form onSubmit={submit} className="max-w-md mx-auto mt-12 bg-white p-8 rounded shadow">
        <h2 className="text-2xl mb-4">Logowanie</h2>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full mb-4 p-2 border rounded"/>
        <input type="password" placeholder="Hasło" value={pwd} onChange={e=>setPwd(e.target.value)} className="w-full mb-6 p-2 border rounded"/>
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Zaloguj się</button>
      </form>
    </Layout>
  );
}
