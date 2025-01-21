import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";
import React from "react";
import { Outlet } from "react-router";

const MainLayout: React.FC = () => {
  return (
    <div className="gap-10">
      <div className="px-2 sm:px-5  pt-5">
        <Navbar />
      </div>
      <main className="pt-8 px-2 sm:px-8 md:px-12 lg:px-20 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
