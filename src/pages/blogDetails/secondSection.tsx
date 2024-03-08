import { StyledSecondSection } from "./styled"
import quoteIMG from '../../assets/images/right-quote.png'
import productIMG from '../../assets/images/product-2.jpg'

const SecondSection = () => {
    return (
        <StyledSecondSection>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className="second-section-1-div">
                <p>Unlocking the Secrets of Sustainable Fashion: Eco-Friendly Choices for a Stylish and Responsible Wardrobe</p>
                <p>-Dzzjio</p>
                <img src={quoteIMG} alt="quote-IMG" />
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including.</p>
            <div className="second-section-2-div">
                <div>
                    <img src={productIMG} alt="productIMG-1" />
                    <img src={productIMG} alt="productIMG-2" />
                </div>
                <div>
                    <img src={productIMG} alt="productIMG-3" />
                    <img src={productIMG} alt="productIMG-4" />
                    <img src={productIMG} alt="productIMG-5" />
                </div>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including.</p>
        </StyledSecondSection>
    )
}

export default SecondSection