import styled from "styled-components";

export const AuthContainer = styled.div`
    height: 100vh;
`

export const AuthContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1260px;
    margin: 50px auto;

    @media (max-width: 1250px) {
        justify-content: center;
    }
`

export const AuthContainerShared = styled.div`
    

    & > img {
        position: fixed;
        top: 0;
        left: 0;
        width: 50vw;
        z-index: -1;

        @media (max-width: 1250px) {
            display: none;
        }
    }
`

export const AuthContainerUnique = styled.div`
`

export const AuthContainerUniqueForm = styled.div`
    box-sizing: border-box;
    width: 510px;
    border: 1px solid #000;
    border-radius: 20px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h3 {
        font-size: 20px;
        font-weight: bold;
        margin: 0;
    }

    & > p {
        color: #3b3b3b;
        margin-bottom: 15px;
    }

    & > form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-bottom: 20px;

        & > div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            margin-bottom: 10px;

            & > input {
                box-sizing: border-box;
                width: 100%;
                padding: 8px;
                border: 1px solid #000;
                border-radius: 5px;
            }

            & > label {
                margin-bottom: 5px;
                font-weight: bold;
                font-size: 15px;
            }
        }
    }

    @media (max-width: 650px) {
        max-width: 400px;
        width: 100%;
        padding: 40px 30px;
    }
`

export const AuthContainerUniqueFormBtns = styled.div`
    width: 55%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    @media (max-width: 650px) {
        width: 100%;
    }

    &  button {
        background-color: black;
        color: white;
        border: 1px solid black;
        border-radius: 5px;
        padding: 10px 20px;
        font-weight: bold;
        transition: all .2s ease-in-out;
        cursor: pointer;

        &:last-child {
            color: black;
            background-color: white;

            &:hover {
                background-color: black;
                color: white;
            }
        }

        &:hover {
            color: black;
            background-color: white;
        }
    }
`

export const ForgotPassword = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: -35px;
    margin-bottom: 20px;

    & > * {
        cursor: pointer;
    }
`