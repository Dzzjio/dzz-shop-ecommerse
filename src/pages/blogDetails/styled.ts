import styled from "styled-components";

export const BlogDetailsPageContainer = styled.div`
`

export const StyledTopSection = styled.section`
    position: relative;
    top: 0;
    left:0;
    width: 100%;
    height: 40vh;

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