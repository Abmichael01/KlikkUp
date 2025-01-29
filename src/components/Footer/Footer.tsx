import type React from "react"
import Logo from "../Logo/Logo"
import { Facebook, Twitter, Instagram, Linkedin, ChevronRight } from "lucide-react"
import { Link } from "react-router"

const footerLinks = {
  QuickLinks: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Features", href: "/features" },
  ],
  Support: [
    { title: "Contact", href: "/contact" },
    { title: "Buy Coupon", href: "/buy-coupon" },
  ],
  Developer: [
    { title: "Login", href: "/login" },
    { title: "Sign Up", href: "/signup" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-black bg-opacity-80 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-primary opacity-10 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Logo />
            <p className="text-sm text-white/80 max-w-xs">
              Turning your time into rewards. Join us in revolutionizing the way you engage with content.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary transition-colors p-2 bg-white/10 rounded-full"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-semibold text-lg text-secondary">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.title} className="w-fit">
                    <Link
                      to={link.href}
                      className="text-sm hover:text-secondary transition-colors flex items-center group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-white/60 flex flex-col sm:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Klikk Up. All rights reserved.</p>
          <div className="mt-4 sm:mt-0">
            <Link to="/privacy-policy" className="hover:text-secondary transition-colors mr-4">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-secondary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

