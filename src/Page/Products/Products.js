import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import Function from '../../function/Function';
import { Link, useLocation } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import Card from '../../Layout/Card/Card';
import { add_to_cart_from_home } from '../../redux/actions';

const cx = classNames.bind(styles)
function Products() {
    let location  = useLocation()
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)
    const relatedProducts = location.state.related_products

    const addToCart = () => {
        dispatch(add_to_cart_from_home({...location.state, quantity: quantity}))
    }
    const increaseQuantity = () => {
        setQuantity(prev => prev + 1)
    }

    const decreaseQuantity = () => {
        if(quantity === 1) {
            setQuantity(1)
        }else {
            setQuantity(prev => prev - 1)
        }
    }
    return ( 
        <div className= {cx('wrapper')}>
            <div className= {cx('product-top')}>
                <h2>Shop</h2>
                <p>
                    <Link className= {cx('link')} to= "/">Home</Link> / Shop / {location.state.name}
                </p>
            </div>
            <div className= {cx('product-center')}>
                <div className= {cx('image')}>
                    {(location.state.sale === "true") && <div className= {cx('sale')}>SALE</div>}
                    <img src= {location.state.image} alt = "product-image"/>
                </div>
                <div className= {cx('content')}>
                    <h4 className= {cx('name')}>{location.state.name}</h4>
                    <h4 className= {cx('price')}>{Function(location.state.price)} VND</h4>
                    <ul className= {cx('description')}>
                        <li>Lorem ipsum dolor sit amet dico</li>
                        <li>Mea volumus verterem adipisci at</li>
                        <li>Mel ex mundi scripta gloriatur</li>
                    </ul>
                    <div className= {cx('add-to-cart')}>
                        <div className= {cx('quantity')}>
                            <span>Quantity</span>
                            <ArrowBackIosIcon className= {cx('icon')} onClick = {decreaseQuantity}/>
                            <span>{quantity}</span>
                            <ArrowForwardIosIcon className= {cx('icon')} onClick = {increaseQuantity}/>
                        </div>
                        <button onClick={addToCart}>Add To Cart</button>
                    </div>
                    <div className= {cx('add-to-wishlist')}>
                        <FavoriteBorderOutlinedIcon className= {cx('icon')}/>
                        <p>Add to WishList</p>
                    </div>
                    <h4>Code: {location.state.code}</h4>
                    <h4>Category: Vans</h4>
                </div>
            </div>
            <div className= {cx('product-bottom')}>
                <h3>Related products</h3>
                <div className= {cx('related-products')}>
                    {
                        relatedProducts.map((product, index) => {
                                if(index > 2) {
                                    return
                                }
                                return (
                                    <Card 
                                        key = {index}
                                        id = {product.id} 
                                        name = {product.name}
                                        code = {product.code}
                                        image = {product.image}
                                        price = {product.price}
                                        sale = {product.sale}
                                        related_products = {relatedProducts}
                                    />
                                )
                            }
                        )
                    }
                </div>
            </div>
        </div>
     );
}

export default Products;