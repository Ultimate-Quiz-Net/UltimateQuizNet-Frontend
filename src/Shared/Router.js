import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Confirm from "../Pages/Confirm";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import Main from "../Pages/Main";
import DebatesMain from "../Pages/DebatesMain";
import DebatesDetail from "../Pages/DebatesDetail";

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
