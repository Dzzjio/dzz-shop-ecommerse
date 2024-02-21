import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from './styled';
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

const BoxComponent: FC<BoxProps> = ({ title, price, discount, img, category }) => {
  return (
    <Box>
      <div className="box">
        <img src={img} alt={title} />
        <div className="absolute-icons">
          <FontAwesomeIcon icon={faHeart} className="icons" />
          <FontAwesomeIcon icon={faCartShopping} className="icons" />
        </div>
        {discount && <span className="absolute-discount">GET {discount}% OFF</span>}

        <Button uppercase borderWhite>Quick View</Button>
      </div>

      <div className="box-text">
        <div className="title-div">
          <span>{title}</span>
          <p>{category}</p>
        </div>
        <div className="price-div">
          <span className="crossed-price">${price} </span>
          <span>${discount ? price - (price * discount) / 100 : null}</span>
        </div>
      </div>
    </Box>
  );
};

export default BoxComponent;
