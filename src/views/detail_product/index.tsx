/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/types/product.type"
import Link from "next/link"

const DetailProduct = ({ product }: { product: ProductType }) => {
    return (
        <>
        {/* <!-- component --> */}
        <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={product.image} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-between">
                <div className="flex flex-col mb-4">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">Mutiara Laminating</h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{product.name}</h1>
                    
                    <p className="leading-relaxed mb-5 text-2xl font-normal">{product.keterangan}</p>
                </div>
                <Link href="https://wa.link/h7ywr2" className="flex">
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