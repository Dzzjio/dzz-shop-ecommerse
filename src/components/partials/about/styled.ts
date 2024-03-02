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
`

export const StyledAboutContainerTopSectionLeft = styled.div`
    width: 630px;

    & > h3 {
        margin: 0;
        font-size: 35px;
        margin-right: 80px;
        margin: 0 80px 40px 0 ;
    }

    & > p {
        color: #3b3b3b;
        font-size: 17px;
        margin-right: 20px;
        margin-bottom: 30px;
    }
`

export const StyledAboutContainerTopSectionRight = styled.div`
    width: 630px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    & > div {
        width: 100%;
        display: flex;
        border-radius: 10px;
    }
`

export const StyledAboutContainerTopSectionRightFirstRow = styled.div`
    height: 261px;
    gap: 15px;
    overflow: hidden;

    & > div:first-child {
        width: 440px;
        border-radius: 10px;

        & > img {
            width: 440px;
            height: 261px;
            border-radius: 10px;
        }
    }

    & > div:last-child {
        width: 190px;
        display: flex;
        border-radius: 10px;
        background-color: gray;
    }

    & > div > img {
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
`

export const StyledAboutContainerTopSectionRightSecondRow = styled.div`
    height: 544px;
    
    & > img {
        border-radius: 10px;
        object-fit: cover;
        overflow: hidden;
    }
`

export const StyledAboutContainerTopSectionRightThirdRow = styled.div`
    height: 264px;
    border-radius: 10px;

    & > img {
        object-fit: cover;
        overflow: hidden;
        border-radius: 10px;
    }
`

export const StyledAboutContainerTopSectionRightStats = styled.div`
    margin-top: 20px;
    display: flex;

    & > div {
        margin-right: 50px;

        & > h3 {
            font-size: 60px;
            margin: 0;
            margin-top: 30px;
        }

        & > p {
            font-weight: bold;
        }
    }   
`

// mid section

export const StyledAboutContainerMidSection = styled.section`
    margin-top: 50px;
    width: 99.47vw;
    margin-left: calc((100% - 100vw) / 2);
    
    object-fit: cover;
    position: relative;

    & > img {
        width: 100%;
        height: 620px;
        display: block;
        margin: 0 auto;
    }
`;

export const StyledAboutContainerMidSectionContent = styled.div`
    position: absolute;
    width: 1260px;
    display: flex;
    justify-content: space-between;
    z-index: 20;
    top: 0;
    left: 50%;
    transform: translate(-50%);
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
`
export const StyledAboutContainerMidSectionContentRight = styled.div`
    width: 630px;
    box-sizing: border-box;

    & > h3 {
        font-size: 50px;
        margin-bottom: 25px;
    }

    & > div {
        background-color: white;
        height: 330px;
        padding: 30px;
        padding-bottom: 0px;
        border-radius: 20px;

        & > p {
            font-size: 20px;
        }

        & > div {
            display: flex;
            justify-content: space-between;
            align-items: center;

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
`

// bot section

export const StyledAboutContainerBotSection = styled.section`
    width: 100%;
    height: 230px;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledAboutContainerBotSectionLeft = styled.div`
    height: 80%;
    display: flex;
    max-width: 420px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & > h3 {
        font-size: 36px;
        margin: 0;
    }

    & > p {
        font-size: 20px;
        margin-top: 10px;
    }
`

export const StyledAboutContainerBotSectionRight = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;

    & > img {
        width : 190px;
        height: 100px;
        object-fit: cover;

        &:hover {
            transform: scale(1.1);
            transition: all .1s ease-in-out;
        }
    }
`