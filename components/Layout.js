import Navbar from './Navbar';
export default function Layout({children}){
  return <>
    <Navbar/>
    <main className="min-h-screen p-4">{children}</main>
    <footer className="w-full bg-gray-100 text-center text-sm p-4 text-gray-600">
      ©2025 Izba Przyjęć • <a href="/regulamin" className="underline">Regulamin</a>
    </footer>
  </>;
}
