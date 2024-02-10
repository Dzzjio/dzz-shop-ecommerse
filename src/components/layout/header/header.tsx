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
         <ul> {/*routers ro davamateb mere gavaketeb active links shavi varskvlav */}
          <li><span>Home</span> <Star></Star></li>
          <li><span>Shop</span> <Star></Star></li>
          <li><span>Blog</span> <Star></Star></li>
          <li><span>Portfolio</span> <Star></Star></li>
          <li><span>Pages</span> <Star></Star></li>
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
