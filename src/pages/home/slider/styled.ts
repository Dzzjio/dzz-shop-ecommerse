import styled from "styled-components";

export const HomeSlider = styled.div`
    height: 100%;

    img {
        width: 40%;
        height: 100%;
        object-fit: cover;
        margin: 0 auto;
    }

    .single-slide {
        height: 100%;
        display: flex !important;
        flex-direction: column;
        justify-content: space-between;
    }
`