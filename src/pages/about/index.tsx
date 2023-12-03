import { Inter } from 'next/font/google'
import Image from 'next/image'
import Carousel from '@/components/Carousel'

const inter = Inter({ subsets: ['latin'] })

const slides = [
    "/img/laminating-mesin.jpg",
    "/img/mesin-laminating.jpg",
    "/img/proses-potong-bis.jpg",
    "/img/proses-finishing.jpg",
    "/img/proses-persiapan.jpg",
    "/img/proses-laminating.jpg",
]

export default function About() {
  return (
    
      <div className="py-16 bg-white container mx-auto px-6"> 
        <h1 className="mb-4 mt-12 text-4xl font-extrabold leading-none  text-red-600 md:text-5xl lg:text-4xl dark:text-white hp:text-3xl"  >Tentang Kami</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Perusahaan kami bergerak dalam bidang Jasa Laminating yang diperuntukan bagi Konfeksi BH/Bra  sejak tahun 2014. Kami melayani Jasa Laminating Kain dan Busa yang mana Saat ini kami memiliki mesin: 1 unit mesin laminating 1 unit mesin pemotong Corong dan alat penunjang lainnya.</p>  
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              
                            

        {/* Start Corousel 2 */}
        
            <div className="md:6/12 lg:w-6/12">
              <Carousel autoSlide={true}>
                {slides.map((s) => (
                  <Image 
                  src={s} 
                  alt="slide" 
                  width={500} 
                  height={500}
                  key={s} 
                  />
                ))}
              </Carousel>
            </div>
            
        {/* Finish Corousel 2 */}

              <div className="md:6/12 lg:w-6/12 text-left" >
                <h2 className="text-3xl text-gray-900 font-bold md:text-4xl">Jasa Mutiara Laminating</h2>
                <p className="mt-6 text-gray-600 text-xl">
                    
                Berdiri Tahun : 2014
                <br/>
                Bidang Usaha : Jasa Laminating
                <br/>
                <br/>

                Kami hadir sebagai Penyedia Jasa Laminating untuk Bahan Kain dan Busa serta Kebutuhan Perlengkapan BH/Bra. Pengerjaan cepat dan packing rapih untuk memastikan barang yang sampai ke tangan anda aman dan barang telah melalui Persotiran dan Pengemasan yang baik. Untuk kepuasan dan menjaga kepercayaan langganan kami.</p>
                
              </div>
            </div>
        </div>
        <div className='mt-20 border-2'>
            <hr />
        </div>
      </div>
  )
}