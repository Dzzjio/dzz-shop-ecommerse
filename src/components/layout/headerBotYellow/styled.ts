import styled from "styled-components";
import headerImg from '../../../assets/images/yellow-header-img.png';

export const StyledHeaderBotY = styled.div`
    position: relative;
    height: 200px;

    background-image: url(${headerImg});
    background-size: 100% 100%;

    & > img {
        position: absolute;
        bottom: 0;
        right: 290px;
        width: 300px;
        height: 100%;
        object-fit: cover; 
    }
`;