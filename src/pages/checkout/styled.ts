import { Breakpoints } from "constantss";
import styled from "styled-components";

export const CheckoutPageContainer = styled.section`
    width: 90vw;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${Breakpoints.tablet}) {
        flex-direction: column;
    }   
`

export const CheckoutPageContainerLeft = styled.form`
    width: 66%;

    @media (max-width: ${Breakpoints.tablet}) {
        order: 12;
        width: 90%;
        margin: 0 auto;
    } 

    & > input {
        width: 100%;
        padding: 10px 20px;
        border-radius: 8px;
        border: 1px solid black;
        margin-bottom: 15px;
        margin-top: 5px;
    }

    & > div:first-child {
        width: 100%;
        display: flex;
        justify-content: space-between;

        & > div {
            width: 48%;

            input {
                width: 100%;
                padding: 10px 20px;
                border-radius: 8px;
                border: 1px solid black;
                margin-bottom: 15px;
                margin-top: 5px;
            }
        }
    }

    .left-checkboxes {
        display: flex;
        flex-direction: column;

        & > div {
            display: flex;
            align-items: center;

            & > p {
                margin: 10px 0;
            }
        }
    }

    textarea {
        max-width: 100%;
        border-radius: 10px;
        margin-top: 25px;
        min-height: 100px;
        border: 1px solid black;

        &::placeholder {
            padding: 10px;
        }
    }
`

export const CheckoutPageContainerRight = styled.div`
    width: 32%;
    height: fit-content;
    border: 1px solid black;
    border-radius: 10px;
    padding: 20px;

    @media (max-width: ${Breakpoints.tablet}) {
        order: 1;
        width: 90%;
        margin: 50px auto;
    } 

    & > div.checkout-ordered-items {
        

        & > div.checkout-ordered-item {
            border-bottom: 1px solid #ccc;
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;

            & > div {
                display: flex;
                gap: 10px;

                & > img {
                    border-radius: 10px;
                    width: 50px;
                    height: 50px;
                    object-fit: cover;
                }
            }   
        }    
    }

    div.subtotal {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;

        & > h5 {
            font-size: 17px;
            margin: 10px 0;
        }
    }

    div.shipping {
        display: flex;
        flex-direction: column;

        & > h5 {
            margin: 10px 0;
        }

        p {
            margin: 10px 0;
        }

        & > div {
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid #ccc;

            & > div {
                display: flex;

                input[type="radio"] {
                    background-color: red;
                  }

                & > span {
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                }
            }
        }

        & > div:last-child {
            display: flex;  
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            border: none;

            & > h5:last-child {
                font-size: 20px;
            }
        }
    }

    div.payment-methods {
        border-bottom: 1px solid #ccc;
        
        & > div {
            display: flex;

            & > p {
                margin: 10px 0;
            }

            & > div:last-child {
                display: flex;
                align-items: center;
            }
        }
    }

    div.checkout-footer {

        & > div {
            display: flex;
            gap: 10px;
        }

        & > button {
            width: 100%;
            background-color: black;
            color: white;
            padding: 10px 0;
            border: 1px solid black;
            border-radius: 10px;
            font-weight: bold;

            &:hover {
                color: black;
                background-color: white;
            }
        }
    }
`