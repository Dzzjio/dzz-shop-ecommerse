import styled from "styled-components";

export const StyledBlogPage = styled.div`
    width: 1260px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;

    & > button {
        width: 130px;
        color: #fff;
        border: 1px solid black;
        border-radius: 10px;
        background-color: #000;
        margin: 30px auto;
        padding: 10px 15px;
        transition: all .1s ease-in-out;
        font-weight: bold;
        cursor: pointer;

        &:hover {
            color: #000;
            background-color: #fff;
        }
    }
` 