import styled from "styled-components";

export const SearchModalContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 110;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
    transition: all .3s ease-in-out;

    &.open {
        opacity: 1;
        pointer-events: all;
    }
`

export const SearchModalContent = styled.div`
    position: absolute;
    top: -350px;
    left: 0;
    height: 350px;
    width: 100vw; /* Changed from 100vh to 100vw */
    background-color: #fff;
    z-index: 112;

    transition: top .3s ease-in-out;
    transition-delay: .1s;

    &.open {
        top: 0;
    }
`

export const SearchModalContentContainer = styled.div`
    padding: 35px 35px;
    height: 350px;
    width: 100%; /* Changed from 100vw */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`