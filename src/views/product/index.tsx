/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/types/product.type"
import Image from "next/image"
import Link from "next/link";



const ProductView = ({ products }: { products: ProductType[] }) => {
  console.log(products);
    return (
      <div className='w-full p-5 mb-5'> 
        
        <h1 className="mb-4 mt-5 text-4xl font-extrabold leading-none  text-red-600 md:text-5xl lg:text-4xl dark:text-white">Produk dan Layanan Kami</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Kami mengerjakan pengeleman kain dan busa dengan kualitas terbaik.</p>       

        <div className="flex flex-wrap mx-10 lg:px-6 px-10  justify-evenly lg:justify-between md:justify-start mt-5 mb-5 0 overflow-hidden"> 
          {products?.length > 0 ? (
            <>
            {products?.map((product: ProductType) => (              
              <Link
              href={`/product/${product.id}`}
              key={product.id} 
              className="mt-10 flex flex-col "> 
                
              <div
                className="flex  md:flex-row md:space-x-10 space-y-3 md:space-y-0 rounded-xl shadow-2xl p-3 mb-5 md:max-w-3xl mx-auto border border-white bg-white hover:animate-bounce">
                <div className="w-64  bg-white grid place-items-center">
                  <Image src={product.image} alt={product.name} height={200} width={200} className="rounded-xl w-52 h-52" />
                </div>
                  <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    
                    <h3 className="font-black text-gray-800 md:text-3xl text-xl truncate">{product.name}</h3>
                    <p className="md:text-lg text-gray-500 text-base">{product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
                    <p className="text-xl font-black text-gray-800">
                    Stok: {product.stock}
                    </p>
                  </div>
                </div>
                
                               
                  </Link>
                ))}
                </>
              ) : (
                <div className="w-1/4 p-3 animate-pulse">
                  <div className="w-full aspect-square rounded-sm bg-slate-400" />
                  <div className="w-full h-5 mt-1 bg-slate-400 rounded-sm" />
                  <div className="w-full h-4 mt-1 bg-slate-400 rounded-sm" />
                  <div className="w-full h-4 mt-2 bg-slate-400 rounded-sm" />
                </div>            
              )}

                
              </div>
          </div> 
      
    )
}

export default ProductView