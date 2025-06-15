import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { auth } from '../firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCred.user.getIdTokenResult();
      if (token.claims.admin) {
        router.push('/admin');
      } else {
        router.push('/');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Logowanie</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Hasło</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
          >
            Zaloguj się
          </button>
        </form>
      </div>
    </Layout>
  );
}
