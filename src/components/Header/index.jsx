import React from 'react';
import { HeaderContainer, Logo, NavContainer } from './Header.style';
import { Nav } from './Header.style';


const Header = () => {
    return (
        <HeaderContainer>
            <Logo>AgroPortal</Logo>
            <NavContainer>
                <a href=''><Nav>Agricultura</Nav></a>
                <a href=''><Nav>Coleção</Nav></a>
                <a href=''><Nav>Noticias</Nav></a>
            </NavContainer>
        </HeaderContainer>
    )
}
export default Header;