import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/Home";
import MorePage from "./pages/More";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/more" element={<MorePage />} />
      </Routes>
    </div>
  );
};

export default App;
