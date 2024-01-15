import React from "react";
import * as St from "../components/style";
import logo from "../assets/img/IMG_0286.png";
import { useNavigate } from "react-router-dom";

function SignIn() {
  // 페이지 이동 useNavigate 선언
  const navigate = useNavigate();

  // 회원가입 버튼 클릭시 회원가입 페이지로 이동
  const signUpButtonHandler = () => {
    navigate("/sign-up");
  };
  return (
    <St.SignInWrapper>
      <St.SignForm method="post">
        <St.LogoStyle>
          <St.SignLogo src={logo}></St.SignLogo>
        </St.LogoStyle>
        <St.SignTitle>로그인</St.SignTitle>
        <St.SignInputStyle>
          <St.SignInput type="text" name="signId" placeholder="아이디" />
          <St.SignInput
            type="password"
            name="signPassword"
            placeholder="비밀번호"
          />
          <St.SignCheckBoxStyle>
            <St.SignCheckBox type="checkbox" />
            &nbsp; 아이디 저장하기
          </St.SignCheckBoxStyle>
        </St.SignInputStyle>
        <St.SignButton>로그인 하기</St.SignButton>
        <St.SignButton onClick={signUpButtonHandler}>회원가입</St.SignButton>
      </St.SignForm>
    </St.SignInWrapper>
  );
}

export default SignIn;
