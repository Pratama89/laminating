import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import DashboardPages from './dashboard'
import ProductPage from './product'
import FooterPages from './footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="text-2xl font-bold text-center ">
      <Head >
        <title>Mutiara Laminating</title>
      </Head>
      <DashboardPages />
      <ProductPage />
      <FooterPages />
    </div>
  )
}
