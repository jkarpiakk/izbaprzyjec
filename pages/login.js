// Wymuszamy rendering po stronie klienta
export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { auth } from '../firebase';                // importujemy gotowy auth
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');
  const router                = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // logujemy się przy pomocy gotowego auth
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const token    = await userCred.user.getIdTokenResult();
      // przekierowanie wg roli
      router.push(token.claims.admin ? '/admin' : '/');
    } catch (err) {
      console.error('Login error:', err);
      alert('Błąd logowania: ' + err.message);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <form onSubmit={handleSubmit}
              className="w-full max-w-md bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-semibold mb-6 text-center">Logowanie</h2>
          <label className="block mb-2">
            <span className="text-sm font-medium">Email</span>
            <input type="email" required
                   value={email}
                   onChange={e => setEmail(e.target.value)}
                   className="w-full p-2 border rounded"/>
          </label>
          <label className="block mb-6">
            <span className="text-sm font-medium">Hasło</span>
            <input type="password" required
                   value={password}
                   onChange={e => setPassword(e.target.value)}
                   className="w-full p-2 border rounded"/>
          </label>
          <button type="submit"
                  className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded">
            Zaloguj się
          </button>
        </form>
      </div>
    </Layout>
  );
}
