import React from "react";
import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
