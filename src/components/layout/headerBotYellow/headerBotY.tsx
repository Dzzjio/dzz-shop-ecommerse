import { StyledHeaderBotY } from "./styled";
import headerImg from '../../../assets/images/yellow-header-img.png'

const HeaderBotYellow = () => {
    return (
        <StyledHeaderBotY>
            <img src={headerImg} alt="headerImg" />
        </StyledHeaderBotY>
    )
}

export default HeaderBotYellow;