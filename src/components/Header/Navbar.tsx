import type React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import {
  ArrowRight,
  GanttChartIcon as LucideChartNoAxesGantt,
  X,
} from "lucide-react";
import Logo from "../Logo/Logo";
import { scrollToSection } from "@/lib/scroller";
import { useAuthStore } from "@/stores/useAuthStore";
import GlidingButton from "../ui/GlidingButton";

const links = [
  {
    name: "Login",
    link: "https://admin.klikkupp.com/dashboard",
    className: "bg-amber-500 text-black",
  },
  {
    name: "Register",
    link: "/auth/register",
    className: "bg-foreground",
  },
];

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
];

const Navbar: React.FC = () => {
  const { isAuthenticated } = useAuthStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  const navigator = (id: string) => {
    // Check if the current path is not the home page
    if (window.location.pathname !== "/") {
      // Navigate to the home page
      navigate("/");
    }

    // After navigating to the home page, scroll to the section with the given ID
    setTimeout(() => {
      navigate(`/#${id}`);
      setIsSidebarOpen(false);
      scrollToSection(id);
    }, 200); // Use a minimal delay to ensure the navigation to the home page completes
  };

  return (
    <>
      <div className="px-5 lg:px-10 py-5 flex items-center justify-between sticky top-0 z-[999] bg-gray-200 backdrop-blur-lg bg-opacity-60">
        <Logo />
        <div className="hidden lg:flex gap-10 items-center">
          {navs.map((nav, index) => (
            <p
              key={index}
              className="text-s hover:text-primary transition-colors cursor-pointer"
              onClick={() => navigator(nav.id)}
            >
              {nav.name}
            </p>
          ))}
        </div>
        {!isAuthenticated && (
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
        )}

        {isAuthenticated && (
          <Link to={"/dashboard"} className="hidden lg:flex gap-5 items-center">
            <GlidingButton className="px-5 text-sm text-white bg-black rounded-md hover:opacity-90 transition-opacity">
              Dashboard
              <ArrowRight />
            </GlidingButton>
          </Link>
        )}

        <button
          className="px-2 py-2 border-2 bg-blue-200 shadow-lg border-primary/60 rounded-2xl lg:hidden hover:bg-blue-100 transition-colors"
          onClick={() => setIsSidebarOpen(true)}
        >
          <LucideChartNoAxesGantt size={30} />
        </button>
      </div>

      {/* Sidebar for small screens */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 lg:hidden transition-opacity duration-300 z-[9999] ${
          isSidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 bottom-0 w-64 bg-white z-[9999] lg:hidden transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5">
          <div className="flex justify-between items-center mb-4">
            <Logo />
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <h2 className="text-sm text-black/70">
            Engage in fun tasks, earn rewards, and convert your points
          </h2>
          <div className="flex flex-col gap-6 mt-8">
            {navs.map((nav, index) => (
              <p
                key={index}
                className="text-lg font-medium hover:text-primary transition-colors cursor-pointer"
                onClick={() => navigator(nav.id)}
              >
                {nav.name}
              </p>
            ))}
            <Link
              to={"/buy-coupon"}
              className="text-lg font-medium hover:text-primary transition-colors cursor-pointer"
            >
              Buy Coupon
            </Link>
            {!isAuthenticated &&
              links.map((link, index) => (
                <Link
                  key={index}
                  to={link.link}
                  className={`${link.className} px-5 py-2 text-sm text-white rounded-md hover:opacity-90 transition-opacity text-center`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

            {isAuthenticated && (
              <Link to={"/dashboard"} className="gap-5 items-center w-full">
                <GlidingButton className="px-5 text-sm text-white bg-secondary rounded-md hover:opacity-90 transition-opacity w-full justify-between">
                  Dashboard
                  <ArrowRight />
                </GlidingButton>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
