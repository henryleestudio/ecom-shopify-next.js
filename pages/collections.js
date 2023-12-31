import MainLayout from '@/components/layouts/MainLayout'
import Head from 'next/head'
import Collection1 from '@/components/Collections/Collection1/Collection1'
import Collection2 from '@/components/Collections/Collection2/Collection2'
import Collection3 from '@/components/Collections/Collection3/Collection3'

export default function Collections() {
  return (
    <MainLayout>
    <Head>
      <title>The Co – Creative Collections</title>
        <meta name="description" content="By cr>eate Next App" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>Collections</h1>

    <Collection1 />
    <Collection2 />
    <Collection3 />

  </MainLayout>
  )
}
