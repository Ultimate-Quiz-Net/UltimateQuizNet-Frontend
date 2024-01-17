import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/IMG_0286.png";
import Cookies from "js-cookie";

function CustomNavbar() {
  const navigate = useNavigate();
  const signOutButtonHandler = () => {
    if (Cookies.get("token")) {
      Cookies.remove("token");
      navigate("/");
    } else {
      navigate("/sign-in");
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
              <Link className="nav-link active" to="/home">
                퀴즈 게시판
              </Link>
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
