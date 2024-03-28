import styled from "styled-components";

export const PopularProductsContainer = styled.div`

    .row {
        margin: 25px 0;
        display: flex;
        gap: 25px;
        flex-wrap: wrap;

        & > div {
            flex: 1;
            min-width: 300px;
        }
    }
`