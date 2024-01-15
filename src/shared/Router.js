import React from 'react'
import Layout from '../pages/Layout'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizMainPage from '../pages/QuizMainPage';
import Home from '../pages/Home';
import QuizCreatePage from '../pages/QuizCreatePage';
import QuizDetailPage from '../pages/QuizDetailPage';
const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        {/* 메인 페이지 */}
                        <Route path="/" element={<Home />} />
                        {/* 퀴즈 게시판 페이지 */}
                        <Route path="/home" element={<QuizMainPage />} />
                        {/* 퀴즈 게시물 등록 페이지 */}
                        <Route path="/quizzes" element={<QuizCreatePage />} />
                        {/* 퀴즈 상세 페이지 */}
                        <Route path="/quizzes/:id" element={<QuizDetailPage />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    )
}

export default Router