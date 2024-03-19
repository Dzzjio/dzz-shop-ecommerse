// import ColorSidebar from "components/layout/colorSidebar/colorSidebar"
import PopularProducts from "components/partials/home/popularProducts"
import { Container } from "components/styled/container"
import { ShopContainer } from "./styled"
import ColorSidebar from "components/layout/colorSideBar/colorSideBar"
import HeaderBotYellow from "components/layout/headerBotYellow/headerBotY"
import { useState } from "react"
// import FilterModal from "components/ui/filter/filterModal"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFilter } from "@fortawesome/free-solid-svg-icons"
// import SearchModal from "components/ui/search/search"

// const [openFilter, setOpenFilter] = useState<boolean>(false)

// const setBodyFixed = () => {
//     document.body.classList.toggle('fixed')
// }

const Shop = () => {
    return (
        <>
            <HeaderBotYellow imgUrl={'https://media.wired.com/photos/5e9110887b575f0008effd4f/master/pass/Culture_ps5_49747503557_566da5ebc8_3k.jpg'} headingText={"SHOP"} />
            <Container>
                <ShopContainer>
                {/* <FontAwesomeIcon icon={faFilter} onClick={() => {setOpenFilter(true); setBodyFixed()}} /> */}
                <div className="row">
                    <ColorSidebar />
                    <div className="col-8">
                        <PopularProducts />
                    </div>
                </div>
                </ShopContainer>
            </Container>
            {/* <SearchModal open={openFilter} onClose={() => {setOpenFilter(false); setBodyFixed()}} /> */}
        </>
    )
}

export default Shop