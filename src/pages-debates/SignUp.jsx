import React from "react";
import * as St from "../components/style";
import logo from "../assets/img/IMG_0286.png";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { api } from "../axios/api";

function SignUp() {
  // 페이지 이동 사용 useNavigate 선언
  const navigate = useNavigate();

  // 아이디, 비밀번호 input state 관리
  const [userId, idOnChangeHandler] = useInput("");
  const [password, pwOnChangeHandler] = useInput("");
  const [nickName, nickNameOnChangeHandler] = useInput("");

  // 아이디 비밀번호 data
  const userData = {
    nickname: nickName,
    username: userId,
    password: password,
  };

  // 회원가입 완료 버튼 클릭시 userData 서버로 전달
  const signUpButtonHandler = async () => {
    try {
      if (userId === "" || password === "" || nickName === "") {
        alert("아이디와 비밀번호 닉네임을 입력해주세요");
        return;
      }

      const response = await api.post("/sign-up", userData);
      // console.log("response 보자", response);
      if (response.status === 200) {
        alert("회원가입에 성공했습니다.");
        navigate("/sign-in");
      }
    } catch (error) {
      if (error.response) {
        const statusCode = error.response.status;
        const errorMessage = error.response.data.errorMessage;

        if (statusCode === 400 || statusCode === 409) {
          alert(errorMessage);
        }
      }
    }
  };

  // 로그인 하러가기 버튼 클릭시 로그인 페이지로 이동
  const goToSignInButtonHandler = () => {
    navigate("/sign-in");
  };
  return (
    <St.SignInWrapper>
      <St.SignForm2
        method="post"
        onSubmit={(event) => {
          event.preventDefault();
          signUpButtonHandler();
        }}
      >
        <St.LogoStyle>
          <St.SignLogo src={logo}></St.SignLogo>
        </St.LogoStyle>
        <St.SignTitle>회원가입</St.SignTitle>
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
          <St.SignInput
            type="text"
            name="signNickName"
            placeholder="닉네임"
            value={nickName}
            onChange={nickNameOnChangeHandler}
          ></St.SignInput>
        </St.SignInputStyle>
        <St.SignButton>회원가입 완료</St.SignButton>
        <St.SignButton onClick={goToSignInButtonHandler}>
          로그인 하러가기
        </St.SignButton>
      </St.SignForm2>
    </St.SignInWrapper>
  );
}

export default SignUp;
