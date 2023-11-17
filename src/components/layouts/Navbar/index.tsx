import { signIn, useSession, signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import MenuBar from "../Menu"

function Navbar() {
  const { data }: any = useSession()
    return (
        <div className=' w-full h-30 bg-transparent  p-2 text-white fixed top-0'>
            <div className="flex justify-between items-center mx-5 ">
                <div className="font-bold my-auto text-2xl text-slate-100" id="title">
                    <Link href={'/'}>
                        <Image src="/img/logolaminating.png" width={250} height={80} alt="logo"></Image>
                    </Link>
                </div>
            <div className="flex justify-between items-center mx-2 gap-3">
                <Link href={'/profile'}>
                {data && data.user.image && (
                    <Image 
                      src={data.user.image} 
                      width={40} 
                      height={40}
                      alt={data.user.fullname} 
                      className=" rounded-full"
                    />
                )}
                </Link>                
                <div className="animate-none">
                    <Link href={'/profile'}>
                        {data && data.user.fullname}{" "}
                    </Link>
                </div>
                <MenuBar />
              </div>
            </div>
        </div>
    )
}

export default Navbar