import React from "react";
import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Authlayout from "./layouts/Authlayout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Invite from "./pages/Dashboard/Invite";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route  path="/dashboard" element={<Dashboard />} />
          <Route  path="/invite" element={<Invite />} />
        </Route>
        <Route path="/auth" element={<Authlayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
