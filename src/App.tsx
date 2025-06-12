import React from 'react';
import { Routes, Route, BrowserRouter, useLocation, Navigate } from 'react-router';

import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Authlayout from './layouts/Authlayout';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Invite from './pages/Dashboard/Invite';
import Tasks from './pages/Dashboard/Tasks';
import Stories from './pages/Dashboard/Stories/Stories';
import Roadmap from './pages/Dashboard/Roadmap';
import PrivacyPolicy from './pages/PrivacyPolicy';
import BuyCoupon from './components/Transactions/BuyCoupon';
import Story from './pages/Dashboard/Stories/Story';
import Wallet from './pages/Dashboard/Wallet';
import Courses from './pages/Dashboard/Courses';

// Admin imports
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Coupon from './pages/Admin/Coupon';
import TasksManagement from './pages/Admin/Tasks';
import ProtectedRoute from './layouts/ProtectedRoutesLayout';
import StoriesManagement from './pages/Admin/Stories';
import UsersManagement from './pages/Admin/Users';
import { getSubdomain } from './lib/utils';
import CoursesManagement from './pages/Admin/Courses';
import Settings from './pages/Dashboard/Settings';
import BecomePartner from './pages/BecomePartner';
import Giveaway from './pages/Dashboard/Giveaway';
import AnnouncementsManagement from './pages/Admin/Announcements';
import GiveawaysManagement from './pages/Admin/Giveaways';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const subdomain = getSubdomain();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Public Shared Auth Routes */}
        <Route path="/auth" element={<Authlayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Subdomain-based Routing */}
        {subdomain === 'admin' ? (
          <>
            <Route element={<ProtectedRoute allowedRoles={[1]} />}>
              <Route path="/" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="users" element={<UsersManagement />} />
                <Route path="coupon" element={<Coupon />} />
                <Route path="tasks" element={<TasksManagement />} />
                <Route path="stories" element={<StoriesManagement />} />
                <Route path="courses" element={<CoursesManagement />} />
                <Route path="announcements" element={<AnnouncementsManagement />} />
                <Route path="giveaways" element={<GiveawaysManagement />} />
              </Route>
            </Route>
          </>
        ) : (
          <>
            {/* Main Site Routes */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
            </Route>

            <Route path="/buy-coupon" element={<BuyCoupon />} />
            <Route path="/become-partner" element={<BecomePartner />} />

            {/* Auth Routes */}

            <Route element={<ProtectedRoute allowedRoles={[1, 2, 3]} />}>
              <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="invite" element={<Invite />} />
                <Route path="tasks" element={<Tasks />} />
                <Route path="stories" element={<Stories />} />
                <Route path="story/:id" element={<Story />} />
                <Route path="wallet" element={<Wallet />} />
                <Route path="roadmap" element={<Roadmap />} />
                <Route path="courses" element={<Courses />} />
                <Route path="settings" element={<Settings />} />
                <Route path="giveaway" element={<Giveaway />} />
              </Route>
            </Route>
          </>
        )}

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;