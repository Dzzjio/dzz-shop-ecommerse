import styled from "styled-components";

export const StyledPopularProductBox = styled.div`
    position: relative;
    width: 300px;
`

export const StyledPopularProductBoxInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    & > p {
        font-weight: bold;
        font-size: 15px;
    }
`

export const StyledPopularProductBoxIconDiv = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > div {
        background-color: #222;
        color: white;
        padding: 8px 10px;
        border-radius: 20px;

        & > svg {
            width: 16px;
            height: 16px;
        }
    }
`

export const Sale = styled.div`
    margin: 0;
    font-weight: bold;
    font-size: 13px;
    padding: 5px;
    background-color: white;
    position: absolute;
    left: 10px;
    top: 10px;
    border-radius: 15px
`

export const New = styled.div`
    margin: 0;
    font-weight: bold;
    font-size: 13px;
    padding: 5px;
    background-color: #000;
    color: #fff;
    position: absolute;
    left: 10px;
    top: 10px;
    border-radius: 15px
`

export const StyledPopularProductBoxBtn = styled.button`
    // display: none;
    position: absolute;
    background-color: black;
    color: white;
    width: 170px;
    padding: 10px;
    top: 365px;
    left: 50%;
    transform: translate(-50%);
    margin: 0 auto;
    border: 3px solid #fff;
    border-radius: 100px;
    transition: opacity 0.3s ease;

    &::hover {
        display: block;
    }
`