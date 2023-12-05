import { Inter } from 'next/font/google'
import Image from 'next/image'
import Carousel from '@/components/Carousel'

const inter = Inter({ subsets: ['latin'] })

const slides = [
    "/img/laminating-mesin.jpg",
    "/img/mesin-laminating.JPG",
    "/img/proses-potong-bis.JPG",
    "/img/proses-finishing.JPG",
    "/img/proses-persiapan.JPG",
    "/img/proses-laminating.JPG",
]

export default function About() {
  return (
    
      <div className="py-16 bg-white container mx-auto px-6 border border-red-700"> 
        <h1 className="mb-4 mt-12 text-4xl font-extrabold  text-red-600 md:text-3xl lg:text-4xl dark:text-white hp:text-3xl hp:mt-10"  >Tentang Kami</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-38 hp:text-sm dark:text-gray-400 hp:mt-5">Perusahaan kami bergerak dalam bidang Jasa Laminating yang diperuntukan bagi Konfeksi BH/Bra  sejak tahun 2014. Kami melayani Jasa Laminating Kain dan Busa yang mana Saat ini kami memiliki mesin: 1 unit mesin laminating 1 unit mesin pemotong Corong dan alat penunjang lainnya.</p>  
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 sm:flex-col sm:items-center lg:items-center lg:gap-12 lg:flex-row relative">                            
 
            <div className="md:w-10/12 lg:w-5/12 ">
              <Carousel autoSlide={true}>
                {slides.map((s) => (
                  <Image 
                  src={s} 
                  alt="slide" 
                  width={500} 
                  height={500}
                  key={s}
                  className='w-full' 
                  />
                ))}
              </Carousel>
            </div>            

              <div className="md:6/12 lg:w-6/12 text-left" >
                <h2 className="text-3xl text-red-600 md:text-3xl md:text-center hp:text-center hp:text-2xl">Jasa Mutiara Laminating</h2>
                <p className="mt-6 text-gray-600 text-xl md:text-base hp:text-base font-normal">
                    
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