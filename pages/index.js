import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="text-center mt-12">
        <h1 className="text-5xl font-extrabold mb-4">Izba Przyjęć</h1>
        <p className="text-lg mb-8">
          Na SOR-ze, w przychodni czy na oddziale – medyczne perypetie zdarzają się każdego dnia...
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/login">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
              Logowanie
            </button>
          </Link>
          <Link href="/regulamin">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg">
              Regulamin
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
