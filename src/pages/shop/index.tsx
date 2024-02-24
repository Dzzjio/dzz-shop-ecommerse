// import ColorSidebar from "components/layout/colorSidebar/colorSidebar"
import PopularProducts from "components/partials/home/popularProducts"
import { Container } from "components/styled/container"
import { ShopConcainer } from "./styled"
import { Title } from "components/styled/title"
import ColorSidebar from "components/layout/colorSideBar/colorSideBar"
import HeaderBotYellow from "components/layout/headerBotYellow/headerBotY"

const Shop = () => {
    return (
        <>
            <HeaderBotYellow imgUrl={'https://media.wired.com/photos/5e9110887b575f0008effd4f/master/pass/Culture_ps5_49747503557_566da5ebc8_3k.jpg'} />
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
        </>
    )
}

export default Shop