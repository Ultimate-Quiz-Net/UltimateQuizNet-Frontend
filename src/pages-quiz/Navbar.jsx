import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/IMG_0286.png";
import Cookies from "js-cookie";
import { StyledButton, LoginButton } from "../shared/styled";
function CustomNavbar() {
  const navigate = useNavigate();
  // 로그아웃 버튼
  const signOutButtonHandler = () => {
    if (Cookies.get("accessToken")) {
      Cookies.remove("accessToken");
      navigate("/");
    } else {
      navigate("/sign-in");
    }
  };


// 토론 게시판 이동 버튼
const debateBoardButtonHandler = () => {
  if (Cookies.get("accessToken" || "refreshToken")) {
    navigate("/debates");
  } else {
    alert("로그인이 필요합니다");
  }
};

  return (
    <nav
      style={{ height: '70px' }}
      className="navbar navbar-expand-md bg-body-tertiary bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Logo} style={{ height: "45px" }} alt="Logo-icon" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                <StyledButton className="button--winona" data-text="메인 화면">
                  <span>메인 화면</span>
                </StyledButton>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/home">

                <StyledButton className="button--winona" data-text="퀴즈 게시판">
                  <span>퀴즈 게시판</span>
                </StyledButton>
              </Link>
            </li>
            <li className="nav-item">
              <div className="nav-link active">
                <StyledButton className="button--winona" data-text="토론 게시판" onClick={debateBoardButtonHandler}>
                  <span>토론 게시판</span>
                </StyledButton>
              </div>
            </li>
          </ul>
        </div>
        <LoginButton onClick={signOutButtonHandler}>
          {Cookies.get("accessToken") ? "로그아웃" : "로그인"}
        </LoginButton>
      </div>
      
    </nav>
  );
}

export default CustomNavbar;