import React from "react";
import "../style/header.css";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
    padding: 10px;
    margin-left: 20px;
    margin-right: 20px;
    text-decoration: none;
    
    color:beige;

    &:hover {
        background-color: red;
        border-radius: 15px;
        color:beige;
    }
    
`;

const StyledNavLinkLogo = styled(NavLink)`
    padding: 10px;
    margin-left: 20px;
    margin-right: 20px;
    text-decoration: none;
    color:beige;
    
`;

const Header = ({ history }) => {
    return (
        <div className="class-header-div">
            
                <header className="class-header">
                    <nav className="class-navbar">
                        <div class="class-logo">
                            <StyledNavLinkLogo to="/Main">Logo</StyledNavLinkLogo>
                        </div>
                
                    <div className="class-div-menu">
                        <ul className="class-header-ul">
                            <div className="menu">
                                <StyledNavLink to="/main">메인페이지</StyledNavLink>
                                <StyledNavLink to="/Signin">로그인</StyledNavLink>
                                <StyledNavLink to="/Signup">회원가입</StyledNavLink>
                            </div>
                            </ul>
                        </div>
                    </nav>
                </header>

                <div className="class-space"></div>
        </div>
    );
}

export default Header;


