import React from "react";
import CustomNavbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const HeaderStyles = {
  width: "100%",
  background: "black",
  height: "50px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "20px",
  color: "white",
  fontWeight: "600",
};
const FooterStyles = {
  width: "100%",
  height: "50px",
  display: "flex",
  background: "black",
  color: "white",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
};

// header navbar
export const Header = () => {
  return <CustomNavbar />;
};

// footer navbar
export const Footer = () => {
  return (
    <div style={{ ...FooterStyles }}>
      <span>극락 퀴즈넷</span>
    </div>
  );
};
