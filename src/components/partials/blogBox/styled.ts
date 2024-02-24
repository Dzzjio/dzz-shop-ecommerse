import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledBlogBox = styled.div`
    width: 350px;
    height: 350px;
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
        height: 33%;
        bottom: 0;
        left: 0;
        background-color: black;
        z-index: 10;
        border-radius: 0 20px 0 0;
        padding: 20px;

        & > p {
            margin: 8px 0;
        }

        & > div {
            background-color: #fff;
            display: inline-block;
            border-radius: 5px;

            & > p {
                font-size: 10px;
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
    font-size: 12px;
`