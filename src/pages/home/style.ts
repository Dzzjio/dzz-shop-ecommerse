import styled from "styled-components";

export const StyledHomePage = styled.div`
    position: relative;
    // width: 100%;
`

//First Section
export const StyledFirstSectionHome = styled.section`
    position: relative;
    margin-left: 10vw;
    display: flex;



    & > div.home-first-section-left {
        position: relative;
        width: 50%;

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
        width: 50%;
    }
`