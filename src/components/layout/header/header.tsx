import { HeaderContainer, HeaderRightSide, Star, StyledLink } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faNavicon, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {  faHeart} from '@fortawesome/free-regular-svg-icons';
import logo from '../../../assets/images/logo.png'

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="logo" />
         <ul>
          <li><StyledLink to='/'><span>Home</span> <Star></Star></StyledLink></li>
          <li><StyledLink to='/shop'><span>Shop</span> <Star></Star></StyledLink></li>
          <li><StyledLink to='/blog'><span>Blog</span> <Star></Star></StyledLink></li>
          <li><StyledLink to='/about'><span>About us</span> <Star></Star></StyledLink></li>
          <li><StyledLink to='/contact'><span>Contact</span> <Star></Star></StyledLink></li>
        </ul>
      </div>
      <HeaderRightSide>
        <p>Login / Register</p>
        <div>
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
          <FontAwesomeIcon icon={faNavicon} />
      </HeaderRightSide>
    </HeaderContainer>
  )
}

export default Header
