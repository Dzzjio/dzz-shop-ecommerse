import styled from "styled-components";

export const SearchModalContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 110;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
    transition: all .3s ease-in-out;

    &.open {
        opacity: 1;
        pointer-events: all;
    }
`

export const SearchModalContent = styled.div`
    position: absolute;
    top: -350px;
    left: 0;
    height: 350px;
    width: 100vw;
    background-color: #fff;
    z-index: 112;

    transition: top .3s ease-in-out;
    transition-delay: .1s;

    &.open {
        top: 0;
    }
`

export const SearchModalContentContainer = styled.div`
    box-sizing: border-box;
    padding: 35px 0;
    height: 350px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const SearchModalTop = styled.div`

    & > div:first-child {
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid black;
        padding-bottom: 10px;

        & > div:first-child {
            width: 15%;
            display: flex;
            justify-content: space-between;
        }

        & > div:last-child {
            width: 75%;
            display: flex;
            justify-content: space-between;
        }
    }

    & > div:last-child {
        display: flex;
        gap: 10px;

        & > p {
            margin-top: 10px;
            font-size: 14px;
            cursor: pointer;
        }
    }
`

export const SearchModalBot = styled.div`
    div {
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }
`

export const VerticalLine = styled.div`
    height: 100%;
    width: 2px;
    background-color: #ccc;
`

export const SearchProduct = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0;

    img {
        width: 120px;
        height: 120px;
        border-radius: 15px;
    }

    p {
        margin: 0;
    }
`