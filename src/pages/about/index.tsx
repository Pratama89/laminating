import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    
      <div className="py-16 bg-white"> 
        <h1 className="mb-4 mt-14 text-4xl font-extrabold leading-none  text-red-600 md:text-5xl lg:text-4xl dark:text-white hp:text-3xl"  >Tentang Kami</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Perusahaan kami bergerak dalam bidang Jasa Laminating yang diperuntukan bagi Konfeksi BH/Bra  sejak tahun 2002. Kami melayani Jasa Laminating Kain dan Busa yang mana Saat ini kami memiliki mesin: 1 unit mesin laminating 1 unit mesin pemotong Corong dan alat penunjang lainnya.</p>  
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              
              {/* Corousel */}
              <div id="default-carousel" className="relative w-full " data-carousel="slide">
                  <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                      <div className=" duration-700 ease-in-out" data-carousel-item>
                          <Image src={"/img/laminating-mesin.jpg"} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="laminating" width={1920} height={1080}/>
                      </div>
                      <div className="duration-700 ease-in-out" data-carousel-item>
                          <Image src={"/img/busa-3.jpg"} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="laminating" width={1920} height={1080}/>
                      </div>
                      <div className=" duration-700 ease-in-out" data-carousel-item>
                          <Image src={"/img/busa-4.jpg"} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="laminating" width={1920} height={1080}/>
                      </div>
                      <div className=" duration-700 ease-in-out" data-carousel-item>
                          <Image src={"/img/pabrik2.jpeg"} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="laminating" width={1920} height={1080}/>
                      </div>
                      <div className=" duration-700 ease-in-out" data-carousel-item>
                          <Image src={"/img/laminating-mesin2.jpg"} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="laminating" width={1920} height={1080}/>
                      </div>
                  </div>
                  <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                      <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                      <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                      <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                      <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                      <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                  </div>
                  <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                          </svg>
                          <span className="sr-only">Previous</span>
                      </span>
                  </button>
                  <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                          </svg>
                          <span className="sr-only">Next</span>
                      </span>
                  </button>
              </div>



              <div className="md:6/12 lg:w-6/12 text-left" >
                <h2 className="text-3xl text-gray-900 font-bold md:text-4xl">CV. Mutiara Laminating</h2>
                <p className="mt-6 text-gray-600 text-xl">
                    
                Berdiri Tahun : 2002
                <br/>
                Bidang Usaha : Jasa Laminating
                <br/>
                <br/>

                Kami hadir sebagai Penyedia Jasa Laminating untuk Bahan Kain dan Busa serta Kebutuhan Perlengkapan BH/Bra. Pengerjaan cepat dan packing rapih untuk memastikan barang yang sampai ke tangan anda aman dan barang telah melalui Persotiran dan Pengemasan yang baik. Untuk kepuasan dan menjaga kepercayaan langganan kami.</p>
                
              </div>
            </div>
        </div>
      </div>
  )
}