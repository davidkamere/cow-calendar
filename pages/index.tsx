import type { NextPage } from 'next'
import Head from 'next/head'
import Calendar from '../components/calendar'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-1 bg-white mt-14">
      <Head>
        <title>AI calendar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Calendar/>
    </div>
  )
}

export default Home
