import styled from "styled-components";

export const MobileMenuContainer = styled.div`
    position: fixed;
    right: 0;
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

export const MobileMenuContent = styled.div`
    position: absolute;
    right: -430px;
    top: 0;
    width: 430px;
    height: 100vh;
    background-color: #fff;
    z-index: 112;

    transition: right .3s ease-in-out;
    transition-delay: .1s;

    &.open {
        right: 0;
    }

    @media (max-width: 700px) {
        right: -250px;
        width: 250px;
    }
`
export const MobileMenuContentContainer = styled.div`
    padding: 35px 35px;
    height: calc(100vh - 70px);
    width: 430px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    li.auth-in-menu {
        & > a {
            background-color: black;
            color: white;
            padding: 10px;
            border: 1px solid black;
            border-radius: 10px;

            &:hover {
                color: black;
                background-color: white;
            }
        }
    }

    hr {
        margin-left: -75px;
    }

    & > ul {
        list-style-type: none;

        & > li {
            margin-bottom: 20px;

            & > a {
                text-decoration: none;
                color: black;
                display: flex;
                align-items: center;    
                gap: 3px;
                font-size: 25px;
            }
        }
    }
`