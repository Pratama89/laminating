import { signIn, useSession, signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import MenuBar from "../Menu"

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/', current: true },
  { name: 'Produk', href: '/product', current: false },
  { name: 'Hubungi Kami', href: '/contact', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
    return (
        // <div className=' w-full h-30 bg-transparent  p-2 text-white fixed top-0'>
        //     <div className="flex justify-between items-center mx-5 ">
        //         <div className="font-bold my-auto text-2xl text-slate-100" id="title">
        //             <Link href={'/'}>
        //                 <Image src="/img/logolaminating.png" width={250} height={80} alt="logo"></Image>
        //             </Link>
        //         </div>
        //     <div className="flex justify-between items-center mx-2 gap-3">
        //         <Link href={'/profile'}>
        //         {data && data.user.image && (
        //             <Image 
        //               src={data.user.image} 
        //               width={40} 
        //               height={40}
        //               alt={data.user.fullname} 
        //               className=" rounded-full"
        //             />
        //         )}
        //         </Link>                
        //         <div className="animate-none">
        //             <Link href={'/profile'}>
        //                 {data && data.user.fullname}{" "}
        //             </Link>
        //         </div>
        //         <MenuBar />
        //       </div>
        //     </div>
        // </div>
        
            <Disclosure as="nav" className="bg-transparent top-0 w-full">
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
                    <div className="relative flex h-16 items-center justify-between">
                      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                          ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                          )}
                        </Disclosure.Button>
                      </div>
                      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                          <Image
                            className="h-12 w-auto"
                            src="/img/logolaminating.png"
                            alt="Mutiara Laminating"
                            width={350}
                            height={120}
                          />
                        </div>
                        <div className="hidden sm:ml-6 sm:block ">
                          <div className="flex space-x-4">
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.current ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-blue-700 hover:text-white',
                                  'rounded-md px-3 py-2 text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        
        
                        {/* Profile dropdown */}
                        
                      </div>
                    </div>
                  </div>
        
                  <Disclosure.Panel className="sm:hidden bg-white">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                      {navigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-blue-600 text-white' : 'text-gray-800 hover:bg-blue-700 hover:text-white',
                            'block rounded-md px-3 py-2 text-base font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          )    
}

export default Navbar