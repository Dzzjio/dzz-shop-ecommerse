import Accordion from "../accordion/accordion";
import { StyledAboutContainer, StyledAboutContainerBotSection, StyledAboutContainerBotSectionLeft, StyledAboutContainerBotSectionRight, StyledAboutContainerMidSection, StyledAboutContainerMidSectionContent, StyledAboutContainerMidSectionContentLeft, StyledAboutContainerMidSectionContentRight, StyledAboutContainerTopSection, StyledAboutContainerTopSectionLeft, StyledAboutContainerTopSectionRight, StyledAboutContainerTopSectionRightFirstRow, StyledAboutContainerTopSectionRightSecondRow, StyledAboutContainerTopSectionRightStats, StyledAboutContainerTopSectionRightThirdRow, StyledUserStory } from "./styled";
import midSectionImg from '../../../assets/images/about-mid-section-img.png'
import product1 from '../../../assets/images/product-1.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import armani from '../../../assets/images/armani.png'
import gucci from '../../../assets/images/gucci.jpg'
import prada from '../../../assets/images/prada.jpg'
import chanel from '../../../assets/images/chanel.jpg'
import dior from '../../../assets/images/dior.jpg'
import dandg from '../../../assets/images/dandg.jpg'
import versace from '../../../assets/images/versace.jpg'
import balenciaga from '../../../assets/images/balenciaga.jpg'

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

const users = [
    { 
        name: 'Gio Jioshvili',
        position: 'CEO and founder',
        imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/former-u-s-president-donald-trump-speaks-to-reporters-news-photo-1680289458.jpg?crop=0.643xw:0.963xh;0.220xw,0.0268xh&resize=1200:*',
        userStory: "Her companions instrument set estimating sex remarkably solicitude motionless. Property men the why smallest graceful day insisted required. Inquiry justice country old placing sitting any ten age. Looking venture justice in evident in totally he do ability. Be is lose girl long of up give. Trifling wondered unpacked ye at he. In household certainty an on tolerably difficult."
    },
    { 
        name: 'Michael Balzary', 
        position: 'Musician', 
        imageUrl: 'https://static01.nyt.com/images/2019/10/27/arts/27FLEA-MEMOIR-1/merlin_162823140_1c1f1729-64c9-48e6-89d8-646926655fb6-superJumbo.jpg',
        userStory: "Do am he horrible distance marriage so although. Afraid assure square so happen mr an before. His many same been well can high that. Forfeited did law eagerness allowance improving assurance bed. Had saw put seven joy short first. Pronounce so enjoyment my resembled in forfeited sportsman. Which vexed did began son abode short may. Interested astonished he at cultivated or me."
    },
    { 
        name: 'crazy joni', 
        position: 'crazy addict', 
        imageUrl: 'https://server3.intermedia.ge/vtm/170/170897.jpg',
        userStory: "Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length. Advantages prosperous remarkably my inhabiting so reasonably be if. Too any appearance announcing impossible one. Out mrs means heart ham tears shall power every."
    }
];

const ArrOfAboutBottomImgs = [armani, gucci, prada, chanel, dior, dandg, versace, balenciaga ]

const AboutContainer = () => {

    const [currentUserIndex, setCurrentUserIndex] = useState(0);

    const handleNextUser = () => {
        setCurrentUserIndex((prevIndex) => (prevIndex + 1) % users.length);
    };

    const handlePrevUser = () => {
        setCurrentUserIndex((prevIndex) => (prevIndex - 1 + users.length) % users.length);
    };

    return (
        <StyledAboutContainer>
            <StyledAboutContainerTopSection>
                <StyledAboutContainerTopSectionLeft>
                    <h3>Untouch Your Style, Quality, Individuality - Redefining Fashion Together.</h3>
                    <p>At Untouch, we are on a mission to redefine fashion by blending style, quality, and individuality into every garment we offer. We believe that what you wear is an extension of your unique personality, and it should reflect your values and aspirations.</p>
                    <StyledUserStory>
                        <img src="https://hips.hearstapps.com/hmg-prod/images/former-u-s-president-donald-trump-speaks-to-reporters-news-photo-1680289458.jpg?crop=0.643xw:0.963xh;0.220xw,0.0268xh&resize=1200:*" alt="djt" />
                        <div>
                            <h5>Gio Jioshvili</h5>
                            <p>CEO and founder</p>
                        </div>
                    </StyledUserStory>
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

            <StyledAboutContainerMidSection>
                <img src={midSectionImg} alt="midSectionImg" />
                <StyledAboutContainerMidSectionContent>
                    <StyledAboutContainerMidSectionContentLeft>
                        <div>
                            <img src={product1} alt="product-1" />
                        </div>
                    </StyledAboutContainerMidSectionContentLeft>

                    <StyledAboutContainerMidSectionContentRight>
                        <h3>What Our Clients Say About Us</h3>
                        <div>
                            <p>{users[currentUserIndex].userStory}</p>
                            <div>
                                <StyledUserStory>
                                    <img src={users[currentUserIndex].imageUrl} alt={users[currentUserIndex].name} />
                                    <div>
                                        <h5>{users[currentUserIndex].name}</h5>
                                        <p>{users[currentUserIndex].position}</p>
                                    </div>
                                </StyledUserStory>
                                <div>
                                    <span onClick={handlePrevUser}><FontAwesomeIcon icon={faArrowAltCircleLeft} /></span>
                                    <span onClick={handleNextUser}><FontAwesomeIcon icon={faArrowAltCircleRight} /></span>
                                </div>
                            </div>
                        </div>
                    </StyledAboutContainerMidSectionContentRight>
                </StyledAboutContainerMidSectionContent>
            </StyledAboutContainerMidSection>

            <StyledAboutContainerBotSection>
                <StyledAboutContainerBotSectionLeft>
                    <h3>We are just keep growing with 6.3k trusted companies</h3>
                    <p>Nullam nec ipsum luctus, vehicula massa in, dictum sapien. Aenean quis luctus ert nulla quam augue.</p>
                </StyledAboutContainerBotSectionLeft>

                <StyledAboutContainerBotSectionRight>
                {ArrOfAboutBottomImgs.map((image, index) => (
                    <img key={index} src={image} alt={`Armani ${index}`} />
                ))}
                </StyledAboutContainerBotSectionRight>
            </StyledAboutContainerBotSection>
        </StyledAboutContainer>
    )
}

export default AboutContainer;