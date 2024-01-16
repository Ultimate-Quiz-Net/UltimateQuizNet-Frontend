import React from 'react'
import Layout from '../pages-quiz/Layout'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizMainPage from '../pages-quiz/QuizMainPage';
import Home from '../pages-quiz/Home';
import QuizCreatePage from '../pages-quiz/QuizCreatePage';
import QuizDetailPage from '../pages-quiz/QuizDetailPage';
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
                        <Route path="/quizzes/:quizId" element={<QuizDetailPage />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    )
}

export default Router