import { FC } from "react"
import { Layout } from "../cart/styledCart"
import { QuickViewContainer, QuickViewContent, QuickViewContentContainer } from "./styled"
import RatingStars from '../../../assets/images/rating-stars.png'
import fb from '../../../assets/images/facecbook.png'
import instagram from '../../../assets/images/instagram.png'
import tw from '../../../assets/images/twitter.png'

interface IPropsMenu {
    open: boolean
    onClose: () => void
}

const QuickView: FC<IPropsMenu> = ( {open, onClose} ) => {
    return (
        <QuickViewContainer className={open ? 'open' : ''}>
            <Layout onClick={() => onClose()}></Layout>
            <QuickViewContent className={open ? 'open' : ''}>
                <QuickViewContentContainer>
                    <img src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="QuickViewImg" />
                    <div>
                        <p>SALE 20% OFF</p>
                        <div>
                            <h4>Cozy Knit Cardigan Sweater</h4>
                            <div>
                                <img src={RatingStars} alt="RatingStars" />
                                <p>3.2 Rating</p>
                                <p>(5 customer reviews)</p>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.</p>
                        </div>
                        <div className="middle-qw">
                            <div>
                                <div>
                                    <p>Price</p>
                                    <p style={{fontSize: '14px', marginTop: '5px'}}>$125 <span>$135</span></p>
                                </div>
                                <div>
                                    <p>Quantity</p>
                                    <div className="plus-minus">
                                        <p>-</p>
                                        <p>3</p>
                                        <p>+</p>
                                    </div>
                                </div>
                            </div>
                            <div className="buttons-qw">
                                <button>Add To Cart</button>
                                <button>Add To Wishlist</button>
                            </div>
                        </div>
                        <div className="bottom-qw">
                            <p>SKU: <span>PRT584E63A</span></p>
                            <p>Category: <span>Dresses, Jeans, Swimwear, Summer, Clothing</span></p>
                            <p style={{display: 'flex', gap: '20px'}}>Share: 
                                <span style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div><img src={fb} alt="fb-qw" /></div>
                                    <div><img src={instagram} alt="instagram-qw" /></div>
                                    <div><img src={tw} alt="tw-qw" /></div>
                                </span>
                            </p>
                        </div>
                    </div>
                </QuickViewContentContainer>
            </QuickViewContent>
        </QuickViewContainer>
    )
}

export default QuickView