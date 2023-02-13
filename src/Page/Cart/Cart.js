import classNames from 'classnames/bind'
import styles from './Cart.module.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Shopping_Cart from '../../Layout/Shopping_Cart/Shopping_Cart'
import Function from '../../function/Function'
import { useState } from 'react'
const cx = classNames.bind(styles)

function Cart() {
    const cart = useSelector((state) => state.cart)
    const [pickup, setPickup] = useState(false)
    let subTotal = 0
    let totalQuantity = 0
    cart.map(value => {
        totalQuantity += value.quantity
        subTotal += (parseInt(value.price) * value.quantity)
    })
    return (
        <div className= {cx('wrapper')}>
            <div className= {cx('cart-top')}>
                <h2>Shop</h2>
                <p>
                    <Link className= {cx('link')} to= "/">Home</Link> / Cart
                </p>
            </div>

            <div className= {cx('cart-bottom')}>
                <div className= {cx('shopping-cart')}>
                    <h3>Shopping Cart</h3>
                    <div className= {cx('list')}>
                        {
                            cart.map((product, index) => {
                                return (
                                    <Shopping_Cart
                                        key = {index}
                                        name = {product.name}
                                        code = {product.code}
                                        image= {product.image}
                                        price = {product.price}
                                        quantity = {product.quantity}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <div className= {cx('total-cart')}>
                    <h3>Cart totals</h3>
                    <div className= {cx('sub-total')}>
                        <h4>Subtotal</h4> <span>{Function(subTotal.toString())} VND</span>
                    </div>
                    <div className= {cx('shipping-fee')}>
                        <h4>Shipping</h4>
                        <div className= {cx('shipping-types')}>
                            <div className= {cx('check')}>
                                <input type= "radio" id='1' name='shipping-types' value="Flat rate"/>
                                <label htmlFor = "1">Flat rate</label>
                            </div>
                            <div className= {cx('check')}>
                                <input type= "radio" id='2' name='shipping-types' value="Free shipping"/>
                                <label htmlFor = "2">Free shipping</label>
                            </div>
                            <div className= {cx('check')}>
                                <input type= "radio" id='3' name='shipping-types' value="Local pickup: 10.000 VND"/>
                                <label htmlFor = "3">Local pickup: 10.000 VND</label>
                            </div>

                            <p>Shipping to <b>Vietnam</b></p>
                        </div>
                    </div>
                    <div className= {cx('total-fee')}>
                        <h4>Total</h4>
                        <span>{Function(subTotal.toString())} VND</span>
                    </div>
                    <button className= {cx('check-out')}>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;