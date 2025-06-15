import Layout from '../components/Layout';
import Link from 'next/link';
export default function Home() {
  return (
    <Layout>
      <div className="text-center mt-12">
        <h1 className="text-5xl font-bold mb-4">Izba Przyjęć</h1>
        <p className="mb-8">Medyczne historie z życia codziennego...</p>
        <Link href="/login"><button className="bg-blue-500 text-white px-6 py-2 rounded">Logowanie</button></Link>
      </div>
    </Layout>
  );
}
