import { StyledHeaderBotY } from "./styled";

const HeaderBotYellow = ({ imgUrl }: { imgUrl: string }) => {
    return (
        <StyledHeaderBotY>
            <img src={imgUrl} alt="ps5" />
        </StyledHeaderBotY>
    )
}

export default HeaderBotYellow;