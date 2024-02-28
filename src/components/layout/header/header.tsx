import { HeaderContainer, HeaderLeftSide, HeaderRightSide, Star, StyledLink } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHeart, faNavicon, faSearch, faShoppingCart, faXmark } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../assets/images/logo.png'
import { CloseIcon, HeaderContainerMobile, MenuSideBar, NavbarIcon } from './styledresponsive';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 610);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 610);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    
    <HeaderContainer style={{ display: isMobile ? 'none' : 'flex' }} >
      <HeaderLeftSide>
        <img src={logo} alt="logo" />
         <ul>
          <li><StyledLink to='/'><span>Home</span> <Star></Star></StyledLink></li>
          <li><StyledLink to='/shop'><span>Shop</span> <Star></Star></StyledLink></li>
          <li><StyledLink to='/blog'><span>Blog</span> <Star></Star></StyledLink></li>
          <li><StyledLink to='/about'><span>About us</span> <Star></Star></StyledLink></li>
          <li><StyledLink to='/contact'><span>Contact</span> <Star></Star></StyledLink></li>
        </ul>
      </HeaderLeftSide>
      <HeaderRightSide>
        <p>Login / Register</p>
        <div>
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faShoppingCart} />
          <FontAwesomeIcon icon={faNavicon} />
        </div>
      </HeaderRightSide>
    </HeaderContainer>
    
    <HeaderContainerMobile style={{ 
        display: isMobile ? 'flex' : 'none',
        alignItems: isMenuOpen ? 'stretch' : 'center' 
      }}>
      <img src={logo} alt="logo" />
      <NavbarIcon icon={faNavicon} onClick={toggleMenu} style={{ display: isMenuOpen ? 'none' : 'flex' }}/>
      {isMenuOpen && (
        <MenuSideBar>
          <ul>
            <li><StyledLink to='/'><span>Home</span> <Star></Star></StyledLink></li>
            <li><StyledLink to='/shop'><span>Shop</span> <Star></Star></StyledLink></li>
            <li><StyledLink to='/blog'><span>Blog</span> <Star></Star></StyledLink></li>
            <li><StyledLink to='/about'><span>About us</span> <Star></Star></StyledLink></li>
            <li><StyledLink to='/contact'><span>Contact</span> <Star></Star></StyledLink></li>
          </ul>

          <p>Login / Register</p>
          <div>
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
          
          <CloseIcon icon={faXmark} onClick={toggleMenu}/>
        </MenuSideBar>
      )}
    </HeaderContainerMobile>
    </>
  )
}

export default Header
