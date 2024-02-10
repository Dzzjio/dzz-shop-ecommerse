import { New, Sale, StyledPopularProductBox, StyledPopularProductBoxBtn, StyledPopularProductBoxIconDiv, StyledPopularProductBoxInfo } from "./styled";
import popularBox from '../../../assets/images/popular-product-gray-box.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

interface PopularProductBoxProps {
    productName: string;
    price: string;
    sale: boolean;
    newItem: boolean;

}

const PopularProductBox: React.FC<PopularProductBoxProps> = ({ productName, price, sale, newItem }) => {

    return (
        <StyledPopularProductBox>
            {sale && <Sale>Get 20% OFF</Sale>}
            {newItem && <New>NEW</New>}
            <StyledPopularProductBoxIconDiv>
                <div><FontAwesomeIcon icon={faHeart} /></div>
                <div><FontAwesomeIcon icon={faBagShopping} /></div>
            </StyledPopularProductBoxIconDiv>
            <img src={popularBox} alt="changelater" />
            <StyledPopularProductBoxBtn>QUICK VIEW</StyledPopularProductBoxBtn>
            <StyledPopularProductBoxInfo>
                <p>{productName}</p>
                <p>{price}</p>
            </StyledPopularProductBoxInfo>
        </StyledPopularProductBox>
    )
}

export default PopularProductBox;