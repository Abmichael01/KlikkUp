import type React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router"
import { GanttChartIcon as LucideChartNoAxesGantt, X } from "lucide-react"
import Logo from "../Logo/Logo"

const links = [
  {
    name: "Login",
    link: "/auth/login",
    className: "bg-amber-500 text-black",
  },
  {
    name: "Register",
    link: "/auth/register",
    className: "bg-foreground",
  },
]

const navs = [
  {
    name: "Home",
    id: "hero",
  },
  {
    name: "About Us",
    id: "about-us",
  },
  {
    name: "How it works",
    id: "how-it-works",
  },
  {
    name: "FAQs",
    id: "faq",
  },
]

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isSidebarOpen])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Adjust this value to change the offset
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsSidebarOpen(false)
    }
  }

  return (
    <>
      <div className="px-5 lg:px-10 py-5 border flex items-center justify-between sticky top-0 z-[999] bg-white">
        <Logo />
        <div className="hidden lg:flex gap-10 items-center">
          {navs.map((nav, index) => (
            <p
              key={index}
              className="text-s hover:text-primary transition-colors cursor-pointer"
              onClick={() => scrollToSection(nav.id)}
            >
              {nav.name}
            </p>
          ))}
        </div>
        <div className="hidden lg:flex gap-5 items-center">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.link}
              className={`${link.className} px-5 py-2 text-sm text-white rounded-md hover:opacity-90 transition-opacity`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button
          className="px-3 py-2 border border-primary/60 rounded-xl lg:hidden hover:bg-primary/10 transition-colors"
          onClick={() => setIsSidebarOpen(true)}
        >
          <LucideChartNoAxesGantt />
        </button>
      </div>

      {/* Sidebar for small screens */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 lg:hidden transition-opacity duration-300 z-[9999] ${
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 bottom-0 w-64 bg-white z-[9999] lg:hidden transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5">
          <div className="flex justify-between items-center mb-6">
            <Logo />
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {navs.map((nav, index) => (
              <p
                key={index}
                className="text-lg font-medium hover:text-primary transition-colors cursor-pointer"
                onClick={() => scrollToSection(nav.id)}
              >
                {nav.name}
              </p>
            ))}
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className={`${link.className} px-5 py-2 text-sm text-white rounded-md hover:opacity-90 transition-opacity text-center`}
                onClick={() => setIsSidebarOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

