import Accordion from "../accordion/accordion";
import { StyledAboutContainer, StyledAboutContainerTopSection, StyledAboutContainerTopSectionLeft, StyledAboutContainerTopSectionRight, StyledAboutContainerTopSectionRightFirstRow, StyledAboutContainerTopSectionRightSecondRow, StyledAboutContainerTopSectionRightStats, StyledAboutContainerTopSectionRightThirdRow } from "./styled";

const questionAnswerObj = [
    {
        question: 'How can I contact customer support?',
        answer: 'If your order has not yet shipped, you can contact us to change your shipping address. If your order has already shipped, we may not be able to change.'
    },
    {
        question: 'Can I cancel my order?',
        answer: 'Yes, you can cancel your order before it has been processed for shipping. Please contact our customer support team as soon as possible to initiate the cancellation process.'
    },
    {
        question: 'Do you offer international shipping?',
        answer: 'Yes, we offer international shipping to most countries. Shipping rates and delivery times may vary depending on the destination. Please proceed to checkout to see if your country is eligible for international shipping.'
    },
    {
        question: 'Can I track my order in real-time?',
        answer: 'Yes, you can track your order in real-time using the tracking number provided in your shipping confirmation email. Simply enter the tracking number on our websites tracking page to see the current status and location of your package.'
    },
    {
        question: 'How do I know if a product is in stock?',
        answer: 'To check the availability of a product, simply visit the product page on our website. If the product is out of stock, you will see a notification indicating its unavailability. Additionally, you can contact our customer support team for assistance with product availability inquiries.'
    }
]

const AboutContainer = () => {
    return (
        <StyledAboutContainer>
            <StyledAboutContainerTopSection>
                <StyledAboutContainerTopSectionLeft>
                    <h3>Untouch Your Style, Quality, Individuality - Redefining Fashion Together.</h3>
                    <p>At Untouch, we are on a mission to redefine fashion by blending style, quality, and individuality into every garment we offer. We believe that what you wear is an extension of your unique personality, and it should reflect your values and aspirations.</p>
                    <div>
                        <img src="https://hips.hearstapps.com/hmg-prod/images/former-u-s-president-donald-trump-speaks-to-reporters-news-photo-1680289458.jpg?crop=0.643xw:0.963xh;0.220xw,0.0268xh&resize=1200:*" alt="djt" />
                        <div>
                            <h5>Gio Jioshvili</h5>
                            <p>CEO and founder</p>
                        </div>
                    </div>
                    <div>
                        < Accordion items={questionAnswerObj} />
                    </div>
                    <StyledAboutContainerTopSectionRightStats>
                        <div>
                            <h3>50+</h3>
                            <p>Items Sale</p>
                        </div>
                        <div>
                            <h3>400%</h3>
                            <p>Return On Investment</p>
                        </div>
                    </StyledAboutContainerTopSectionRightStats>
                </StyledAboutContainerTopSectionLeft>

                <StyledAboutContainerTopSectionRight>
                    <StyledAboutContainerTopSectionRightFirstRow>
                        <div></div>
                        <div></div> 
                    </StyledAboutContainerTopSectionRightFirstRow>
                    <StyledAboutContainerTopSectionRightSecondRow></StyledAboutContainerTopSectionRightSecondRow>
                    <StyledAboutContainerTopSectionRightThirdRow></StyledAboutContainerTopSectionRightThirdRow>
                </StyledAboutContainerTopSectionRight>
            </StyledAboutContainerTopSection>
        </StyledAboutContainer>
    )
}

export default AboutContainer;


// https://i.ebayimg.com/images/g/79sAAOSwpzplwuDs/s-l1600.jpg