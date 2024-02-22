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
        
        & > li {
            cursor: pointer;
            list-style: none;
            margin-right: 15px;
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

export const HeaderRightSide = styled.div`
    display: flex;
    margin: 10px 50px;
    gap: 30px;

    & > * {
        cursor: pointer;
    }

    & > div {
        display: flex;
        gap: 15px;
    }
`