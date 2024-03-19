import { StyledFirstSectionHome } from "./style"
import redHotLogo from '../../assets/images/red-hot-logo.png'
import yelloStar from '../../assets/images/home-page-yellow-star.png'
import collectionsLogo from '../../assets/images/explore-more-collection.png'

const FirstSectionHome = () => {
    return (
        <StyledFirstSectionHome>
            <div className="home-first-section-left">
                <img src={yelloStar} alt="yelloStar" />
                <img src={collectionsLogo} alt="collectionsLogo" />
                <h2>Make Your Fashion Look More Charming</h2>
                <div className="first-section-price-and-size">
                    <div>
                        <p>Price</p>
                        <span>$165</span>
                    </div>
                    <div>
                        <p>Select Size</p>
                        <div>
                            <p>L</p>
                            <p>M</p>
                            <p>S</p>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button>ADD TO CART</button>
                    <button>VIEW DETAILS</button>
                </div>
                <div className="red-hot">
                    <img src={redHotLogo} alt="redHotLogo" />
                    <div>
                        <h3>Summer Collection</h3>
                        <h4>Trendy and Classic for the New Season</h4>
                    </div>
                </div>
            </div>

            <div className="home-first-section-right">
                img
            </div>
        </StyledFirstSectionHome>
    )
}

export default FirstSectionHome