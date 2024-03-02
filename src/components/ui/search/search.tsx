import { FC } from "react"
import { SearchModalContainer, SearchModalContent, SearchModalContentContainer } from "./styledSearch"
import { Layout } from "../cart/styledCart"

interface IPropsSearch {
    open: boolean
    onClose: () => void
}

const SearchModal: FC<IPropsSearch> = ( {open, onClose} ) => {
    return (
        <SearchModalContainer className={open ? 'open' : ''} >
            <Layout onClick={() => onClose()}></Layout>
            <SearchModalContent className={open ? 'open' : ''}>
                <SearchModalContentContainer>
                    <div>დღეს სურვილების ასრულების დღეა მამი</div>
                    <div></div>
                </SearchModalContentContainer>
            </SearchModalContent>
        </SearchModalContainer>
    )
}

export default SearchModal