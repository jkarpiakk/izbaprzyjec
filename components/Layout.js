import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
        © 2025 Izba Przyjęć • <a href="/regulamin" className="underline">Regulamin</a>
      </footer>
    </div>
  );
}
