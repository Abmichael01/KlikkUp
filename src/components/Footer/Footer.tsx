import type React from "react";
import Logo from "../Logo/Logo";
import { FaTelegram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { ChevronRight, Contact2Icon, Mail, Phone } from "lucide-react";
import { scrollToSection } from "@/lib/scroller";

const socialLinks = [
  { icon: FaTelegram, href: "https://t.me/klikkup_official_channel" },
  {
    icon: FaWhatsapp,
    href: "https://chat.whatsapp.com/E1QiSjaXU1l0pmZ8pqP4bW",
  },
];

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const navigator = (id?: string, href?: string) => {
    // Check if the current path is not the home page
    if (window.location.pathname !== "/") {
      // Navigate to the home page
      navigate("/");
    }

    const url = id ? `/#${id}` : href as string

    // After navigating to the home page, scroll to the section with the given ID
    setTimeout(() => {
      navigate(url);
      scrollToSection(id as string);
    }, 200); // Use a minimal delay to ensure the navigation to the home page completes
  };

  const footerLinks = {
    QuickLinks: [
      { title: "Home", id: "/", href: undefined},
      { title: "About", id: "about-us", href: undefined },
      { title: "Features", id: "features", href: undefined },
    ],
    Support: [
      { title: "Buy Coupon", href: "/buy-coupon", id: "" },
      { title: "FAQs", href: "", id: "faq" },
    ],
  };

  return (
    <footer className="bg-black bg-opacity-90 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-primary opacity-10 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Logo />
            <p className="text-sm text-white/80 max-w-xs">
              Turning your time into rewards. Join us in revolutionizing the way
              you engage with content.
            </p>
            <p>
              <strong>NOTE:</strong> This service is exclusive for Nigerians
              only
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-semibold text-lg text-secondary">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.title} className="w-fit">
                    {link.href !== "" && (
                      <a
                        onClick={() => {
                          navigator(link.id, link.href)
                        }}
                        className="text-sm hover:text-secondary cursor-pointer transition-colors flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.title}
                      </a>
                    )}
                    {link.href == "" && (
                      <p
                        className="text-sm hover:text-secondary transition-colors flex items-center group cursor-pointer"
                        onClick={() => scrollToSection("faq")}
                      >
                        <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.title}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-secondary">Contact</h3>
            <Link
              className="text-sm hover:text-secondary transition-colors flex items-center group cursor-pointer"
              to="/contact"
            >
              <Contact2Icon className="w-4 h-4 mr-2 group-hover:opacity-100 transition-opacity" />
              Contact Us
            </Link>
            <Link
              className="text-sm hover:text-secondary transition-colors flex items-center group cursor-pointer"
              to="https://t.me/+72i90rxMY-VkODdk"
            >
              <FaTelegramPlane className="w-4 h-4 mr-2 group-hover:opacity-100 transition-opacity" />
              Telegram Support
            </Link>
            <Link
              className="text-sm hover:text-secondary transition-colors flex items-center group cursor-pointer"
              to="mailto:klikkuphelp@gmail.com"
              target="_blank"
            >
              <Mail className="w-4 h-4 mr-2 group-hover:opacity-100 transition-opacity" />
              klikkuphelp@gmail.com
            </Link>

            <Link
              className="text-sm hover:text-secondary transition-colors flex items-center group cursor-pointer"
              to="tel:+2348120770749"
              target="_blank"
            >
              <Phone className="w-4 h-4 mr-2 group-hover:opacity-100 transition-opacity" />
              +234 812 077 0749
            </Link>

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
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-white/60 flex flex-col sm:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} Klikk Up. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <Link
              to="/privacy-policy?section=privacy"
              className="hover:text-secondary transition-colors mr-4"
            >
              Privacy Policy
            </Link>
            <Link
              to="/privacy-policy?section=terms"
              className="hover:text-secondary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
