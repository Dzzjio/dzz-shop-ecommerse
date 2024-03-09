import CheckoutBuy from "./checkoutBuy"
import CheckoutForm from "./checkoutForm"
import { CheckoutPageContainer } from "./styled"

const CheckoutPage = () => {
    return (
        <CheckoutPageContainer>
            <CheckoutForm />
            <CheckoutBuy />
        </CheckoutPageContainer>
    )
}

export default CheckoutPage