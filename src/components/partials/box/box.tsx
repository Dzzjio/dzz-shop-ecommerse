import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, BoxBot, BoxTop } from './styled';
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import QuickView from "components/ui/quickView";

export interface BoxProps {
    title: string;
    price: number;
    img: string;
    category?: string;
    discount?: number;
}

const BoxComponent: FC<BoxProps> = ({ title, price, discount, img, category }) => {
    const [openDetails, setOpenDetails] = useState<boolean>(false);

    const setBodyFixed = () => {
        document.body.classList.toggle('fixed');
    };

    return (
        <>
            <Box>
                <BoxTop>
                    <img src={img} alt={title} />
                    <div>
                        <FontAwesomeIcon icon={faHeart} />
                        <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                    {discount && <span>GET {discount}% OFF</span>}
                </BoxTop>
                <BoxBot >
                    <div>
                        <span>{title.slice(0,50)}</span>
                        <p>{category}</p> 
                    </div>
                    <div>
                        <span >${price} </span>
                        <span>${discount ? price - (price * discount) / 100 : null}</span>
                    </div>
                </BoxBot>
                <button onClick={() => { setOpenDetails(true); setBodyFixed() }}>QUICK VIEW</button>
            </Box>
            <QuickView open={openDetails} onClose={() => { setOpenDetails(false); setBodyFixed() }} />
        </>
    );
};

export default BoxComponent;