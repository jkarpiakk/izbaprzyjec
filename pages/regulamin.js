import Layout from '../components/Layout';
export default function Regulamin() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Regulamin Izby Przyjęć</h1>
      <ol className="list-decimal ml-6 space-y-2">
        <li>Serwis dla medyków.</li>
        <li>Anonimowe historie.</li>
        <li>Moderowane przez administratora.</li>
      </ol>
    </Layout>
  );
}
