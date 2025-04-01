import React from 'react';
import { HeaderContainer, Logo, NavContainer } from './Header.style';
import { Nav } from './Header.style';
import { Link } from 'react-router-dom';
import Agro from '../assets/Img/AGRO-removebg-preview.png';


const Header = () => {
    return (
        <HeaderContainer>
            <Logo src={Agro} alt="AgroPortal Logo" />
            <NavContainer>
                <a href=''><Nav>Agricultura</Nav></a>
                <a href=''><Nav>Coleção</Nav></a>
                <a href=''><Nav>Noticias</Nav></a>
            </NavContainer>
        </HeaderContainer>
    )
}
export default Header;