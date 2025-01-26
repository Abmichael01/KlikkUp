import React from 'react'
import Logo from '../Logo/Logo'
import { Link } from 'react-router'
import { LucideChartNoAxesGantt } from 'lucide-react'

const links = [
    {
        name: "Login",
        link: "/auth/login",
        className: "bg-amber-500 text-black"
    },
    {
        name: "Register",
        link: "/auth/register",
        className: "bg-foreground"
    },
]

const navs = [
    {
        name: "Home",
        slug: "home",
        link: "#",
    },
    {
        name: "About Us",
        slug: "home",
        link: "#",
    },
    {
        name: "How it works",
        slug: "home",
        link: "#",
    },
]

const Navbar: React.FC = () => {
  return (
    <div className='px-5 lg:px-10 py-5 border flex items-center justify-between '>
        <Logo />
        <div className='hidden lg:flex gap-10 items-center '>
            {navs.map((nav, index) => (
                <Link
                key={index}
                to={nav.link}
                className='text-s'
                >
                    {nav.name}
                </Link>
            ))}
        </div>
        <div className='hidden lg:flex gap-5 items-center'>
            {links.map((link, index) => (
                <Link
                key={index}
                to={link.link}
                className={`${link.className} px-5 py-2 text-sm text-white rounded-md`}
                >
                    {link.name}
                </Link>
            ))}
        </div>
        <button className='px-3 py-2 border border-primary/60 rounded-xl lg:hidden'>
            <LucideChartNoAxesGantt />
        </button>
    </div>
  )
}

export default Navbar