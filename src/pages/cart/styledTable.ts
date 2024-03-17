import styled from "styled-components";

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    & > thead {
        width: 100%;
        
        & > tr > th {
            text-align: start;
            font-weight: bold;
            font-size: 18px;
        }
    }

    & > tbody {
        width: 100%;
        text-align: start;

        & > tr {
            padding: 20px !important;
            & > td {
                border-bottom: 1px solid #ccc;
                padding: 20px 0;

                & > div {
                    display: flex;
                    gap: 10px;

                    & > span {
                        border: 1px solid black;
                        width: 25px;
                        height: 25px;
                        border-radius: 20px;
                        background-color: black;
                        color: white;
                        text-align: center;
                        line-height: 1.5;
                        transition: all .2s ease-in-out;

                        &:nth-child(2) {
                            background-color: white;
                            color: black;
                            transition: all .2s ease-in-out;

                            &:hover {
                                background-color: black;
                                color: white;   
                            }
                        }

                        &:hover {
                            background-color: white;
                            color: black;   
                        }
                    }
                }
            }
            
            & > span {
                border: 1px solid black;
                color: white;
                background-color: black;
                padding: 5px;
                display: block;
                margin-bottom: 10px;
                margin-top: 10px;
                border-radius: 20px;
                text-align: center;
                transition: all .2s ease-in-out;
                max-width: 30px;

                & > svg {
                    max-width: 13px;
                    max-height: 15px;
                }

                &:hover {
                    color: black;
                    background-color: white;
                }
            }
        }
    }
`