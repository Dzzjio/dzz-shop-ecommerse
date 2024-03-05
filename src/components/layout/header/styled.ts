import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const Star = styled.div`
    position:relative;
    margin: 5px;
    width:5px;

    &::before {
        content:"";
        position:absolute;
        background:#ccc;
        width: 5px;
        height: 5.45px;
        transform:rotate(-45deg) skewX(22.5deg) skewY(22.5deg);
    }

    &::after {
        content:"";
        position:absolute;
        background:#ccc;
        width: 5px;
        height: 5.45px;
        transform:rotate(45deg) skewX(22.5deg) skewY(22.5deg);
    }
`

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;

    & > div {
        display: flex;
        align-items: center;

        & > img {
            height: 30px;
            margin: 10px 50px;
            cursor: pointer;
        }
    }

    & > div > ul {
        display: flex;
        padding: 0;
        margin: 0;

        @media (max-width: 530px) {
            display: none;
        }
        
        & > li {
            cursor: pointer;
            list-style: none;
            margin-left: 15px;
            display: flex;
            align-items: center;
            justify-content: center;

            & > * {
                display: flex;
                align-items: center;
                color: black;
                text-decoration: none;
            }

            & > span {
                position: relative;                

                &  > svg {
                    position: absolute;
                    color: red;
                    width: 10px;
                    height: 10px;
                    top: 50%;
                    transform: translate(-50% -50%)
                    
                }
            }
        }
    }

    @media (max-width: 940px) {
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    @media (max-width: 530px) {
        flex-direction: row;
        padding:10px 20px;
    }
`

export const StyledLink = styled(NavLink)`

    &:hover {
        & ${Star}::before,
        & ${Star}::after {
            background: black;
        }
    }

    &.active {
        & ${Star}::before,
        & ${Star}::after {
            background: black;
        }
    }
`;

export const HeaderLeftSide = styled.div`
    @media (max-width: 940px) {
        margin: 0;
        width: 100%;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;

        & > img {
            margin: 10px 0 !important;
        }
    }

    @media (max-width: 530px) {
        border: none;
    }
`

export const HeaderRightSide = styled.div`
    display: flex;
    margin: 10px 50px;
    gap: 30px;

    .burger-icon {
        display: none;

        @media( max-width: 530px) {
            display: block;
        }
    }

    & > div > *.nav-icon {
        margin-left: 30px;
    }

    & > * {
        cursor: pointer;
    }

    & > div {
        display: flex;
        gap: 15px;
    }

    & > p {
        @media(max-width: 530px) {
            display: none;
        }
    }

    & > p > span > * {
        color: black;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    @media (max-width: 940px) {
        margin: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 530px) {
        width: auto;
    }

  
`