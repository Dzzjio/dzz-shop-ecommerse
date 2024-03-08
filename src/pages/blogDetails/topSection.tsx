import { StyledTopSection } from "./styled"
import ATL from '../../assets/images/adventure-time-landscape.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCommentDots, faUser } from "@fortawesome/free-solid-svg-icons"

const BDTopSection = () => {
    return (
        <StyledTopSection>
            <div>
                <img src={ATL} alt="ATL" />
                <div>
                    <h3>The Sustainable Wardrobe A Greener Approach to Fashion</h3>
                    <div>
                        <p>17 MAY 2024</p>
                        <p><span><FontAwesomeIcon icon={faUser} /></span> By dzzjio</p>
                        <p> <span><FontAwesomeIcon icon={faCommentDots} /></span>24 comments</p>
                    </div>
                </div>
            </div>
        </StyledTopSection>
    )
}

export default BDTopSection