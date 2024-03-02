import { HeaderContainer, HeaderLeftSide, HeaderRightSide, Star, StyledLink } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHeart, faNavicon, faSearch, faShoppingCart, faXmark } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../assets/images/logo.png'
import { useState } from 'react';
import Cart from 'components/ui/cart/cart';
import MobileMenu from 'components/ui/mobileMenu/mobileMenu';
import SearchModal from 'components/ui/search/search';

const Header = () => {
  const [open, setOpen] = useState(false)
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)

  const setBodyFixed = () => {
    document.body.classList.toggle('fixed')
  }

  return (
    <>
    <HeaderContainer>
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
        <p>
          <span><StyledLink to='/auth/login'>Log In</StyledLink></span>
          /
          <span><StyledLink to='/auth/register'>Register</StyledLink></span>
        </p>
        <div>
          <FontAwesomeIcon icon={faSearch} onClick={() => {setOpenSearch(true); setBodyFixed()}} />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faShoppingCart} onClick={() => {setOpen(true); setBodyFixed()}} />
          <FontAwesomeIcon icon={faNavicon} onClick={() => {setOpenMobileMenu(true); setBodyFixed()}}/>
        </div>
      </HeaderRightSide>
    </HeaderContainer>
    
    <Cart open={open} onClose={() => {setOpen(false); setBodyFixed()}}/>
    <MobileMenu open={openMobileMenu} onClose={() => {setOpenMobileMenu(false); setBodyFixed()}}/>
    <SearchModal open={openSearch} onClose={() => {setOpenSearch(false); setBodyFixed()}} />
    </>
  )
}

export default Header
