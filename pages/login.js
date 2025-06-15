import Layout from '../components/Layout';

export default function Login() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Logowanie</h2>
          <p className="text-center text-gray-600 mb-4">
            Podziel się historią ze swojej Izby Przyjęć
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" placeholder="jankowalski@example.com" className="w-full p-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Hasło</label>
              <input type="password" placeholder="••••••••••" className="w-full p-2 border rounded-lg" />
            </div>
            <button type="submit" className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
              Zaloguj się
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
