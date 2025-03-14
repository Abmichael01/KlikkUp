import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";
import React from "react";
import { Outlet } from "react-router";

const MainLayout: React.FC = () => {
  return (
    <div className="gap-10">
      <Navbar />

      <main className="bg-primary">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
