import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import { Link, NavLink } from "react-router-dom";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef, useState } from 'react';
import { search_product } from '../../redux/actions';
import { getData } from '../../redux/reducer';
import CardSearch from '../CardSearch/CardSearch';

const cx = classNames.bind(styles)

function Header() {
    const dispatch = useDispatch()
    const [valueSelect, setValueSelect] = useState("converse")
    const [valueInput, setValueInput] = useState(" ")
    const cart = useSelector((state) => state.cart)
    const wishList = useSelector((state) => state.wishList)
    const search = useSelector((state) => state.search)
    const searchTable = useRef()
    const handleSelection = (e) => {
        setValueSelect(e.target.value)
    }
    const handleInput = (e) => {
        if(e.target.value !== "") {
            searchTable.current.style.visibility = "visible"
        }else {
            searchTable.current.style.visibility = "hidden"
        }
        setValueInput(e.target.value)
    }

    const closeTable = (e) => {
        searchTable.current.style.visibility = "hidden"
        setValueInput('')
    }
    useEffect(() => {
        getData(valueSelect).then((res) => {
            dispatch(search_product({valueSelect, valueInput, data: res}))
        })
    }, [valueInput])
    return ( 
        <header className = {cx('wrapper')}>
            <div className = {cx('header-top')}>
                <ul className = {cx('left')}>
                    <li>SUPER DEALS</li>
                    <li>FEAUTERED BRANDS</li>
                    <li>TRENDING STYLES</li>
                    <li>GIFT CARDS</li>
                </ul>
                <ul className = {cx('right')}>
                    <li>
                        <LocationOnOutlinedIcon className= {cx('icon')}/>
                        STORE LOCATOR
                    </li>
                    <li>
                        <SpeedOutlinedIcon className= {cx('icon')}/>
                        TRACK YOUR ORDER
                    </li>
                    <li>
                        <PermIdentityOutlinedIcon className= {cx('icon')}/>
                        MY ACCOUNT
                    </li>
                </ul>
            </div>
            <div className = {cx('header-center')}>
                <div className={cx('logo')}>
                    <img src= "https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/330792045_906205124059294_4085629072268103409_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=w30CTezSq7IAX_RnyXg&_nc_ht=scontent.fhan17-1.fna&oh=03_AdT55uGOVz3rwBDzmVdqx41VVG7arVzHhVzJZKKEJV-dxA&oe=6412FB1E" alt='logo'/>
                </div>
                <div className={cx('search')}>
                    <select name='clothing' className= {cx('clothing')} onChange = {handleSelection}>
                        <option value= "converse">Converse</option>
                        <option value= "vans">Vans</option>
                        <option value= "champion">Champion</option>
                        <option value= "converseAccessory">Converse accessory</option>
                        <option value= "vanAccessory">Vans accessory</option>
                        <option value= "fungus">Fungus</option>
                    </select>
                    <input placeholder='Search for Product...' onChange={handleInput} value = {valueInput}/>
                    <button>
                        <SearchOutlinedIcon className= {cx('icon')}/>
                    </button>
                </div>
                <div className= {cx('search-table')} ref = {searchTable} onClick = {closeTable}>
                    {
                        search.map((value, index) => {
                                const data = {
                                    ...value,
                                    related_products: [...search]
                                }
                                return (
                                <NavLink key = {index} className= {cx('link')} to = {{pathname: `/products/${value.name}`}} state = {data}>
                                    <CardSearch name = {value.name} image = {value.image} price = {value.price}/>
                                </NavLink>
                                )
                            }
                        )
                    }
                </div>
                <div className= {cx('action')}>
                    <div className={cx('favorite-products')}>
                        <FavoriteBorderOutlinedIcon className= {cx('icon')}/>
                        <div className= {cx('show-wishlist')}>
                            {
                                wishList.length > 0 && wishList.map((value, index) => {
                                    return (
                                        <div key={index} className = {cx('wishlist-item')}>
                                            <img src= {value.image}/>
                                            <p>{value.name}</p>
                                        </div>
                                    )
                                }) || <p>Empty</p>
                            }
                        </div>
                    </div>
                    <NavLink className={cx('link')} to = "/cart">
                        <div className={cx('cart')} title = "See your cart">
                            <span>{cart.length}</span>
                            <ShoppingCartOutlinedIcon className= {cx('icon')}/>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className = {cx('header-bottom')}>
                <div className= {cx('header-bottom_content')}>
                    <ul>
                        <Link className = {cx('link')} to= "/">
                            <li>Home</li>
                        </Link>
                        <li>Pages</li>
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>Elements</li>
                    </ul>
                    <p className= {cx('phone-number')}>
                        Call us for free: (+1)866-540-3229
                    </p>
                </div>
            </div>
        </header>
     );
}

export default Header;