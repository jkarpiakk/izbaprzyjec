import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../services/firebase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      // przekieruj po zalogowaniu
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <div className="flex items-center justify-center h-[calc(100vh-64px)]">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-md">
        <img src="/logo.svg" alt="Izba Przyjęć" className="mx-auto mb-6" />
        <h1 className="text-2xl font-semibold text-primary mb-2 text-center">Logowanie</h1>
        <p className="text-center text-gray-600 mb-6">Podziel się historią ze swojej Izby Przyjęć</p>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="password"
            placeholder="Hasło"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button type="submit" className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-opacity-90 transition">Zaloguj się</button>
        </form>
      </div>
    </div>
  )
}
