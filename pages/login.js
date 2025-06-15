export const dynamic = 'force-dynamic';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const router                  = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const token = await cred.user.getIdTokenResult();
      router.push(token.claims.admin ? '/admin' : '/');
    } catch (err) {
      alert('Błąd logowania: ' + err.message);
    }
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-12 bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-semibold mb-6 text-center">Logowanie</h2>
        <label className="block mb-4">
          <span>Email</span>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                 className="w-full p-2 border rounded"/>
        </label>
        <label className="block mb-6">
          <span>Hasło</span>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
                 className="w-full p-2 border rounded"/>
        </label>
        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">Zaloguj się</button>
      </form>
    </Layout>
  );
}
