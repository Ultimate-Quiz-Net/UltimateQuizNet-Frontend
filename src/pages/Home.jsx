import React from 'react';
import { Link } from "react-router-dom";
import surf from "../images/QuizMainPage.png";

function Home() {
    const containerStyle = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        backgroundImage: `linear-gradient(45deg,
            rgb(51 43 43 / 75%),
            rgb(20 19 20 / 61%)), url(${surf})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
    };

    const textContainerStyle = {
        zIndex: 1,
        textAlign: 'center',
    };

    return (
        <div style={containerStyle}> 
            <div style={textContainerStyle}>
                <h1>홈화면 입니다</h1>
                <Link to="/home">퀴즈 메인 페이지로 이동하기</Link>
            </div>
        </div>
    );
}

export default Home;
