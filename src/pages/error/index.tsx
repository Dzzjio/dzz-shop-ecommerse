import { ErrorPageContainer, ErrorPageContent, ErrorPageContentLeft, ErrorPageContentRight, SocMedias } from "./styled"
import logo from '../../assets/images/logo-on-black-bg.png'
import { Link } from "react-router-dom";
import fb from '../../assets/images/facecbook.png'
import ig from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'
import linekdin from '../../assets/images/linekdin.png'

const ErrorPage = () => {
    const isBlackBackground: boolean = false;
    
    return (
        <ErrorPageContainer className={isBlackBackground ? '' : 'white-background'}>
            <ErrorPageContent isBlackBackground>
                <h2>404</h2>
                <ErrorPageContentLeft>
                    <img src={logo} alt="logo-error-page" />
                    <SocMedias>
                        <div><img src={fb} alt="fb-logo" /></div>
                        <div><img src={ig} alt="ig-logo" /></div>
                        <div><img src={twitter} alt="twitter-logo" /></div>
                        <div><img src={linekdin} alt="linekdin-logo" /></div>
                    </SocMedias>
                </ErrorPageContentLeft>
                
                <ErrorPageContentRight>
                    <h3>OOPS!</h3>
                    <p>Oh, no! This page does not exist.</p>
                    <Link to='/'>GO TO MAIN PAGE</Link>
                </ErrorPageContentRight>
            </ErrorPageContent>
        </ErrorPageContainer>

    )
}

export default ErrorPage