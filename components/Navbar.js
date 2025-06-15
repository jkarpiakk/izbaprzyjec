import Link from 'next/link';
export default function Navbar(){
  return <nav className="bg-green-600 text-white p-4 flex justify-between">
    <Link href="/"><a className="font-bold">Izba Przyjęć</a></Link>
    <div className="space-x-4">
      <Link href="/login"><a>Logowanie</a></Link>
      <Link href="/register"><a>Rejestracja</a></Link>
    </div>
  </nav>;
}
