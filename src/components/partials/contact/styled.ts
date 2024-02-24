import styled from "styled-components";

export const StyledContactContainer = styled.div`
    position: relative;
    display: flex;
    width: 1260px;
    margin: 0 auto;
`

export const LeftStyledContactContainer = styled.div`
    width: 400px;

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
    width: 900px;
    position: absolute;
    right: -100px;

    & > img {
        width: 100%;
        height: auto;
        left: 0;
    }

    & > h2 {
        font-size: 100px;
        font-weight: bold;
        color: transparent;
        -webkit-text-stroke: 1px #ccc;
        text-stroke: 1px #ccc;
    }
`