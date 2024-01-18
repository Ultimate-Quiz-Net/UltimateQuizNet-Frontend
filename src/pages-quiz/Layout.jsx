import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./LayoutDetail";
import 'bootstrap/dist/css/bootstrap.min.css';
import surf from "../assets/img/IMG_0283.jpg";

function Layout() {
  const layoutStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    minHeight: '90vh',
  }
  const backgroundImgCantainer = {
    background: `linear-gradient(45deg, rgba(51, 43, 43, 0.75),
     rgba(20, 19, 20, 0.61)), 
     url(${surf}) 
     center center fixed`
  }
  return (
    <div style={backgroundImgCantainer}>
      <Header />
      <div style={{ ...layoutStyles }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
