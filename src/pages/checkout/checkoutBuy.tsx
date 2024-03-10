import { CheckoutPageContainerRight } from "./styled"
import glock from '../../assets/images/asus-rog-strix.jpg'
import paypal from '../../assets/images/paypal.png'
import { Link } from "react-router-dom"

const CheckoutBuy = () => {
    return (
        <CheckoutPageContainerRight>
            <div className="checkout-ordered-items">
                <div className="checkout-ordered-item">
                    <div>
                        <img src={glock} alt="glock-item" />
                        <h5>item</h5>
                    </div>
                    <p>$50</p>
                </div>
                <div className="checkout-ordered-item">
                    <div>
                        <img src={glock} alt="glock-item" />
                        <h5>item</h5>
                    </div>
                    <p>$50</p>
                </div>
                <div className="subtotal">
                    <h5>Subtotal:</h5>
                    <h5>$100</h5>
                </div>
                <div className="shipping">
                    <h5>Shipping</h5>
                    <div>
                        <div>
                            <input name="shipping-radio" type="radio" />
                            <p>Free Shipping</p>
                        </div>
                        <div>
                            <input name="shipping-radio" type="radio" />
                            <span><p>Flat Rate:</p> <p>25.25</p></span>
                        </div>
                    </div>
                    <div>
                        <h5>Total</h5>
                        <h5>$125.25</h5>
                    </div>
                </div>
                <div className="payment-methods">
                <div>
                    <input type="radio" id="payment-method1" name="payment-method" />
                    <p>Direct Bank Transfer</p>
                </div>
                <div>
                    <input type="radio" id="payment-method2" name="payment-method" />
                    <p>Cash On Delivery</p>
                </div>
                <div>
                    <input type="radio" id="payment-method3" name="payment-method" />
                    <div><span>PayPal</span> <span><img src={paypal} alt="paypal" /></span></div>
                </div>
                </div>
                <div className="checkout-footer">
                    <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link to='/'>privacy policy.</Link></p>
                    <div>
                        <input type="checkbox" />
                        <p>I have read and agree to the website terms and conditions </p>
                    </div>
                    <button>PLACE ORDER</button>
                </div>
            </div>
        </CheckoutPageContainerRight>
    )
}

export default CheckoutBuy
