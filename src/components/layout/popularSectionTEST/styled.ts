import styled from "styled-components";

export const StyledPopularSection = styled.section`
    width: 1000px;
    overflow: hidden;
    margin: 50px auto;
`

export const StyledPopularSectionTop = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    & > h2 {
        margin: 0;
    }

    & > div {
        border: 1px solid #000;
        border-radius: 100px;
        padding: 0 5px;
    }

    & > div > ul {
        display: flex;
        padding: 0;
        margin: 5px 0;

        & > li {
            display: flex;
            list-styling: none;

            &:first-child {
                background-color: #000;
                color: #fff;
                border-radius: 30px;
                padding: 2px 10px;
            }
            
            &:not(:last-child) {
                margin-right: 20px;
            }
        }
    }
`

export const StyledPopularSectionBot = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 30px;
`