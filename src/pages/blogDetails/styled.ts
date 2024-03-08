import styled from "styled-components";

export const BlogDetailsPageContainer = styled.div`
`

export const StyledTopSection = styled.section`
    position: relative;
    top: 0;
    left:0;
    width: 100%;

    & > div > img {
        width: 100%;
        object-fit: cover;
    }

    & > div > div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        & > h3 {
            font-size: 40px;
            font-weight: 100;
            margin: 0;
        }

        & > div {
            display: flex;
            align-items: center;
            gap: 20px;

            & > p:first-child {
                background-color: black;
                color: white;
                border-radius: 5px;
                padding: 5px;
                font-size: 13px;
            }
        }
    }
`

export const StyledSecondSection = styled.section`
    width: 50%;
    margin: 50px auto;

    & > div.second-section-1-div {
        position: relative;
        margin: 20px 0;
        padding: 10px;
        border: 1px solid black;
        border-radius: 10px;

        & > img {
            position: absolute;
            right: 10px;
            bottom: 10px;
        }
    }

    & > div.second-section-2-div {
        width: 120%;
        margin-left: -10%;
        display: flex;
        flex-direction: column;
        gap: 20px;

        img {
            border-radius: 10px;
        }

        & > div:first-child {
            width: 100%;
            display: flex;
            justify-content: space-between;

            & > img {
                width: 48%;
            }
        }

        & > div:last-child {
            width: 100%;
            display: flex;
            justify-content: space-between;

            & > img {
                width: 31%;
            }
        }
    }
`

export const StyledThirdSection = styled.section`
position: relative;
    top: 0;
    left:0;
    width: 100%;

    & > img {
        width: 100%;
        object-fit: cover;
    }
`

export const StyledForthSection = styled.section`
    width: 50%;
    margin: 0 auto;

    & > div.forth-section-1-div {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        & > div {
            display: flex;
            align-items: center;
            width: 49%;
            gap: 10px;

            & > span {
                border: 1px solid black;
                padding: 10px;
                border-radius: 20px;
                line-height: .1;

                & > svg {
                    width: 15px;
                    height: 15px;
                }
            }

            & > p {
                font-size: 14px;
                font-weight: bold;
            }
        }
    }

    & > div.forth-section-2-div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;

        & > div:first-child {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        & > div:last-child {
            display: flex;
            align-items: center;
            gap: 15px;

            & > div {
                width: 30px;
                height: 30px;
                background-color: black;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 15px;

                & > img {
                    width: 15px;
                    height: 15px;
                    object-fit: contain;
                }
            }
        }
    }

    & > div.comments {

        h4 {
            margin: 0;
        }

        p {
            margin: 10px 0;
        }

        button {
            background-color: black;
            border: 1px solid black;
            color: white;
            border-radius: 10px;
            padding: 5px 15px;
            cursor: pointer;
            font-weight: bold;

            &:hover {
                background-color: white;
                border: 1px solid black;
                color: black;
            }
        }

        & > div {
            display: flex;
            align-items: center;
            margin-top: 20px;
            gap: 20px;
            border-bottom: 1px solid #ccc;

            & > img {
                width: 60px;
                height: 60px;
                border-radius: 30px;
                object-fit: cover;
            }

            & > div {


                & > div {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
            }
        }
    }

    div.good-comments {

    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 50px;

        & > div {
            display: flex;
            justify-content: space-between;
            gap: 10%;

            & > input {
                width: 47%;
                height: 4vh;
                border-radius: 5px;
                border: 1px solid #000;
                padding: 5px;

                &::placeholder {
                    color: gray;
                    padding: 5px;
                }
            }

        }   
        & > textarea {
            max-width: 100%;
            height: 12vh;
            border-radius: 5px;
            border: 1px solid #000;

            &::placeholder {
                color: gray;
                padding: 5px;
            }
        }

        button {
            width: 15%;
            background-color: black;
            color: white;
            padding: 8px 0;
            font-weight: bold;
            border-radius: 9px;


            &:hover {
                background-color: white;
                color: black;
            }
        }
    }
`