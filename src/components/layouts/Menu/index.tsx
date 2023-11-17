import Link from "next/link"

const MenuBar = () => {
    return (
        <div className="flex justify-start bg-transparent   ">
            <div className="text-sm container mx-auto p-2 text-white ">
                <Link href="/product" className="px-3">Beranda</Link>
                <Link href="/product" className="px-3">Product</Link>
                <Link href="/product" className="px-3">Hubungi Kami</Link>
            </div>
        </div>
    )
}

export default MenuBar