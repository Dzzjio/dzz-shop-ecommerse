import { HeaderContainer, HeaderRightSide, Star } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faNavicon, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {  faHeart} from '@fortawesome/free-regular-svg-icons';
import logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="logo" />
         <ul>
          <li><Link to='/'><span>Home</span> <Star></Star></Link></li>
          <li><Link to='/shop'><span>Shop</span> <Star></Star></Link></li>
          <li><Link to='/blog'><span>Blog</span> <Star></Star></Link></li>
          <li><Link to='/portfolio'><span>Portfolio</span> <Star></Star></Link></li>
          <li><Link to='/pages'><span>Pages</span> <Star></Star></Link></li>
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
