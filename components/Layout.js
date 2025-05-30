import Navbar from './navbar';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children, title = 'Personal Portfolio' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Personal portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}