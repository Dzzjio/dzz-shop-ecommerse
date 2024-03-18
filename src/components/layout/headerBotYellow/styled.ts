import styled from "styled-components";
import headerImg from '../../../assets/images/yellow-header-img.png';
import { Breakpoints } from "constantss";

export const StyledHeaderBotY = styled.div`
    position: relative;
    height: 200px;
    display: flex;
    gap: 20px;

    background-image: url(${headerImg});
    background-size: 100% 100%;

    @media (max-width: ${Breakpoints.tablet}) {
        display: none;
    }

    & > img {
        position: absolute;
        bottom: 0;
        right: 290px;
        width: 300px;
        height: 100%;
        object-fit: cover; 
    }

    & > h3 {
        position: absolute;
        top: 30%;
        margin-left: 80px;
        height: 100%;
        font-size: 30px;
    }
`;