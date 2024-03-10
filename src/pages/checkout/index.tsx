import HeaderBotYellow from "components/layout/headerBotYellow/headerBotY"
import CheckoutBuy from "./checkoutBuy"
import CheckoutForm from "./checkoutForm"
import { CheckoutPageContainer } from "./styled"

const CheckoutPage = () => {
    return (
        <>
        <HeaderBotYellow imgUrl={"https://media.istockphoto.com/id/1356242240/vector/3d-isometric-flat-vector-conceptual-illustration-of-self-checkout.jpg?s=612x612&w=0&k=20&c=a2a8inzb33RVGx2zxE7b6w7PQ1VqIxuwnvaXbq17w6s="} />
        <CheckoutPageContainer>
            <CheckoutForm />
            <CheckoutBuy />
        </CheckoutPageContainer>
        </>
    )
}

export default CheckoutPage