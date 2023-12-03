import { Inter } from 'next/font/google'
import Head from 'next/head'
import DashboardPages from './dashboard'
import ProductPage from './product'
import FooterPages from './footer'
import About from './about'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="text-2xl font-bold text-center ">
      <Head >
        <title>Mutiara Laminating</title>
      </Head>
      <DashboardPages />
      <About />
      <ProductPage />
      <FooterPages />
    </div>
  )
}
