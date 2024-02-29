import { FC, useState } from "react"
import { CartProductContainer } from "./styledCart"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

export interface ICartProduct {
    title: string
    img: string
    price: number
}

const CartProduct: FC<ICartProduct> = ({ img, title, price }) => {
    const [number, setNumber] = useState<number>(1)

    const change = (minus: boolean) => {
        if (minus && number > 1) {
            setNumber(number - 1)
        }
        if (!minus) {
            setNumber(number + 1)
        }
    }

    return (
        <CartProductContainer>
            <img src={img} alt={title} />
            <div>
                <h3>{title}</h3>
                <div>
                    <button onClick={() => change(true)}>-</button>
                    <span>{number}</span>
                    <button onClick={() => change(false)}>+</button>
                    <p>${price}</p>
                </div>
            </div>
            <span>
            <FontAwesomeIcon icon={faXmark} />
            </span>
        </CartProductContainer>
    )
}

export default CartProduct