import Head from 'next/head'
export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title || 'Izba Przyjęć'}</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        {children}
      </div>
    </>
  )
}
