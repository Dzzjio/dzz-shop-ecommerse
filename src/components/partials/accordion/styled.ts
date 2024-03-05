import styled from "styled-components";

export const StyledAccordion = styled.div`
    width: 100%;
    margin-right: 20px;

    @media (max-width: 700px) {
        margin: 0 auto;
    }
`

export const AccordionItem = styled.div`

`

export const AccordionHeader = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 15px;
    margin-bottom: 20px;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 10px;

    &:hover {
        background-color: #e0e0e0;
    }

    @media ( max-width: 1000px) {
        font-size: 14px;
    }

    @media ( max-width: 450px) {
        font-size: 12px;
        width: auto;
    }

    margin-right: 50px;

    @media ( max-width: 600px) {
        margin-right: 0;
    }

    & > span:last-child {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: black;
        color: white;
    }
`

export const AccordionContent = styled.div`
    padding: 0 15px 20px 15px;

    @media ( max-width: 1000px) {
        font-size: 14px;
        }
`