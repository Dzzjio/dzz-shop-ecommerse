import { FooterBot, FooterConteiner, FooterInput, FooterTop, FooterTopRecentPostConteiner, InputContainer } from "./styled";
import logo from '../../../assets/images/logo.png'
import footerBoxSmall from '../../../assets/images/footer-gray-box-small.png'// will delete later
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {

    const RecentPostsObjects = [
        {
            id: 0,
            title: 'Wooden Water Bottles',
            date:   'July 23, 2023',
            img: {
                src: footerBoxSmall,
                alt: `recentPost-${0}`
            }
        },
        {
            id: 1,
            title: 'Eco friendly bags',
            date:   'July 23, 2023',
            img: {
                src: footerBoxSmall,
                alt: `recentPost-${1}`
            }
        },
        {
            id: 2,
            title: 'Bamboo toothbrushes',
            date:   'July 23, 2023',
            img: {
                src: footerBoxSmall,
                alt: `recentPost-${2}`
            }
        }
    ];

    const ourStoresArr = ['New York', 'London SF', 'Edingburgh', 'Los Angeles', 'Chicago', 'Las Vegas'];
    const usefullLinksArr = ['Privacy Policy', 'Returns', 'Terms & Conditions', 'Contact Us', 'Latest News', 'Our Sitemap'];
    const FooterMenuArr = ['Instagram Profile', 'New Collection', 'Woman Dress', 'Contact Us', 'Latest News'];

    return (
        <footer style={{ position: 'fixed', bottom: 0, width: '100%', borderTop: '2px solid #000' }}>
            <FooterConteiner>
                <FooterTop>
                    <div>
                        <div>
                            <img style={{height: '30px'}} src={logo} alt="footer-logo" />
                            <p>Address: 451 Wall Stret, UK, London</p>
                            <p>E-mail: giojio14@gmail.com</p>
                            <p>Phone: (599) 160-881</p>
                        </div>
                        <div>
                            <h3>Subscribe To Our Newsletter</h3>
                            <InputContainer>
                                <FooterInput type="text" placeholder="Your Email Adress"/>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </InputContainer>
                        </div>
                    </div>
                    <div>
                        <h4>Recent Posts</h4>
                        {RecentPostsObjects.map(post => (
                            <FooterTopRecentPostConteiner>
                                <img src={post.img.src} alt={post.img.alt} />
                                <div>
                                    <h5>{post.title}</h5>
                                    <p>{post.date}</p>
                                </div>
                            </FooterTopRecentPostConteiner>
                        ))}
                    </div>
                    <div>
                        <h4>Our Stores</h4>
                        {ourStoresArr.map((store, index) => (
                            <p key={index}>{store}</p>
                        ))}
                    </div>
                    <div>
                        <h4>Useful Links</h4>
                        {usefullLinksArr.map((link, index) => (
                            <p key={index}>{link}</p>
                        ))}
                    </div>
                    <div>
                        <h4>Footer Menu</h4>
                        {FooterMenuArr.map((menu, index) => (
                            <p key={index}>{menu}</p>
                        ))}
                    </div>
                </FooterTop>
                <FooterBot>
                    <p>©2024 Dzzjio Shop. All Rights Reserved.</p>
                    <div>
                        <p>We Accept:</p>
                        <div></div>
                    </div>
                </FooterBot>
            </FooterConteiner>
        </footer>
    )
}

export default Footer;