import AboutContainer from "components/partials/about/aboutContainer";
import { StyledAboutPageContainer } from "./styled";
import HeaderBotYellow from "components/layout/headerBotYellow/headerBotY";

const AboutPage = () => {
    return (
        <>
            <HeaderBotYellow imgUrl={'https://media.wired.com/photos/5e9110887b575f0008effd4f/master/pass/Culture_ps5_49747503557_566da5ebc8_3k.jpg'} />
            <StyledAboutPageContainer>
                <AboutContainer />
            </StyledAboutPageContainer>
        </>
    )
}

export default AboutPage;