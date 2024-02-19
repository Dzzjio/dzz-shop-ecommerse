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
      img: "https://imgmedia.lbb.in/media/2018/08/5b67e6b5ff549018ea5d3dc6_1533535925706.jpg",
    };

    const Item2 = {
      title: "Product 2",
      category: "Men shoes",
      price: 190,
      img: "https://cdn4.vectorstock.com/i/1000x1000/54/13/online-store-building-on-blue-background-vector-21545413.jpg",
    };

    const data: BoxProps[] = shuffleArray([
      ...Array(4).fill(Item),
      ...Array(4).fill(Item2),
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
