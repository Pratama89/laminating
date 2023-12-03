/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/types/product.type"
import Link from "next/link"

const DetailProduct = ({ product }: { product: ProductType }) => {
    return (
        <>
        <div className="text-2xl font-bold text-center mt-20">Detail Product</div>
        <div              
            className="flex flex-col items-center rounded-lg mt-3 mb-3 lg:w-60 w-36 border bg-white  mx-2 ">
            <img src={product.image} alt={product.name} className=" w-36 h-36 lg:w-60 lg:h-60 rounded-lg shadow-lg " />
            <div className="px-2 py-2  ">
                <h4 className="font-bold text-xs md:text-xs lg:text-lg">{product.name}</h4>
                <p className="font-bold text-xs md:text-xs lg:text-lg">{product.price && product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
                <p className="text-xs md:text-xs lg:text-lg">Stok: {product.stock}</p>                    
            </div>                    
        </div>

        {/* <!-- component --> */}
        <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={product.image} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">Mutiara Laminating</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
                <div className="flex mb-4">
                
               
                </div>
                <p className="leading-relaxed">{product.keterangan}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                
                
                </div>
                <Link href="/contact" className="flex">
                <button className="mx-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded w-full text-center">Hubungi Admin</button>
                </Link>
            </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default DetailProduct