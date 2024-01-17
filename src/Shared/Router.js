import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Confirm from "../pages-debates/Confirm";
import SignUp from "../pages-debates/SignUp";
import SignIn from "../pages-debates/SignIn";
import DebatesMain from "../pages-debates/DebatesMain";
import DebatesDetail from "../pages-debates/DebatesDetail";
import Layout from "../pages-quiz/Layout";
import Home from "../pages-quiz/Home";
import QuizMainPage from "../pages-quiz/QuizMainPage";
import QuizCreatePage from "../pages-quiz/QuizCreatePage";
import QuizDetailPage from "../pages-quiz/QuizDetailPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Confirm />} /> */}
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="debates" element={<DebatesMain />} />
          <Route path="debates/:id" element={<DebatesDetail />} />
          <Route path="home" element={<QuizMainPage />} />
          <Route path="quizzes" element={<QuizCreatePage />} />
          <Route path="quizzes/:quizId" element={<QuizDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
