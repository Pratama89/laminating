import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="text-2xl font-bold text-center ">
      <Head >
        <title>Pharmadent</title>
      </Head>
      <div className='w-full h-screen bg-blend-overlay'>
        <Image src="/img/latar-depan.jpeg" width={1920} height={1080} alt="logo" >
        </Image>
      </div>
      <div className='mt-20'>Selamat Datang Di Pharmadent</div>
    </div>
  )
}
