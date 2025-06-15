import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center">Izba Przyjęć</h1>
      <p className="text-center mt-4">Na SOR-ze, w przychodni czy na oddziale – medyczne perypetie zdarzają się każdego dnia...</p>
      <div className="flex justify-center mt-6 space-x-4">
        <Link href="/login"><a className="px-4 py-2 bg-blue-500 text-white rounded">Logowanie</a></Link>
        <Link href="/regulamin"><a className="px-4 py-2 bg-gray-200 rounded">Regulamin</a></Link>
      </div>
    </Layout>
  );
}
