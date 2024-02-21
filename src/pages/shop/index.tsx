// import ColorSidebar from "components/layout/colorSidebar/colorSidebar"
import PopularProducts from "components/partials/home/popularProducts"
import { Container } from "components/styled/container"
import { ShopConcainer } from "./styled"
import { Title } from "components/styled/title"
import ColorSidebar from "components/layout/colorSideBar/colorSideBar"

const Shop = () => {
    return (
        <Container>
            <ShopConcainer>
            <Title>Shop</Title>
            <div className="row">
                <ColorSidebar />
                <div className="col-8">
                    <PopularProducts />
                </div>
            </div>
            </ShopConcainer>
        </Container>
    )
}

export default Shop