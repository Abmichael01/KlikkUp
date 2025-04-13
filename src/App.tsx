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
import Stories from "./pages/Dashboard/Stories/Stories";
import Roadmap from "./pages/Dashboard/Roadmap";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BuyCoupon from "./components/Transactions/BuyCoupon";

import { useEffect } from "react";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Coupon from "./pages/Admin/Coupon";
import TasksManagement from "./pages/Admin/Tasks";
import ProtectedRoute from "./layouts/ProtectedRoutesLayout";
import StoriesManagement from "./pages/Admin/Stories";
import UsersManagement from "./pages/Admin/Users";
import Story from "./pages/Dashboard/Stories/Story";
import Wallet from "./pages/Dashboard/Wallet";

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
          
        </Route>

        <Route path="/buy-coupon" element={<BuyCoupon />} />

        {/* Dashboard Layout */}
        <Route element={<ProtectedRoute allowedRoles={[1, 2, 3]} />}>
          <Route  element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="invite" element={<Invite />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="stories" element={<Stories />} />
            <Route path="story/:id" element={<Story />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="roadmap" element={<Roadmap />} />
          </Route>
        </Route>

        {/* Authentication Layout */}
        <Route path="/auth" element={<Authlayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={[1]} />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<UsersManagement />} />
            <Route path="coupon" element={<Coupon />} />
            <Route path="tasks" element={<TasksManagement />} />
            <Route path="stories" element={<StoriesManagement />} />

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
