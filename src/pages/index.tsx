import { Inter } from 'next/font/google'
import Head from 'next/head'
import DashboardPages from './dashboard'
import ProductPage from './product'
import FooterPages from '../components/layouts/Footer'
import About from './about'
import Contact from './contact'
import Sabar from './sabar'
import Hero from './hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="text-2xl text-center w-full">
      <Head >
        <title>Mutiara Laminating</title>
      </Head>
      {/* <Sabar /> */}
      {/* <Hero /> */}
      <DashboardPages />
      <About />
      <ProductPage />
      <Contact />
    </div>
  )
}
