import Link from 'next/link'
export default function Header({ user }) {
  return (
    <header className="bg-primary text-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/"><img src="/logo-white.svg" alt="Izba Przyjęć" className="h-8" /></Link>
        <nav className="space-x-6">
          <Link href="/">Nowe</Link>
          <Link href="/top">Najlepsze</Link>
        </nav>
        <div className="space-x-3">
          {user ? (
            <button className="px-4 py-2 bg-white text-primary rounded-lg">Wyloguj</button>
          ) : (
            <>
              <Link href="/login"><button className="px-4 py-2 bg-white text-primary rounded-lg">Zaloguj</button></Link>
              <Link href="/submit"><button className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-primary transition">Zgłoś historię</button></Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
