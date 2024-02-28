import { Container } from "components/styled/container";
import { PopularProductsContainer } from "./styled";
import { Title } from "components/styled/title";
import BoxComponent, { BoxProps } from "../box/box";
import { shuffleArray } from "components/helpers/utils";
import { useEffect, useState } from "react";

const PopularProducts = () => {
  const [products, setProducts] = useState<BoxProps[]>([]);
  useEffect(() => {
    const Item = {
      title: "bluebell hand block",
      category: "tiered dress",
      discount: 20,
      price: 80,
      img: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    };

    const Item2 = {
      title: "Product 2",
      category: "Men shoes",
      price: 190,
      img: "https://i.pinimg.com/736x/de/01/b9/de01b91d46848547ec9b036b18ea2d63.jpg",
    };

    const data: BoxProps[] = shuffleArray([
      ...Array(6).fill(Item),
      ...Array(6).fill(Item2),
    ]);
    setProducts(data)
  }, []);

  return (
    <Container>
      <PopularProductsContainer>
        <div className="display-flex">
          <Title>Most popular products</Title>
        </div>
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
