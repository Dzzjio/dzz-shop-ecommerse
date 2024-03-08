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