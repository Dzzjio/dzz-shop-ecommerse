import { HeaderContainer, HeaderRightSide, Star } from './styled'
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
          <li>Home <Star></Star></li>
          <li>Shop <Star></Star></li>
          <li>Blog <Star></Star></li>
          <li>Portfolio <Star></Star></li>
          <li>Pages <Star></Star></li>
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
