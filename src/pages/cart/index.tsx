import HeaderBotYellow from "components/layout/headerBotYellow/headerBotY"
import { CartPageContainer, CartPageLeft, CartPageRight, CartPageRightFooter, CartPageRightHeader } from "./styled"
import airplane from '../../assets/images/air-plane.png'
import boxProduct from '../../assets/images/box-product-icon.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons"

const CartPage = () => {
    return (
        <>
        <HeaderBotYellow imgUrl={"https://freerangestock.com/sample/61264/online-shopping--laptop-to-shopping-cart.jpg"} />
        <CartPageContainer>
            <CartPageLeft>
                ;eft
            </CartPageLeft>

            <CartPageRight>
                <CartPageRightHeader>
                    <div>
                        <p>Bank Offer 5% Cashback</p>
                    </div>
                    <div>
                        <img src={airplane} alt="airplane-cart" />
                        <div>
                            <p>Free</p>
                            <h4>Shipping</h4>
                        </div>
                    </div>
                    <div>
                        <img src={boxProduct} alt="boxProduct" />
                        <div>
                            <h4>Enjoy The Product</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                        </div>
                    </div>
                </CartPageRightHeader>
                <CartPageRightFooter>
                    <div>
                        <FontAwesomeIcon icon={faCircleCheck} />
                        <span>You will save ₹504 on this order</span>
                    </div>
                    <div>
                        <p>Total Amount:</p>
                        <h4>$125</h4>
                    </div>
                    <button>Place Order</button>
                </CartPageRightFooter>
            </CartPageRight>
        </CartPageContainer>
        </>
    )
}

export default CartPage