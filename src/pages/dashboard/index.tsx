import Link from "next/link";

const DashboardPages = () => {
    return (        
        <section className="bg-center bg-no-repeat bg-[url('/img/latar-depan.png')] bg-white bg-blend-multiply bg-cover -mt-20 " id="home">
            <div className="px-4 mx-auto mt-16 hp:mt-20 max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-black lg:mt-10 sm:text-5xl md:text-5xl lg:text-6xl hp:text-3xl hp:mt-20 ">CV. MUTIARA LAMINATING</h1>
                <p className="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 lg:px-48 hp:mb-16">Dipercaya oleh lebih dari ratusan pelaku industri sebagai penyedia jasa laminating kain dan busa sejak tahun 2014.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center hp:items-center sm:space-y-0">
                    <Link 
                    href="/product" 
                    className="inline-flex justify-center items-center py-3 px-5 hp:w-56 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 hover:scale-[1.1] delay-[300ms] duration-[600ms]">
                        Layanan Laminating
                        <svg 
                        className="w-3.5 h-3.5 ms-2 rtl:rotate-180" 
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                    <Link 
                    href="https://wa.link/nphjrf" 
                    className="inline-flex justify-center hover:text-black items-center py-3 px-5 hp:w-56 sm:ms-4 text-base font-medium text-center text-black rounded-lg border border-black hover:bg-transparent focus:ring-4 focus:ring-gray-400 hover:scale-[1.1] delay-[300ms] duration-[600ms]">
                        Kontak Admin
                    </Link>  
                </div>
            </div>
        </section>
    )
}

export default DashboardPages;