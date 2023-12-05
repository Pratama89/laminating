import { useRouter } from "next/router"
import { Nunito } from 'next/font/google'
import dynamic from "next/dynamic"

const Navbar = dynamic(() => import("../Navbar"));
const Footer = dynamic(() => import("../Footer"));


type AppSheelProps = {
    children: React.ReactNode
}

const roboto = Nunito({
    subsets: ['latin'],
    weight: ['400', '700'],
})

const disableNavbar = ["/auth/login", "/auth/register", "/404"]
const AppShell = (props: AppSheelProps) => {
    const { children } = props
    const { pathname } = useRouter()
    console.log(pathname)
    return (
        <main className={roboto.className}>
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
            {!disableNavbar.includes(pathname) && <Footer />}
        </main>
    )
}

export default AppShell