import Layout from '../components/Layout';
export default function Regulamin(){
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Regulamin</h1>
      <ol className="ml-6 list-decimal space-y-2">
        <li>Serwis dla medyków.</li>
        <li>Anonimowe historie.</li>
        <li>Moderowane przez admina.</li>
      </ol>
    </Layout>
  );
}
