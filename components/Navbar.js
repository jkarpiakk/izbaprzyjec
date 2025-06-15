import Link from 'next/link';
import { useAuth } from './AuthProvider';
import { auth } from '../firebase';

export default function Navbar() {
  const { user, isAdmin } = useAuth();
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center">
      <Link href="/"><a className="font-bold text-lg">Izba Przyjęć</a></Link>
      <div className="space-x-4">
        {isAdmin && <Link href="/admin"><a>Panel Admina</a></Link>}
        {!user ? (
          <>
            <Link href="/login"><a>Logowanie</a></Link>
            <Link href="/register"><a>Rejestracja</a></Link>
          </>
        ) : (
          <button onClick={() => auth.signOut()} className="hover:underline">Wyloguj</button>
        )}
      </div>
    </nav>
  );
}
