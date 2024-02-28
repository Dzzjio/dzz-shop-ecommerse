import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const HeaderContainerMobile = styled.header`
    display: none;

    @media (max-width: 610px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;

        & > img {
            height: 35px;
            margin: 0 10px;
            cursor: pointer;
        }
    }
`;

export const MenuSideBar = styled.div`
    background-color: #ffedd4;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    
    font-size: 30px;

    position: relative;

    & > div {
        display: flex;
        gap: 15px;
    }

    & > ul {
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;
        
        & > li {
            cursor: pointer;
            list-style: none;
            margin-left: 15px;

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

export const CloseIcon = styled(FontAwesomeIcon)`
    position: absolute;
    top: 20px;
    right: 20px;
    height: 30px;
    width: 30px;
`

export const NavbarIcon = styled(FontAwesomeIcon)`
    @media (max-width: 610px) {
        dislay: none;
    }
`