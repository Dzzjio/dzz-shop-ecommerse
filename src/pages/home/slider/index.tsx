import { HomeSlider } from "./styled"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BoxProps } from "components/partials/box/box";
import { FC } from "react";

interface IProps {
    products: BoxProps[]
}

const HomePageSlider:FC<IProps> = ({ products }) => {
    return (
        <HomeSlider>
            <Slider
                dots={true}
                autoplay={true}
                infinite={true}
                speed={500}
            >
                {products.map(item => 
                    <div className="single-slide" key={item.title}>
                        <img src={item.img} alt={item.title}/>
                        <h3>{item.title.slice(0, 50)}</h3>
                        <p>Price: {item.price}$</p>
                    </div>  
                )}
            </Slider>
        </HomeSlider>
    )
}

export default HomePageSlider