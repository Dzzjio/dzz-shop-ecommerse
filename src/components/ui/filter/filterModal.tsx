import { FC } from "react"
import { FilterModalContainer, FilterModalContent, FilterModalContentContainer } from "./styledFilter"
import { Layout } from "../cart/styledCart"

interface IPropsFilter {
    open: boolean
    onClose: () => void
}

const FilterModal: FC<IPropsFilter> = ( {open, onClose} ) => {
    return (
        <FilterModalContainer className={open ? 'open' : ''}>
            <Layout onClick={() => onClose()}></Layout>
            <FilterModalContent className={open ? 'open' : ''}>
                <FilterModalContentContainer>
                    madman in disguise
                </FilterModalContentContainer>
            </FilterModalContent>
        </FilterModalContainer>
    )
}

export default FilterModal