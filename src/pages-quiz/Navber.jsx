import React from 'react';
import { Link } from 'react-router-dom';
import surf from "../images/IMG_0286.png";

function CustomNavbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={surf} style={{ height: "45px" }} alt="surf-icon" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">메인 화면</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/home">퀴즈 게시판</Link>
                        </li>
                    </ul>
                </div>
                <form className="d-flex" style={{ color: 'white' }}>
                    로그인 부분
                </form>
            </div>
        </nav>
    );
}

export default CustomNavbar;
