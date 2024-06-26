import styled from "styled-components";

export const StyledHomePage = styled.div`
    position: relative;
    // width: 100%;

    & > div.most-popular-products {
        width: 80vw;
        margin: 20px     auto;

        & > div {
            display: flex;
            align-items: center;
            justify-content: space-between;

            & > h3 {
                font-size: 25px;
            }

            & > div.category-select-popular-products {
                border: 1px solid black;
                border-radius: 20px;
                padding: 5px;
                display: flex;
                gap: 10px;

                & > span {
                    cursor: pointer;
                    padding: 5px;
                    border-radius: 15px;
                    border: 1px solid transparent;

                    &:hover {
                        border: 1px solid black;
                        padding: 5px;
                    }

                    &:active {
                        background-color: black;
                        color: white;
                    }

                    &.active {
                        background-color: black;
                        color: white;
                    }
                }
            }
        }
    }
`

//First Section
export const StyledFirstSectionHome = styled.section`
    position: relative;
    margin-left: 10vw;
    display: flex;
    margin-top: 40px;
    margin-bottom: 40px;

    & > div.home-first-section-left {
        position: relative;
        width: 49%;

        & > img[alt="yelloStar"] {
            position: absolute;
            right: 10px;
            top: 10px;
            height: 70px;
            width: 70px;
        }

        & > img[alt="collectionsLogo"] {
            position: absolute;
            right: 100px;
            bottom: 100px;
            height: 100px;
            width: 100px;
        }
    
        & > h2 {
            font-size: 65px;
            margin: 10px 0;
        }

        & > div.first-section-price-and-size {
            display: flex;
            gap: 40px;

            & > div {

                & > p {
                    font-size: 16px;
                    font-weight: bold;
                }

                & > span {
                    font-size: 20px;
                    font-weight: bold;
                }

                & > div {
                    display: flex;
                    gap: 10px;

                    & > p {
                        margin: 0;
                        width: 30px;
                        height: 30px;
                        border: 1px solid black;
                        border-radius: 15px;
                        padding: 5px 10px;
                        
                        &:hover {
                            color: white;
                            background-color: black;
                        }
                    }
                }
            }
        }

        & > div.buttons {
            margin-top: 20px;
            display: flex;
            gap: 15px;

            & > button {
                border: 1px solid black;
                padding: 10px 20px;
                border-radius: 10px;
                font-weight: bold;
                cursor: pointer;

                &:hover {
                    color: white;
                    background-color: black;
                }

                &:last-child {
                    color: white;
                    background-color: black;

                    &:hover {
                        color: black;
                        background-color: white;
                    }
                }
            }
        }

        & > div.red-hot {
            display: flex;
            gap: 15px;
            align-items: center;
            margin-top: 50px;   

            & > div {
                display: flex;
                flex-direction: column;
                gap: 5px;

                & > h3 {
                    margin: 0;
                }
            }
        }
    }

    & > div.home-first-section-right {
        width: 49%;
    }
`

// Featured Seciton

export const StyledFeaturedSection = styled.section`
    width: 80vw;
    margin: 0 auto;

    & > div.featured-section-header {
        display: flex;
        justify-content: space-between;
        align-items: centet;

        & > * {
            margin: 10px 0;
        }

        & > h3 {
            font-size: 25px;
        }
    }

    & > div.featured-section-content {
        display: flex;
        gap: 10px;
        justify-content: space-between;

        & > div.featured-box {
            display: flex;
            align-items: center;
            border-radius: 10px;
            overflow: hidden;

            & > img {
                width: 50%;
                height: 100%;
                object-fit: cover;
            }

            & > div {
                flex: 1;
                height: 100%;
                padding: 20px;
                position: relative;

                & > p {
                    background-color: white;
                    display: inline;
                    padding: 2px 5px;
                    font-size: 13px;
                    font-weight: bold;
                    border-radius: 5px;
                }

                & > h4 {
                    font-size: 30px;
                }

                & > button {
                    padding: 10px;
                    border: 2px solid black;
                    border-radius: 20px;
                    position: absolute;
                    bottom: 20px;
                    background-color: transparent;
                    font-weight: bold;
                }
            }
        }
    }
`