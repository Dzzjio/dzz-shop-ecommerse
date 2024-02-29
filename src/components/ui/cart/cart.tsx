import { FC, useState } from "react"
import { CartContainer, CartContent, CartContentContainer, CartFooter, CartProducts, CartStatus, CartSubtotal, Layout, WishlistAndCart } from "./styledCart"
import CartProduct, { ICartProduct } from "./cartProduct"
import airplane from '../../../assets/images/air-plane.png'
import shippingRange from '../../../assets/images/shipping-range.png'

interface IProps {
    open: boolean
    onClose: () => void
}

const Cart: FC<IProps> = ( {open, onClose} ) => {
    const [products] = useState<ICartProduct[]>([
        {
            title: 'Blue Glock',
            price: 50,
            img: 'https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/g/l/glock-44-semi-automatic-22-lr-pistol_-neptune-blue.jpg'
        },
        {
            title: 'Red Glock',
            price: 70,
            img: 'https://mightyskins.com/cdn/shop/products/red-modern-camo-GSGL19G4.jpg?v=1632253199'
        },  
        {
            title: 'Purple Glock',
            price: 30,
            img: 'https://mightyskins.com/cdn/shop/products/purple-diamond-plate-GSGL19G4.jpg?v=1632253131'
        },
        {
            title: 'Golden Glock',
            price: 700,
            img: 'https://m.media-amazon.com/images/I/41tgcRK+sCL._UXNaN_FMjpg_QL85_.jpg'
        }
    ])

    return (
        <CartContainer className={open ? 'open' : ''}>
            <Layout onClick={() => onClose()}></Layout>
            <CartContent className={open ? 'open' : ''}>
                <CartContentContainer>
                    <WishlistAndCart>
                        <h3>Shopping Cart <span>4</span></h3>
                        <h3>Wishlist <span>2</span></h3>
                    </WishlistAndCart>
                    <CartProducts>
                        {products.map((item, index) => (
                            <CartProduct key={`cart-product${index}`} {...item} />
                        ))}
                    </CartProducts>
                
                    <CartSubtotal>
                        <span>Subtotal:</span>
                        <span>300$</span>
                    </CartSubtotal>
                    <CartFooter>
                        <CartStatus>
                            <img src={airplane} alt="airplane" />
                            <div>
                                <h5>Congratulations , you've got free shipping!</h5>
                                <div>
                                    <span><img src={shippingRange} alt="shippingRange" /></span>
                                </div>
                            </div>  
                        </CartStatus>
                            <div>
                                <button>Checkout</button>
                                <button>View Cart</button>
                            </div>
                    </CartFooter>
                </CartContentContainer>
            </CartContent>
        </CartContainer>
    )
}

export default Cart