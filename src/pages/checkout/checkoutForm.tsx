import { CheckoutPageContainerLeft } from "./styled"

const CheckoutForm = () => {
    return (
        <CheckoutPageContainerLeft>
            <div>
                <div>
                    <label htmlFor="first-name">First Name</label><br />
                    <input type="text" name="first-name" />
                </div>
                <div>
                    <label htmlFor="last-name">Last Name</label><br />
                    <input type="text" name="last-name" />
                </div>
            </div>
            <label htmlFor="company">Company Name (optional)</label>
            <input type="text" name="company" />
            <label htmlFor="country">Country / region *</label>
            <input type="text" name="country" />
            <label htmlFor="adress">Street Adress *</label>
            <input type="text" name="adress" placeholder="House name and street name"/>
            <input type="text" name="adress" placeholder="Appartmen, suite, unit, etc (optional)"/>
            <label htmlFor="town-city">Town / City *</label>
            <input type="text" name="town-city" />
            <label htmlFor="state">State *</label>
            <input type="text" name="state" />
            <label htmlFor="zip-code">ZIP Code *</label>
            <input type="text" name="zip-code" />
            <label htmlFor="phone">Phone *</label>
            <input type="text" name="phone" />
            <label htmlFor="email">Email *</label>
            <input type="email" name="email" />
            <div className="left-checkboxes">
                <div>
                    <input type="checkbox" />
                    <p>Create an account?</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <p>Ship to a different adress?</p>
                </div>
            </div>
            <label htmlFor="text_area">Order notes (optional)</label><br />
            <textarea id="text_area" name="message" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
        </CheckoutPageContainerLeft>
    )
}

export default CheckoutForm
