import { FC } from "react"
import { SearchModalBot, SearchModalContainer, SearchModalContent, SearchModalContentContainer, SearchModalTop, SearchProduct, VerticalLine } from "./styledSearch"
import { Layout } from "../cart/styledCart"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons"
import SearchProductImg from '../../../assets/images/product-4.jpeg'

interface IPropsSearch {
    open: boolean
    onClose: () => void
}

const SearchSmallProducts = [
    {
        imgUrl: SearchProductImg,
        title: 'Product',
        price: 10
    },
    {
        imgUrl: SearchProductImg,
        title: 'Product',
        price: 10
    },
    {
        imgUrl: SearchProductImg,
        title: 'Product',
        price: 10
    },
    {
        imgUrl: SearchProductImg,
        title: 'Product',
        price: 10
    },
    {
        imgUrl: SearchProductImg,
        title: 'Product',
        price: 10
    },
    {
        imgUrl: SearchProductImg,
        title: 'Product',
        price: 10
    },
    {
        imgUrl: SearchProductImg,
        title: 'Product',
        price: 10
    },
]

const SearchModal: FC<IPropsSearch> = ( {open, onClose} ) => {
    return (
        <SearchModalContainer className={open ? 'open' : ''} >
            <Layout onClick={() => onClose()}></Layout>
            <SearchModalContent className={open ? 'open' : ''}>
                <SearchModalContentContainer>
                    <SearchModalTop>
                        <div>
                            <div>
                                <span>All categories </span>
                                <span><FontAwesomeIcon icon={faChevronDown}/></span>
                            </div>
                            <VerticalLine>&nbsp;</VerticalLine>
                            <div>
                                <span>Search Product</span>
                                <span><FontAwesomeIcon icon={faSearch}/></span>
                            </div>
                        </div>
                        <div>
                            <p>Quick search:</p>
                            <p>Cloathes</p>
                            <p>Urban Skirt</p>
                            <p>VelvetGown</p>
                            <p>LushShorts</p>
                        </div>
                    </SearchModalTop>
                    <SearchModalBot>
                        <h3>You May Also Like</h3>
                        <div>
                            {SearchSmallProducts.map((product, index) => (
                                <SearchProduct key={index}>
                                    <img src={product.imgUrl} alt={product.title} />
                                    <p>{product.title}</p>
                                    <p>${product.price}</p>
                                </SearchProduct>
                            ))}
                        </div>
                    </SearchModalBot>
                </SearchModalContentContainer>
            </SearchModalContent>
        </SearchModalContainer>
    )
}

export default SearchModal