import styled from "styled-components";

interface ErrorPageContentProps {
    isBlackBackground: boolean;
}

export const ErrorPageContainer = styled.section`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 20;
    background: linear-gradient(to right, white 50%, black 50%);

    &.white-background {
        background: linear-gradient(to right, black 50%, white 50%);
    }

    & > img {
        z-index: 21;
        position: absolute;
        top: 0;
        right: 0;
        filter: invert(100%);
    }
`

export const ErrorPageContent = styled.section<ErrorPageContentProps>`
    max-width: 1260px;
    padding: 0 20px;
    margin: 0 auto;
    position: relative;
    color: ${props => props.isBlackBackground ? 'black' : 'white'};
    display: flex;
    justify-content: space-between;

    & > h2 {
        position: absolute;
        background: linear-gradient(to bottom, black 50%, white 50%);
        font-size: 200px;
        left: 50%;
        transform: translate(-50%) rotate(90deg);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media(max-width: 800px) {
            font-size: 100px;
        }
    }
`

export const ErrorPageContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > img{
        margin-top: 50px;
        width: 144px;
        height: 44px;

        @media(max-width: 800px) {
            width: 100px;
            height: auto;
        }
    }
`

export const ErrorPageContentRight = styled.div`
    padding: 200px 0;
    
    & > h3 {
        font-size: 80px;
        margin: 0;

        @media(max-width: 800px) {
            font-size: 30px;
            margin-top: 50px;
        }

        @media(max-width: 500px) {
            font-size: 20px;
            margin-top: 35px;
        }
    }

    & > p {
        font-size: 20px;
        margin-bottom: 40px;

        @media(max-width: 800px) {
            font-size: 15px;
        }

        @media(max-width: 500px) {
            font-size: 10px;
        }
    }

    & > a {
        background-color: black;
        color: white;
        text-decoration: none;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid black;
        cursor: pointer;

        &:hover {
            background-color: white;
            color: black;
            border: 1px solid black;
        }

        @media(max-width: 800px) {
            padding: 8px;
            font-size: 13px;
        }
    }
`

export const SocMedias = styled.div`
    display: flex;
    gap: 10px;

    & > div {
        border: 1px solid #fff;
        text-align: center;
        line-height: 2.1;
        border-radius: 15px;
        width: 30px;
        height: 30px;
        cursor: pointer;

        & > img {
            width: 15px;
            height: 15px;
            object-fit: contain;
        }

        @media(max-width: 500px) {
            line-height: 1.8;
            border-radius: 15px;
            width: 25px;
            height: 25px;
        }
    }
`