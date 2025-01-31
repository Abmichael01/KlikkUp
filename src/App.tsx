import React from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Authlayout from "./layouts/Authlayout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Invite from "./pages/Dashboard/Invite";
import Tasks from "./pages/Dashboard/Tasks";
import Stories from "./pages/Dashboard/Stories";
import Airdrop from "./pages/Dashboard/Airdrop";
import Roadmap from "./pages/Dashboard/Roadmap";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";


import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
        </Route>

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="invite" element={<Invite />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="stories" element={<Stories />} />
          <Route path="airdrop" element={<Airdrop />} />
          <Route path="roadmap" element={<Roadmap />} />
        </Route>

        {/* Authentication Layout */}
        <Route path="/auth" element={<Authlayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
