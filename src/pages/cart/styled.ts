import { Breakpoints } from "constantss";
import styled from "styled-components";

export const CartPageContainer = styled.section`
    width: 90vw;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${Breakpoints.tablet}) {
        flex-direction: column;
    } 
`

export const CartPageLeft = styled.div`
    width: 66%;

    @media (max-width: ${Breakpoints.tablet}) {
        order: 12;
        width: 90%;
        margin: 0 auto;
    }

    & > div {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 30px;

        & > p {
            width: 60%;
            display: flex;
            justify-content: space-between;
            border: 1px solid black;
            padding: 10px;
            border-radius: 10px;
            margin: 0;

            & > input {
                border: none;
                height: 100%;
                width: 70%;
            
                &:focus {
                    border-bottom: transparent;
                    outline: none;
                }
            }
        }

        & > button {
            border-radius: 10px;
            border: 1px solid black;
            background-color: black;
            color: white;
            padding: 0 20px;

            &:hover {
                background-color: white;
                color: black;
            }
        }
    }
`

export const CartPageRight = styled.div`
    width: 33%;
    border: 1px solid black;
    border-radius: 10px;
    padding: 20px;
    height: max-content;

    @media (max-width: ${Breakpoints.tablet}) {
        order: 1;
        width: 90%;
        margin: 50px auto;
    } 
`

export const CartPageRightHeader = styled.div`

    & > div {
        border: 1px solid black;
        border-radius: 10px;
        margin: 10px 0;
        padding: 10px;
        display: flex;
        gap: 10px;

        & > * {
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        & > div > * {
            margin: 0;
        }

        & > img {
            object-fit: contain;
        }
`

export const CartPageRightFooter = styled.div`
    margin-top: 20px;   

    & > div:first-child {
        display: flex;
        gap: 10px;
    }

    & > div:nth-child(2) {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > h4 {
            font-size: 20px;
        }
    }

    button {
        background-color: black;
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid black;
        color: white;
        font-weight: bold;
        cursor: pointer;

        &:hover {
            color: black;
            background-color: white;
        }
    }
`