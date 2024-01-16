import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Confirm from "../pages-debates/Confirm";
import SignUp from "../pages-debates/SignUp";
import SignIn from "../pages-debates/SignIn";
import Main from "../pages-debates/Main";
import DebatesMain from "../pages-debates/DebatesMain";
import DebatesDetail from "../pages-debates/DebatesDetail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Confirm />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="main" element={<Main />} />
        <Route path="debates" element={<DebatesMain />} />
        <Route path="debates/:id" element={<DebatesDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
