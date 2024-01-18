import React, { useState } from "react";
import * as St from "../components/style";
import logo from "../assets/img/IMG_0286.png";
import { useNavigate } from "react-router-dom";
import { api } from "../axios/api";
import useInput from "../hooks/useInput";
import Cookies from "js-cookie";

function SignIn() {
  // 페이지 이동 useNavigate 선언
  const navigate = useNavigate();
  // 아이디, 비밀번호 input state 관리
  const [userId, idOnChangeHandler] = useInput("");
  const [password, pwOnChangeHandler] = useInput("");
  const [error, setError] = useState("");
  // 아이디 비밀번호 data
  const userData = {
    username: userId,
    password: password,
  };

  // 회원가입 버튼 클릭시 회원가입 페이지로 이동
  const signUpButtonHandler = () => {
    navigate("/sign-up");
  };

  // 로그인 버튼 클릭시 토큰주고 메인화면 이동
  const loginButtonHandler = async () => {
    try {
      if (userId === "" || password === "") {
        alert("아이디 비밀번호를 입력해주세요");
        return;
      }
      const response = await api.post("/sign-in", userData);
      console.log(Cookies.get("accessToken"));
      console.log("response 확인", response);
      if (response.data.message === "로그인 성공.") {
        // 서버 응답이 성공하고, 메시지가 "로그인 성공."일때
        Cookies.set("accessToken", response.data.data.accessToken);
        Cookies.set("refreshToken", response.data.data.refreshToken);
        navigate("/");
      } else {
        setError("토큰이 없습니다.");
      }
    } catch (error) {
      if (error.response) {
        console.log("error response 확인", error);
        const errorStatus = error.response.status;
        const errorMessage = error.response.errorMessage;

        if (errorStatus === 400 || errorStatus === 401) {
          alert(errorMessage);
        }
      }
    }
  };

  return (
    <St.SignInWrapper>
      <St.SignForm1
        method="post"
        onSubmit={(event) => {
          event.preventDefault();
          loginButtonHandler();
        }}
      >
        <St.LogoStyle>
          <St.SignLogo src={logo}></St.SignLogo>
        </St.LogoStyle>
        <St.SignTitle>로그인</St.SignTitle>
        <St.SignInputStyle>
          <St.SignInput
            type="text"
            name="signId"
            placeholder="아이디"
            value={userId}
            onChange={idOnChangeHandler}
          />
          <St.SignInput
            type="password"
            name="signPassword"
            placeholder="비밀번호"
            value={password}
            onChange={pwOnChangeHandler}
          />
          <St.SignCheckBoxStyle>
            <St.SignCheckBox type="checkbox" />
            &nbsp; 아이디 저장하기
          </St.SignCheckBoxStyle>
        </St.SignInputStyle>
        <St.SignButton>로그인 하기</St.SignButton>
        <St.SignButton onClick={signUpButtonHandler}>회원가입</St.SignButton>
      </St.SignForm1>
    </St.SignInWrapper>
  );
}

export default SignIn;
