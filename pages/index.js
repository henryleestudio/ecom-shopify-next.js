import Head from 'next/head';
import MainLayout from '@/components/layouts/MainLayout';
import Hero1 from '../components/Hero/Hero1/Hero1.js';
import Hero2 from '../components/Hero/Hero2/Hero2.js';
import Collection1 from '../components/Collections/Collection1/Collection1.js';


export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
          <meta name="description" content="By create Next App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero2 />
      <Collection1 />
    </MainLayout>
  )
}
