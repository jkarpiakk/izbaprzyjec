import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 flex items-center justify-between">
      <Link href="/">
        <a className="flex items-center">
          <img src="/logo.png" alt="Izba Przyjęć" className="h-8 mr-2" />
          <span className="font-bold text-lg hidden sm:inline">Izba Przyjęć</span>
        </a>
      </Link>
      <div className="flex space-x-4">
        <Link href="/login">
          <a className="hover:underline">Logowanie</a>
        </Link>
        <Link href="/register">
          <a className="hover:underline">Rejestracja</a>
        </Link>
      </div>
    </nav>
  );
}
