import { Breakpoints } from "constantss";
import styled from "styled-components";

export const QuickViewContainer = styled.div`
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
export const QuickViewContent = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    max-width: 80%;
    height: 50vh;
    background-color: #fff;
    z-index: 112;
    border-radius: 20px;
    overflow: hidden;
    

    transition: all .3s ease-in-out;
    transition-delay: .1s;

    &.open {
        left: 50%;
        top: 30%;
        transform: translate(-50%);
    }

    @media (max-width: ${Breakpoints.tablet}) {
        right: -250px;
        width: 250px;
    }
`

export const QuickViewContentContainer = styled.div`
    display: flex;
    overflow: hidden;

    & > img {
        width: 50%;
        height: 348px;
        object-fit: cover;

        @media (max-width: ${Breakpoints.tablet}) {
            display: none;
        }
    }

    & > div {
        padding: 20px;

        & > p {
            background-color: black;
            display: inline-block;
            color: white;
            margin: 0;
            padding: 2px 5px;
            font-size: 12px;
            border-radius: 5px;
        }
        
        & > div {

            & > h4 {
                margin: 10px 0;
            }

            & > p {
                color: gray;
                font-size: 12px;
            }

            & > div {
                display: flex;
                align-items: center;
                justify-content: space-between;

                & > img {
                    width: 50px;
                }

                p {
                    font-size: 10px;
                    margin: 0;
                }
            }
        }
    }

    .middle-qw {
        border-bottom: 1px solid gray;
        & > div {
            display: flex;
            align-items: center;

            & > div {
                margin-bottom: 10px;

                .plus-minus {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 5px;

                    & > p {
                        border: 1px solid black;
                        border-radius: 20px;
                        width: 20px;
                        height: 20px;
                        text-align: center;
                        background-color: black;
                        color: white;
                        line-height: 2;
                        cursor: pointer;

                        &:hover {
                            background-color: white;
                            color: black;
                        }

                        &:nth-child(2) {
                            background-color: white;
                            color: black;

                            &:hover {
                                background-color: black;
                                color: white;
                            }
                        }
                    }
                } 

                span {
                    color: gray;
                    text-decoration: line-through;
                }

                & > p {
                    font-size: 18px;
                }
            }
        }
    }

    .buttons-qw {
        margin-bottom: 10px;

        & > button {
            background-color: black;
            border: 1px solid black;
            color: white;
            padding: 5px;
            border-radius: 6px;

            &:hover {
                background-color: white;
                color: black;
            }

            &:last-child {
                background-color: white;
                color: black;

                &:hover {
                    background-color: black;
                    color: white;
                }
            }
        }
    }

    .bottom-qw {

        p {
            color: black;
            font-size: 12px;
            margin: 6px 0;

            & > span {
                color: gray;

                & > div {
                    background-color: black;
                    border-radius: 20px;
                    width: 20px;
                    height: 20px;
                    text-align: center;
                    line-height: 2.2;

                    & > img {
                        object-fit: contain;
                        width: 14px;
                        height: 14px;
                    }
                }
            }
        } 
    }
`