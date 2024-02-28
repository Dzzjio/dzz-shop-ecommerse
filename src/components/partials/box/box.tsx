import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, BoxBot, BoxTop } from './styled';
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FC } from 'react';
import Button from 'components/styled/button';

export interface BoxProps {
  title: string;
  price: number;
  img: string;
  category?: string;
  discount?: number;
}

const BoxComponent: FC<BoxProps> = ({ title, price, discount, img, category, }) => {
  return (
    <Box>
      <BoxTop>
        <img src={img} alt={title} />
        <div>
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        {discount && <span>GET {discount}% OFF</span>}

        <Button uppercase borderWhite>Quick View</Button>
      </BoxTop>

      <BoxBot >
        <div>
          <span>{title}</span>
          <p>{category}</p>
        </div>
        <div>
          <span >${price} </span>
          <span>${discount ? price - (price * discount) / 100 : null}</span>
        </div>
      </BoxBot>
    </Box>
  );
};

export default BoxComponent;
