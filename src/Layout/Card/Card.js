import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { NavLink } from "react-router-dom";
import Function from "../../function/Function";
import { useDispatch, useSelector } from "react-redux"
import { add_to_cart_from_home, add_to_wishlist } from "../../redux/actions";

const cx = classNames.bind(styles)

function Card(value) {
    const nameBrand = useSelector((state) => state.filter.categories)
    const price = Function(value.price)
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add_to_cart_from_home({...value, quantity: 1}))
    }

    const addToWishlist = () => {
        dispatch(add_to_wishlist(value))
    }

    return ( 
        <div className= {cx('wrapper')}>
            <div className= {cx('card-top')}>
                <h5>{nameBrand}</h5>
                <div title = "Add to WishList" onClick={addToWishlist}>
                    <FavoriteBorderOutlinedIcon className= {cx('icon')}/>
                </div>
            </div>
            <NavLink className= {cx('link')} to = {{pathname: `/products/${value.name}`}} state = {value}>
                <div className= {cx('card-center')}>
                    {(value.sale === "true") && <div className= {cx('sale')}>SALE</div>}
                    <img src= {value.image} alt = "image"/>
                </div>
            </NavLink>
            <div className= {cx('card-bottom')}>
                <NavLink className= {cx('link')} to = {{pathname: `/products/${value.name}`}} state = {value}>
                    <div className= {cx('content')}>
                        <h4>{value.name}</h4>
                        <p>Code: {value.code}</p>
                        <span>{price} VND</span>
                    </div>
                </NavLink>
                <div className= {cx('cart')} title = "Add to Cart">
                    <ShoppingCartOutlinedIcon className= {cx('icon')} onClick = {addToCart}/>
                </div>
            </div>
        </div>
     );
}

export default Card;