import { FC } from "react"
import { MobileMenuContainer, MobileMenuContent, MobileMenuContentContainer } from "./styledMobileMenu"
import { Layout } from "../cart/styledCart"
import { Star, StyledLink } from "components/layout/header/styled"

interface IPropsMenu {
    open: boolean
    onClose: () => void
}

const MobileMenu: FC<IPropsMenu> = ( {open, onClose} ) => {
    return (
        <MobileMenuContainer className={open ? 'open' : ''}>
            <Layout onClick={() => onClose()}></Layout>
            <MobileMenuContent className={open ? 'open' : ''}>
                <MobileMenuContentContainer>
                    <ul onClick={() => onClose()}>
                        <li><StyledLink to='/auth/login'>Log In</StyledLink></li>
                        <li><StyledLink to='/auth/register'>Register</StyledLink></li>
                        <br></br>
                        <hr />
                        <br />
                        <li><StyledLink to='/' ><span>Home</span> <Star></Star></StyledLink></li>
                        <li><StyledLink to='/shop'><span>Shop</span> <Star></Star></StyledLink></li>
                        <li><StyledLink to='/blog'><span>Blog</span> <Star></Star></StyledLink></li>
                        <li><StyledLink to='/about'><span>About us</span> <Star></Star></StyledLink></li>
                        <li><StyledLink to='/contact'><span>Contact</span> <Star></Star></StyledLink></li>
                    </ul>
                </MobileMenuContentContainer>
            </MobileMenuContent>
        </MobileMenuContainer>
    )
}

export default MobileMenu