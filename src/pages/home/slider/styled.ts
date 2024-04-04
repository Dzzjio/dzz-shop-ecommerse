import styled from "styled-components";

export const HomeSlider = styled.div`
    height: 100%;

    img {
        width: 40%;
        height: 100%;
        object-fit: cover;
        margin: 0 auto;
        border-radius: 20px;
        border: 1px solid black;
    }

    .single-slide {
        height: 100%;
        display: flex !important;
        flex-direction: column;
        justify-content: space-between;
        
        & > h3, p {
            width: 50%;
            margin: 20px auto;
        }

        & > p {
            font-weight: bold;
        }
    }
`