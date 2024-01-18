import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../pages-debates/SignUp";
import SignIn from "../pages-debates/SignIn";
import DebatesMain from "../pages-debates/DebatesMain";
import DebatesDetail from "../pages-debates/DebatesDetail";
import DebatesCreatePage from "../pages-debates/DebatesCreatePage";
import Layout from "../pages-quiz/Layout";
import Home from "../pages-quiz/Home";
import QuizMainPage from "../pages-quiz/QuizMainPage";
import QuizCreatePage from "../pages-quiz/QuizCreatePage";
import QuizDetailPage from "../pages-quiz/QuizDetailPage";

const Router = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route element={<Layout />}>
            {/* 메인 페이지 */}
            <Route path="/" element={<Home />} />
            <Route path="debates" element={<DebatesMain />} />
            <Route path="debates/:debatesId" element={<DebatesDetail />} />
            <Route path="debates-add" element={<DebatesCreatePage />} />
            {/* 퀴즈 게시판 페이지 */}
            <Route path="/home" element={<QuizMainPage />} />
            {/* 퀴즈 게시물 등록 페이지 */}
            <Route path="/quizzes" element={<QuizCreatePage />} />
            {/* 퀴즈 상세 페이지 */}
            <Route path="/quizzes/:quizId" element={<QuizDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

};

export default Router;
