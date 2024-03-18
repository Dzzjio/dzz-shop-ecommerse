import { AddCartIcon, WishListContainer, WishListContent, WishListTitle } from "./styled"
import img from '../../assets/images/product-2.jpg'
import { FC } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartArrowDown, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"
import HeaderBotYellow from "components/layout/headerBotYellow/headerBotY"


const wishlistItmes = [
    {
        product: 'product 1',
        productImgUrl: img,
        price: 333,
        inStock: true
    },
    {
        product: 'product 2',
        productImgUrl: img,
        price: 666,
        inStock: false
    },
    {
        product: 'product 3',
        productImgUrl: img,
        price: 999,
        inStock: false
    }
]

const WishListPage: FC = () => {
    return (
        <>
        <HeaderBotYellow imgUrl={img} headingText={"WISHLIST"} />
        <WishListContainer>
            <WishListTitle>
                <p>Product</p>
                <p>Price</p>
                <p>Stock</p>
            </WishListTitle>

            <WishListContent>
                {wishlistItmes.map((item, index) => (
                    <div key={index}>
                        <div>
                            <div><FontAwesomeIcon icon={faXmark}/></div>
                            <img src={item.productImgUrl} alt={item.product} />
                            <h3>{item.product}</h3>
                        </div>
                        <p>${item.price}</p>
                        <p>{item.inStock ? "In Stock" : "Out of Stock"}</p>
                        <p>{item.inStock ? 
                            <AddCartIcon><FontAwesomeIcon icon={faCheck}/></AddCartIcon> 
                                :
                            <AddCartIcon><FontAwesomeIcon icon={faXmark}/></AddCartIcon>}
                        </p>
                        <button>Add To Cart</button>
                        <AddCartIcon><FontAwesomeIcon icon={faCartArrowDown}/></AddCartIcon>
                    </div>
                ))}
            </WishListContent>
        </WishListContainer>
        </>
    )
}

export default WishListPage