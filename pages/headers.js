import Head from 'next/head';
import ShowLayout from '@/components/layouts/ShowLayout';
import Header1 from '@/components/Header/Header1/Header1';
import Header2 from '@/components/Header/Header2/Header2';
import Header3 from '@/components/Header/Header3/Header3';
import Header4 from '@/components/Header/Header4/Header4';

export default function Home() {
  return (
    <ShowLayout>
      <Head>
        <title>Create Next App</title>
          <meta name="description" content="By create Next App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>All headers</h1>
      <div className="comp-space"><Header1 /></div>
      <div className="comp-space"><Header2 /></div>
      <div className="comp-space"><Header3 /></div>
      <div className="comp-space"><Header4 /></div>
    </ShowLayout>
  )
}
