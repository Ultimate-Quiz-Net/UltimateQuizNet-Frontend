import React from "react";
import { Link } from "react-router-dom";
import { MainTextContainer } from "../shared/styled";
function Home() {
  const textContainerStyle = {
    zIndex: 1,
    textAlign: "center",
  };

  return (
    <MainTextContainer>
      <div style={textContainerStyle}>
        <h1>
          극락 퀴즈넷 커뮤니티에 오신 여러분을 환영합니다!
          <br />
          여기에서는 다양한 주제의 퀴즈와 토론이 펼쳐집니다.
          <br />
          지식의 신비로운 세계에 도전하고 다른 참여자들과 소통하세요.
        </h1>
        <Link to="/home">퀴즈 메인 페이지로 이동하기</Link>
      </div>
    </MainTextContainer>
  );

}

export default Home;
