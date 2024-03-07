import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledBlogBox = styled.div`
    width: 40%;
    min-width: 300px;
    aspect-ratio: 8 / 9;
    border-radius: 20px;
    overflow: hidden;
    position: relative;

    & > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    & > div {
        position: absolute;
        width: 60%;
        bottom: 0;
        left: 0;
        background-color: black;
        z-index: 10;
        border-radius: 0 20px 0 0;
        padding: 30px;

        & > p {
            margin: 10px 0;
            font-size: 24px;

            @media (max-width: 480px) {
                font-size: 16px;
            }

        }

        & > div {
            background-color: #fff;
            display: inline-block;
            border-radius: 5px;

            & > p {
                font-size: 12px;
                font-weight: bold;
                color: #000;
                padding: 5px;
                margin: 0;
            }
        }

        & > * {
            color: white;
        }
    }
`

export const StyledReadMore = styled(Link)`
    text-decoration: none;
    font-size: 15px;

    &:hover {
        text-decoration: underline;
    }
`