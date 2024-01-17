import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./LayoutDetail";
import 'bootstrap/dist/css/bootstrap.min.css';

function Layout() {
  const layoutStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    minHeight: '90vh',
  }
  return (
    <div>
      <Header />
      <div style={{ ...layoutStyles }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
