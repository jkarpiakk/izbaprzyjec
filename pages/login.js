import Layout from '../components/Layout';

export default function Login() {
  return (
    <Layout>
      <section className="min-h-screen flex flex-col items-center justify-center p-6">
        <img src="/logo.png" alt="Izba Przyjęć" className="w-32 mb-6" />
        <h2 className="text-2xl font-semibold mb-2">Logowanie</h2>
        <p className="text-center text-gray-600 mb-6">
          Podziel się historią ze swojej Izby Przyjęć
        </p>
        <form className="w-full max-w-sm space-y-4">
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <input type="password" placeholder="Hasło" className="w-full p-2 border rounded" />
          <button className="w-full py-2 bg-green-600 text-white rounded">Zaloguj się</button>
        </form>
      </section>
    </Layout>
  );
}
