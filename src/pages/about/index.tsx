import AboutContainer from "components/partials/about/aboutContainer";
import { StyledAboutPageContainer } from "./styled";
import HeaderBotYellow from "components/layout/headerBotYellow/headerBotY";
import asusROG from '../../assets/images/asus-rog-strix.jpg'

const AboutPage = () => {
    return (
        <>
            <HeaderBotYellow imgUrl={asusROG} />
            <StyledAboutPageContainer>
                <AboutContainer />
            </StyledAboutPageContainer>
        </>
    )
}

export default AboutPage;