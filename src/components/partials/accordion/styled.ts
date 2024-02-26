import styled from "styled-components";

export const StyledAccordion = styled.div`
    width: 100%;
    margin-right: 20px;
`

export const AccordionItem = styled.div`

`

export const AccordionHeader = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 10px;
    margin-bottom: 15px;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 10px;

    &:hover {
        background-color: #e0e0e0;
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
    padding: 0 15px 15px 15px;
`