import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/IMG_0286.png";
import Cookies from "js-cookie";

function CustomNavbar() {
  const navigate = useNavigate();
  // 로그아웃 버튼
  const signOutButtonHandler = () => {
    if (Cookies.get("token")) {
      Cookies.remove("token");
      navigate("/");
    } else {
      navigate("/sign-in");
    }
  };

  // 퀴즈 게시판 이동 버튼
  const quizBoardButtonHandler = () => {
    if (Cookies.get("token")) {
      navigate("/home");
    } else {
      alert("로그인이 필요합니다");
    }
  };

  // 토론 게시판 이동 버튼
  const debateBoardButtonHandler = () => {
    if (Cookies.get("token")) {
      navigate("/debates");
    } else {
      alert("로그인이 필요합니다");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body"
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
                메인 화면
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="nav-link active"
                onClick={quizBoardButtonHandler}
              >
                퀴즈 게시판
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link active"
                onClick={debateBoardButtonHandler}
              >
                토론 게시판
              </button>
            </li>
          </ul>
        </div>
        <button onClick={signOutButtonHandler}>
          {Cookies.get("token") ? "로그아웃" : "로그인"}
        </button>
      </div>
    </nav>
  );
}

export default CustomNavbar;
