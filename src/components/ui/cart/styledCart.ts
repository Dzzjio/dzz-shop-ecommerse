import styled from "styled-components";

//cart styles

export const CartContainer = styled.div`
    position: fixed;
    right: 0;
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

export const CartContentContainer = styled.div`
    padding: 35px 35px;
    height: calc(100vh - 70px);
    width: 430px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 700px) {
        width: 250px;
    }
`

export const WishlistAndCart = styled.div`
    width: 100%;
    border-bottom: 3px solid #000;
    margin-bottom: 5px;
    padding-bottom: 10px;

    display: flex;
    justify-content: space-between;

    & > h3 {
        margin: 0;
        padding: 5px;
        
        & > span {
            display: inline-block;
            box-sizing: border-box;
            text-align: center;
            width: 25px;
            height: 25px;
            border-radius: 13px;
            border: 1px solid #000;
        }
    }
`

export const Layout = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .8);
    z-index: 111;
    cursor: pointer;
`

export const CartContent = styled.div`
    position: absolute;
    right: -500px;
    top: 0;
    width: 500px;
    height: 100vh;
    background-color: #fff;
    z-index: 112;

    transition: right .3s ease-in-out;
    transition-delay: .1s;

    &.open {
        right: 0;
    }

    @media (max-width: 700px) {
        width: 350px;
    }
`

export const CartProducts = styled.div`

`

export const CartSubtotal = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    font-weight: bold;
`

export const CartStatus = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & > h5 {
            margin: 0;
        }
    }
`

export const CartFooter = styled.div`
    margin-top: auto;

    & > div > button {
        width: 100%;
        height: 50px;
        margin: 5px auto;
        border: 1px solid #000;
        border-radius: 5px;
        color: #000;
        background-color: #fff;
        cursor: pointer;

        &:last-child {
            color: #fff;
            background-color: #000;
        }

        &:hover {
            color: #fff;
            background-color: #000;
        }

        &:last-child:hover {
            color: #000;
            background-color: #fff;
        }
    }
`

// cart product styles

export const CartProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
    gap: 20px;
    text-align: start;

    & > img {
        width: 80px;
        height: 80px;
        object-fit: cover;
    }

    & > div {
        display: flex;
        
        flex-direction: column;
        align-items: start;
        width: 170px;

        & > h3 {
            margin: 0;
        }

        & > div {
            display: flex;
            align-items: center;
            gap: 10px;

            & > button {
                background-color: #000;
                color: #fff;
                font-size: 15px;
                height: 30px;
                width: 30px;
                border-radius: 15px;
                border: 1px solid black;
                cursor: pointer;
        
                &:hover {
                    background-color: #fff;
                    color: #000;
                }
            }
    
            & > span {
                box-sizing: border-box;
                display: block;
                height: 30px;
                width: 30px;
                background-color: #fff;
                color: #000;
                font-size: 15px;
                border-radius: 15px;
                border: 1px solid black;
                text-align: center;
                line-height: 2;
            }
        }
    }
`