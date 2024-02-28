import styled from "styled-components";

export const FooterConteinerMobile = styled.div`
    display: flex;
    flex-direction: column; 
    padding: 20px;

    p {
        font-size: 13px;
    }

    h3 {
        font-size: 17px;
    }

    & > div {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }
`

export const FooterConteinerMobileBot = styled.div`
    display: flex;
    flex-direction: column;

    & > div {
        display: flex;
    }

    & > div > span {
        font-size: 14px;
    }

    & > div  > img {
        width: 160px;
    }
`