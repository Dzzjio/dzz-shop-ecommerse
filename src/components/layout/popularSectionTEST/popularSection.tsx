import PopularProductBox from "../popularBox/popularBox";
import { StyledPopularSection, StyledPopularSectionBot, StyledPopularSectionTop } from "./styled";

const PopularSection = () => {
    return (
        <StyledPopularSection>
            <StyledPopularSectionTop>
                <h2>Most Popular Products</h2>
                <div>
                    <ul>
                        <li>Chairs</li>
                        <li>Sofas</li>
                        <li>Decor</li>
                        <li>Lighting</li>
                        <li>Tables</li>
                    </ul>
                </div>
            </StyledPopularSectionTop>

            <StyledPopularSectionBot>
                <PopularProductBox productName="Bluebell Hand Block Tiered Dress" price="80$" sale={true} newItem={false} />
                <PopularProductBox productName="Another one" price="9.99$" sale={false} newItem={true} />
                <PopularProductBox productName="nokia wilifon" price="10.99$" sale={false} newItem={false} />
                <PopularProductBox productName="Bluebell Hand Block Tiered Dress" price="80$" sale={true} newItem={false} />
                <PopularProductBox productName="Another one" price="9.99$" sale={false} newItem={true} />
                <PopularProductBox productName="nokia wilifon" price="10.99$" sale={false} newItem={false} />
                <PopularProductBox productName="Another one" price="9.99$" sale={false} newItem={true} />
                <PopularProductBox productName="nokia wilifon" price="10.99$" sale={false} newItem={false} />
                <PopularProductBox productName="nokia wilifon" price="10.99$" sale={false} newItem={false} />
            </StyledPopularSectionBot>
        </StyledPopularSection>
    )
}

export default PopularSection;