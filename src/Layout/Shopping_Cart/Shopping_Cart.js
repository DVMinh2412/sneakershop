import classNames from "classnames/bind";
import styles from './Shopping_Cart.module.scss'
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import { useDispatch } from "react-redux";
import Function from "../../function/Function";
import { remove_from_cart, increase_quantity, decrease_quantity } from "../../redux/actions";

const cx = classNames.bind(styles)
function Shopping_Cart(product) {
    const [quantity, setQuantity] = useState(product.quantity)
    const dispatch = useDispatch()

    const increaseQuantity = () => {
        dispatch(increase_quantity(product))
        setQuantity(prev => prev + 1)
    }

    const decreaseQuantity = () => {
        if(quantity === 1) {
            setQuantity(1)
        }else {
            dispatch(decrease_quantity(product))
            setQuantity(prev => prev - 1)
        }
    }

    const removeItem = () => {
        dispatch(remove_from_cart(product))
    }

    return ( 
        <div className= {cx('wrapper')}>
            <div className= {cx('cart-left')}>
                <CloseIcon className= {cx('icon')} onClick = {removeItem}/>
            </div>
            <div className= {cx('cart-center')}>
                <img src= {product.image} alt = "none"/>
                <h5 className= {cx('name')}>{product.name}</h5>
            </div>
            <div className= {cx('cart-right')}>
                <div className= {cx('quantity')}>
                    <span>Quantity</span>
                    <ArrowBackIosIcon className= {cx('icon')} onClick = {decreaseQuantity}/>
                    <span>{quantity}</span>
                    <ArrowForwardIosIcon className= {cx('icon')} onClick = {increaseQuantity}/>
                </div>
                <h2 className= {cx('price')}>{Function((parseInt(product.price) * quantity).toString())} VND</h2>
            </div>
        </div>
    );
}

export default Shopping_Cart;