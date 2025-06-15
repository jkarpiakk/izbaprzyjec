import Layout from '../components/Layout';

export default function Regulamin() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Regulamin Izby Przyjęć</h1>
      <ol className="list-decimal ml-6 space-y-2">
        <li><strong>Postanowienia ogólne:</strong> Serwis jest przeznaczony dla medyków...</li>
        <li><strong>Rejestracja:</strong> Wymaga PWZ i potwierdzenia e-mail...</li>
        <li>...</li>
      </ol>
    </Layout>
  );
}
