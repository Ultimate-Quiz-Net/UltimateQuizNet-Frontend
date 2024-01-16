
import React from 'react';
import CustomNavbar from './Navber';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderStyles = {
    width: '100%',
    background: 'black',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '20px',
    color: 'white',
    fontWeight: '600',
};
const FooterStyles = {
    width: '100%',
    height: '50px',
    display: 'flex',
    background: 'black',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
};

const layoutStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    minHeight: '90vh',
}

// header navbar
function Header() {
    return (
        <CustomNavbar/>
    );
}


// footer navbar
function Footer() {
    return (
        <div style={{ ...FooterStyles }}>
            <span>극락 퀴즈넷</span>
        </div>
    );
}

// 밑의 자식 컴포넌트에 Router에서 모두 적용
function Layout({ children }) {
    return (
        <div>
            <Header />
            <div style={{ ...layoutStyles }}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;