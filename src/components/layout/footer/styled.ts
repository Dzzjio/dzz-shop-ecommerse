import { Breakpoints } from 'constantss'
import styled from 'styled-components'

export const FooterConteiner = styled.div`
    width: 90vw;
    height: auto;
    margin: 0 auto;
    position: relative;
    box-sizing: border-box;
`

export const FooterTop = styled.div`
    display: flex;
    justify-content: space-between;
    width: 110%;
    margin: 0 auto;
    padding: 100px 0;
    align-items: center;

    h3 {
        @media (max-width: ${Breakpoints.tabletland}) {
            margin-top: 0;
        }
    }

    h4 {
        margin-top: 0;
    }

    
    & > div:first-child {
        display: flex;
        gap: 150px;
        
        @media (max-width: ${Breakpoints.tabletland}) {
            margin: 0 auto;
        }
    }

    & > div:not(:first-child) {
        @media (max-width: ${Breakpoints.tabletland}) {
            display: none;
        }
    }
`
export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FEEB9D;
    width: 100%;
    padding: 15px 10px;
    border: none;
    border-radius: 10px;

    &:last-child {
        cursor: pointer;
    }
`

export const FooterInput = styled.input`
    background-color: #FEEB9D;
    width: 100%;
    border: none;

    &:focus {
        border-color: transparent;
        outline: none;
    }

    &::placeholder {
        color: black;
    }
`

export const FooterTopRecentPostConteiner = styled.div`
    display: flex;
    height: 60px;
    gap: 15px;
    margin-bottom: 10px;

    & > img {
        width: 60px;
        height: 60px;
    }

    & > div {
        display: flex;
        flex-direction: column;


        & > h5, p {
            margin: 0;
        }
    }
`

export const FooterBot = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-top: 1px solid #ccc;

    & > div {
        display: flex;
        align-items: center;
        gap: 3px;
    }
`