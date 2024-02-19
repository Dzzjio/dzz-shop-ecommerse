import styled from "styled-components";

export const PopularProductsContainer = styled.div`
    .row {
        margin-top: 25px;
        margin-bottom: 25px;
        display: flex;
        gap: 25px;
        flex-wrap: wrap;

        & > div {
            flex: 1;
            min-width: 20%;
        }
    }
`