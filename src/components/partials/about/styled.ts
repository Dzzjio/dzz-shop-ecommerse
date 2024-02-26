import styled from "styled-components";

export const StyledAboutContainer = styled.div`
    margin: 50px auto;
`

export const StyledAboutContainerTopSection = styled.section`
    display: flex;
`

export const StyledAboutContainerTopSectionLeft = styled.div`
    width: 630px;

    & > h3 {
        margin: 0;
        font-size: 35px;
        margin-right: 80px;
    }

    & > p {
        color: #3b3b3b;
        font-size: 17px;
        margin-right: 20px;
    }

    & > div  {
        display: flex;
        align-items: center;
        margin-top: 20px;

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
        }
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
        display: flex;
        border-radius: 10px;
        background-color: gray;
    }

    & > div:last-child {
        width: 190px;
        display: flex;
        border-radius: 10px;
        background-color: gray;
    }
`

export const StyledAboutContainerTopSectionRightSecondRow = styled.div`
    height: 544px;
    background-color: gray;
`

export const StyledAboutContainerTopSectionRightThirdRow = styled.div`
    height: 264px;
    background-color: gray;
`

export const StyledAboutContainerTopSectionRightStats = styled.div`
    margin-top: 20px;

    & > div {
        margin-right: 50px;

        & > h3 {
            font-size: 50px;
        }

        & > p {
            font-weight: bold;
        }
    }

    
`