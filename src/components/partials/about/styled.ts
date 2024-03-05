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

    @media (max-width: 1300px) {
        margin: 40px;
        flex-direction: column;
    }
    
`

export const StyledAboutContainerTopSectionLeft = styled.div`
    max-width: 630px;

    & > div {
        width: auto;
    }

    & > h3 {
        margin: 0;
        font-size: 35px;
        margin-right: 80px;
        margin: 0 80px 40px 0 ;

        @media ( max-width: 1300px) {
            font-size: 30px;
        }

        @media ( max-width: 600px) {
            margin-right: 0;
        }

    }

    & > p {
        color: #3b3b3b;
        font-size: 17px;
        margin-right: 20px;
        margin-bottom: 30px;

        @media ( max-width: 1300px) {
            font-size: 15px;
        }
                @media ( max-width: 600px) {
            margin-right: 0;
        }
    }

    @media (max-width: 1300px) {
        margin: 0 auto;
    }

    @media (max-width: 700px) {
        width: auto;
    }
`

export const StyledAboutContainerTopSectionRight = styled.div`
    max-width: 630px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    & > div {
        width: 100%;
        display: flex;
        border-radius: 10px;
    }    

    @media (max-width: 1300px) {
        margin: 0 auto;
    }
    @media (max-width: 530px) {
        display: none;
    }
`

export const StyledAboutContainerTopSectionRightFirstRow = styled.div`
    height: 261px;
    gap: 15px;
    overflow: hidden;

    @media ( max-width: 1300px) {
        height: 200px;
        width: 100%;
    }



    & > div:first-child {
        width: 440px;
        border-radius: 10px;

        & > img {
            width: 100%;
            height: auto;
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

    @media ( max-width: 1300px) {
        height: 300px;
        width: auto;
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

    @media ( max-width: 1300px) {
        height: 200px;
        width: auto;
    }
`

export const StyledAboutContainerTopSectionRightStats = styled.div`
    margin-top: 20px;
    display: flex;
    width: auto;

    & > div {
        margin-right: 50px;

        @media (max-width: 450px) {
            margin-right: 15px;
        }

        & > h3 {
            font-size: 60px;
            margin: 0;
            margin-top: 30px;

            @media (max-width: 450px) {
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
    width: 99.4vw;
    margin-left: calc((100% - 100vw) / 2);
    
    object-fit: cover;
    position: relative;

    & > img {
        width: 100%;
        height: 620px;
        display: block;
        margin: 0 auto;

        @media ( max-width: 900px) {
            opacity: 0;
            width: 1px;
        }
    }

    @media (max-width: 1450px) {
        width: 99vw
    }

    @media (max-width: 900px) {
        width: 97vw
    }
`;

export const StyledAboutContainerMidSectionContent = styled.div`
    position: absolute;
    width: 100%;
    max-width: 1260px;
    display: flex;
    justify-content: space-between;
    z-index: 20;
    top: 0;
    left: 50%;
    transform: translate(-50%);

    @media (max-width: 700px) {
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
    

    @media ( max-width: 900px) {
        width: auto;
        border: 3px solid #ffedd4;
        border-radius: 15px;
        padding: 20px;
    }

    & > h3 {
        font-size: 50px;
        margin-bottom: 25px;

        @media ( max-width: 900px) {
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

        @media (max-width: 700px) {
            padding: 10px;
        }

        & > p {
            font-size: 20px;

            @media ( max-width: 900px) {
                font-size: 16px;
            }
        }

        & > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            @media( max-width: 500px) {
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

    @media (max-width: 900px) {
        margin-left: 35px;
        margin-right: 30px;
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

    @media (max-width: 1300px) {
        width: 90%;
        margin: 0 auto;
        margin-top: 50px;
    }

    @media (max-width: 950px) {
        height: auto;
        flex-direction: column;
    }
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

        @media (max-width: 700px) {
            font-size: 25px;
        }

        @media (max-width: 400px) {
            margin-top: 80px;
        }
        @media (max-width: 350px) {
            margin-top: 100px;
        }
    }

    & > p {
        font-size: 20px;
        margin-top: 10px;
    }

    @media (max-width: 700px) {
        height: auto;
    }
`

export const StyledAboutContainerBotSectionRight = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;

    @media (max-width: 900px) {
        max-width: 420px;
        justify-content: space-between;
    }

    & > img {
        width : 190px;
        height: 100px;
        object-fit: cover;

        @media (max-width: 1300px) {
            width: 150px;
            height: 80px;
        }

        @media (max-width: 700px) {
            width: 100px;
            height: 50px;
        }

        &:hover {
            transform: scale(1.1);
            transition: all .1s ease-in-out;
        }
    }
`