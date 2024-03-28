import { Container } from "components/styled/container";
import { PopularProductsContainer } from "./styled";
import BoxComponent, { BoxProps } from "../box/box";
import { FC } from "react";

interface IProps {
  products: BoxProps[]
}

const PopularProducts: FC<IProps> = ({ products }) => {

  return (
    <Container>
      <PopularProductsContainer>
        <div className="row">
          {products.map((item) => (
            <BoxComponent key={item.title} {...item} />
          ))}
        </div>
      </PopularProductsContainer>
    </Container>
  );
};

export default PopularProducts;
