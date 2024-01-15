import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Confirm() {
  // alert state 선언
  const [showAlert, setShowAlert] = useState(true);

  // 쿠키 확인
  const token = Cookies.get("token");
  // useNavigate 페이지 이동 선언
  const navigate = useNavigate();

  // useEffect 사용하여 렌더링시 cookie확인 후 메인 혹은 로그인 페이지 이동
  useEffect(() => {
    if (token && showAlert) {
      navigate("/main");
    } else {
      alert("로그인이 필요합니다");
      setShowAlert(false);
      navigate("/sign-in");
    }
  }, []);
  return <div></div>;
}

export default Confirm;
