import api from "services/API"

const getProducts = (
    PageNumber: number,
    PageSize: number,
    CategyId: string = '', 
    PriceFrom: number | null = null, 
    PriceTo: number | null = null,
) => {

    const data = {
        PageNumber,
        PageSize,
    }

    if (CategyId) {
        //@ts-ignore
        data[CategyId] = CategyId
    }

    if (PriceFrom) {
        //@ts-ignore
        data[PriceFrom] = PriceFrom
    }

    if (PriceTo) {
        //@ts-ignore
        data[PriceTo] = PriceTo
    }
    return api
    .get(`product/products?PageNumber=${PageNumber}&PageSize=${PageSize}`)
    .then((res) => {
        return res
    })
}

const getCategories = () => {
    return api.get('product/categories').then((res) => {
        return res
    })
}

const getSingleProduct = () => {
    return ''
}

const getLatestProduct = () => {
    return api.get('product/latestproducts').then((res) => {
        return res
    })
}

const getOffers = () => {
    return ''
}

export const Products = {
    getProducts,
    getCategories,
    getSingleProduct,
    getLatestProduct,
    getOffers
}