import Navbar from './Navbar';
export default function Layout({ children }) {
  return <>
    <Navbar />
    <main className="min-h-screen p-4">{children}</main>
    <footer className="bg-gray-100 text-center text-sm p-4">©2025 Izba Przyjęć</footer>
  </>;
}
