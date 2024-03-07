import { Breakpoints } from "constantss";
import styled from "styled-components";

export const StyledUserStory = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin: 40px 0;

    & > div > * {
        margin: 0;
    }

    & > div > h5 {
        font-size: 18px;
    }

    & > div > p {
        font-size: 14px;
    }

    & > img {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        margin-right: 20px;
        object-fit: cover;
    }
`

// top section

export const StyledAboutContainer = styled.div`
    margin: 50px auto;
`

export const StyledAboutContainerTopSection = styled.section`
    display: flex;
    gap: 20px;
    width: 100%;

    @media (max-width: ${Breakpoints.tabletland}) {
        margin: 40px auto;
        flex-direction: column;
    }
    
`

export const StyledAboutContainerTopSectionLeft = styled.div`
    max-width: 48%;
    margin: 0 auto;

    & > div {
        width: auto;
    }

    & > h3 {
        font-size: 35px;
        margin: 0 0 40px 0 ;
    }

    & > p {
        color: #3b3b3b;
        font-size: 17px;
    }

    @media (max-width: ${Breakpoints.tabletland}) {
        max-width: 70%;
    }
`

export const StyledAboutContainerTopSectionRight = styled.div`
    max-width: 48%;
    display: flex;
    height: auto;
    flex-direction: column;
    gap: 15px;
    margin: 0 auto;

    & > div {
        width: 100%;
        display: flex;
        border-radius: 10px;
    }

    @media (max-width: ${Breakpoints.tabletland}) {
        max-width: 70%;
    }
    
    @media (max-width: ${Breakpoints.mobile}) {
        display: none;
    }
`

export const StyledAboutContainerTopSectionRightFirstRow = styled.div`
    width: 100%;
    height: 20%;
    gap: 15px;

    & > div > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
`

export const StyledAboutContainerTopSectionRightSecondRow = styled.div`
    height: 30%;
    width: auto;
    
    & > img {
        border-radius: 10px;
        width: 100%;
        object-fit: cover;
        overflow: hidden;
    }
`

export const StyledAboutContainerTopSectionRightThirdRow = styled.div`
    height: 20%;
    border-radius: 10px;

    & > img {
        width: 100%;
        object-fit: cover;
        overflow: hidden;
        border-radius: 10px;
    }
`

export const StyledAboutContainerTopSectionRightStats = styled.div`
    margin-top: 20px;
    display: flex;
    width: auto;

    & > div {
        margin-right: 50px;

        @media (max-width: ${Breakpoints.mobile}) {
            margin-right: 15px;
        }

        & > h3 {
            font-size: 60px;
            margin: 0;
            margin-top: 30px;

            @media (max-width: ${Breakpoints.mobile}) {
                font-size: 50px;
            }
        }

        & > p {
            font-weight: bold;
        }
    }   
`

// mid section

export const StyledAboutContainerMidSection = styled.section`
    margin-top: 50px;
    width: 99.3vw;
    margin-left: calc((100% - 100vw) / 2);
    
    object-fit: cover;
    position: relative;

    & > img {
        width: 100%;
        height: 620px;
        display: block;
        margin: 0 auto;

        @media ( max-width: ${Breakpoints.tablet}) {
            opacity: 0;
            width: 1px;
        }
    }

    @media (max-width: 1450px) {
        width: 99vw
    }

    @media (max-width: ${Breakpoints.tablet}) {
        width: 97vw
    }
`;

export const StyledAboutContainerMidSectionContent = styled.div`
    position: absolute;
    width: 90%;
    display: flex;
    justify-content: space-between;
    z-index: 20;
    top: 0;
    left: 50%;
    transform: translate(-50%);

    @media (max-width: ${Breakpoints.tablet}) {
        padding-bottom: 40px;
    }

`

export const StyledAboutContainerMidSectionContentLeft = styled.div`
    position: relative;

    & > div {
        position: absolute;
        bottom: -71.5px;

        & > img {
            width: 514px;
            height: 679px;
            object-fit: cover;
        }
    }

    
    @media (max-width: 1350px) {
        display: none;   
    }
`
export const StyledAboutContainerMidSectionContentRight = styled.div`
    width: 630px;
    

    @media ( max-width: ${Breakpoints.tablet}) {
        width: auto;
        border: 3px solid #ffedd4;
        border-radius: 15px;
        padding: 20px;
    }

    & > h3 {
        font-size: 50px;
        margin-bottom: 25px;

        @media ( max-width: ${Breakpoints.tablet}) {
            font-size: 30px;
            margin: bottom: 0px;
        }
    }

    & > div {
        background-color: white;
        height: auto;
        width: auto;
        padding: 30px;
        padding-bottom: 0px;
        border-radius: 20px;

        @media (max-width: ${Breakpoints.tablet}) {
            padding: 10px;
        }

        & > p {
            font-size: 20px;

            @media ( max-width: ${Breakpoints.tablet}) {
                font-size: 16px;
            }
        }

        & > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            @media( max-width: ${Breakpoints.mobile}) {
                flex-direction: column;
            }

            & > div > span {
                background-color: #ffedd4;
                padding: 10px;
                border-radius: 20px;
                margin: 5px;
                cursor: pointer;

                &:hover {
                    background-color: black;
                    color: white;
                }

                &:active {
                    background-color: white;
                    color: black;
                }
            }
        }
    }

    @media (max-width: 1350px) {
        margin: 0 auto;
    }

    @media (max-width: ${Breakpoints.tablet}) {
        margin-left: 35px;
        margin-right: 30px;
    }
`

// bot section

export const StyledAboutContainerBotSection = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    @media (max-width: ${Breakpoints.tablet}) {
        width: 90%;
        margin: 0 auto;
        flex-direction: column;
    }
`

export const StyledAboutContainerBotSectionLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;

    & > h3 {
        font-size: 36px;
        margin: 15px 0 0 0;
    }

    & > p {
        font-size: 20px;
        margin-top: 10px;
    }
`

export const StyledAboutContainerBotSectionRight = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;

    & > img {
        width: 190px;
        height: 100px;
        object-fit: cover;

        &:hover {
            transform: scale(1.1);
            transition: all .1s ease-in-out;
        }
    }
`