import { Breakpoints } from "constantss";
import styled from "styled-components";

export const StyledContactContainer = styled.div`
    position: relative;
    display: flex;
    max-width: 90vw;
    margin: 20px auto;
`

export const LeftStyledContactContainer = styled.div`
    max-width: 400px;

    @media (max-width: ${Breakpoints.tablet}) {
        margin: 20px auto;
    }

    & > p {
        margin-bottom: 30px;
    }

    & > div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;

        & > div > h4 {
            margin-bottom: 10px;
        }

        & > div > p {
            font-size: 13px;
            margin: 0;
        }
    }

    & > form {
        background-color: #000;
        padding: 20px;
        margin: 20px 0;
        border-radius: 15px;

        & > div > input, textarea, button {
            width: 100%;
            background-color: #000;
            border: 1px solid #fff;
            border-radius: 5px;
            color: #fff;
            padding: 5px;
            margin: 5px;
            box-sizing: border-box;
        }

        & > div > textarea {
            height: 100px !important;
        }

        & > div > label {
            font-size: 14px;
        }

        & > div > button {
            background-color: white;
            border: 1px solid #000;
            color: black;
            cursor: pointer;

            &:hover {
                background-color: black;
                border: 1px solid #fff;
                color: #fff;
            }
        }

        & > div > label {
            color: #fff;
        }
    }
`

export const RightStyledContactContainer = styled.div`
    max-width: 900px;
    position: absolute;
    right: 0;
    overflow: hidden;
    z-index: -1;

    & > img {
        width: 100%;
        height: auto;
        left: 0;
    }

    & > h2 {
        font-size: 100px;
        margin-left: 150px;
        font-weight: bold;
        color: transparent;
        -webkit-text-stroke: 1px #ccc;
        text-stroke: 1px #ccc;

        @media (max-width: ${Breakpoints.tabletland}) {
            display: none;
        }
    }

    & > .location-img {
        width: 20px;
        position: absolute;
        
        @media (max-width: ${Breakpoints.tabletland}) {
            display: none;
        }
    }

    & > .location-img-1 {
        top: 90px;
        left: 500px;
    }

    & > .location-img-2 {
        top: 90px;
        left: 100px;
    }

    & > .location-img-3 {
        top: 150px;
        left: 400px;
    }
`