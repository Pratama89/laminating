/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/types/product.type"
import Image from "next/image"
import Link from "next/link";



const ProductView = ({ products }: { products: ProductType[] }) => {
  console.log(products);
    return (
      <div className='w-full h-auto p-5 mb-5 ' id="product"> 
        
        <h1 className="mb-4 mt-14 text-4xl font-extrabold leading-none  text-red-600 md:text-5xl lg:text-4xl dark:text-white hp:text-3xl"  >Produk dan Layanan Kami</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Kami mengerjakan pengeleman kain dan busa dengan kualitas terbaik.</p>       

        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6 mx-10 lg:p-16 px-10  justify-center lg:justify-between hp:justify-center mt-5 mb-5 0 hp:mx-2 hp:grid-cols-1 "> 
          {products?.length > 0 ? (
            <>
            {products?.map((product: ProductType) => (              
              <Link
              href={`/product/${product.id}`}
              key={product.id} 
              className=""> 
                
              <div
                className="flex md:flex-row hp:flex-col md:space-x-4 space-y-3 md:space-y-0 rounded-xl shadow-2xl  mb-5 md:max-w-3xl hp:max-w-xl mx-auto  bg-white delay-[300ms] duration-[600ms] hover:scale-[1.1] hp:items-center border border-gray-300">
                <div className="w-56 h-56 bg-cover grid place-items-start animate-duration-500  group">
                  <Image src={product.image} alt={product.name} height={300} width={300} className="group-hover:animate-bounce  rounded-xl bg-cover w-full h-full " />
                </div>
                  <div className="w-1/4 md:w-2/3 hp:w-64  bg-white flex flex-col space-y-2 space-x-reverse my-auto p-3  hp:p-1">                    
                    <h3 className="font-black text-gray-800 md:text-lg text-lg truncate text-left mt-8 hp:mt-2 ">{product.name}</h3>
                    <p className="md:text-sm text-gray-600 text-base text-left hp:mb-2">{product.keterangan}</p>                    
                  </div>
                </div>                               
                </Link>
                ))}
                </>
              ) : (
                // <div className="w-1/4 p-3 animate-pulse">
                //   <div className="w-full aspect-square rounded-sm bg-slate-400" />
                //   <div className="w-full h-5 mt-1 bg-slate-400 rounded-sm" />
                //   <div className="w-full h-4 mt-1 bg-slate-400 rounded-sm" />
                //   <div className="w-full h-4 mt-2 bg-slate-400 rounded-sm" />
                // </div>  
                
        <div role="status">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
          
              )}

                
              </div>
          </div> 
      
    )
}

export default ProductView