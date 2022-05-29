import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='mx-32'>
        <Sidebar/>
        <Feed/>
        {/** Feed */}
        {/** Widgets */}
      </main>
    </div>
  )
}

export default Home
