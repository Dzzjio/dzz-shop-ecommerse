import { StyledHeaderBotY } from "./styled";

const HeaderBotYellow = ({ imgUrl, headingText }: { imgUrl: string; headingText: string }) => {
    return (
        <StyledHeaderBotY>
            <h3>{headingText}</h3>
            <img src={imgUrl} alt="ps5" />
        </StyledHeaderBotY>
    )
}

export default HeaderBotYellow;