import React from "react";
import * as St from "../components/style";
import logo from "../assets/img/IMG_0286.png";
import { useNavigate } from "react-router-dom";
function SignUp() {
  // 페이지 이동 사용 useNavigate 선언
  const navigate = useNavigate();

  // 로그인 하러가기 버튼 클릭시 로그인 페이지로 이동
  const goToSignInButtonHandler = () => {
    navigate("/sign-in");
  };
  return (
    <St.SignInWrapper>
      <St.SignForm method="post">
        <St.LogoStyle>
          <St.SignLogo src={logo}></St.SignLogo>
        </St.LogoStyle>
        <St.SignTitle>회원가입</St.SignTitle>
        <St.SignInputStyle>
          <St.SignInput type="text" name="signId" placeholder="아이디" />
          <St.SignInput
            type="password"
            name="signPassword"
            placeholder="비밀번호"
          />
        </St.SignInputStyle>
        <St.SignButton>회원가입 완료</St.SignButton>
        <St.SignButton onClick={goToSignInButtonHandler}>
          로그인 하러가기
        </St.SignButton>
      </St.SignForm>
    </St.SignInWrapper>
  );
}

export default SignUp;
