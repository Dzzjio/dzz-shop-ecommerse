import styled from "styled-components";

export const WishListContainer = styled.div`
    width: 60vw;
    margin: 60px auto;
    display: flex;
    flex-direction: column;
`

export const WishListTitle = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid gray;

    & > p:last-child {
        width: 11vw;
    }
`

export const WishListContent = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    & > div {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid gray;
        align-items: center;
        padding: 15px 0;

        & > p {
            @media (max-width: 768px) {
                font-size: 13px;
            }
        }

        & > p:nth-child(2) {
            width: 20%;
            text-align: end;
        }

        & > p:nth-child(3) {
            width: 20%;
            text-align: center;
        }

        & > div {
            display: flex;
            align-items: center;
            gap: 20px;

            @media (max-width: 768px) {
                gap: 10px;
            }

            & > div {
                width: 25px;
                height: 25px;
                background-color: black;
                color: white;
                text-align: center;
                line-height: 1.65;
                border-radius: 15px;

                &: hover {
                    background-color: white;
                    color: black;
                }
            }

            & > img {
                width: 50px;
                height: 50px;
                border-radius: 10px;

                @media (max-width: 768px) {
                    width: 40px;
                    height: 40px;
                }
            }

            & > h3 {
                @media (max-width: 768px) {
                    font-size: 14px;
                }
            }
        }
    }

    button {
        background-color: black;
        color: white;
        padding: 5px 10px;
        border: 1px solid black;
        border-radius: 5px;
        
        &: hover {
            background-color: white;
            color: black;
        }

        @media (max-width: 1024px) {
            display: none;
        }
    }
`

export const AddCartIcon = styled.span`
    display: none;

    @media (max-width: 1024px) {
        display: block;
    }
`