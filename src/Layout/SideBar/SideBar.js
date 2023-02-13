import classNames from 'classnames/bind'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change_categories, change_price, change_sortby } from '../../redux/actions'
import { getData } from '../../redux/reducer'
import styles from './SideBar.module.scss'

const cx = classNames.bind(styles)

function SideBar() {
    const cate = useRef(null)
    const sort = useRef(null)
    const price = useRef(null)
    const dispatch = useDispatch()
    useEffect(() => {
        const categories = cate.current
        const sortBy = sort.current
        const priceRange = price.current
        const list_categories = (categories.querySelectorAll("li"))
        const list_sortBy = (sortBy.querySelectorAll("li"))
        const list_price = (priceRange.querySelectorAll("li"))
        list_categories.forEach((value, index) => {
            value.onclick = () => {
                getData(value.getAttribute("value")).then((res) => {
                    dispatch(change_categories({key:value.getAttribute("value"), data: res}))
                })
                const check = document.querySelector(`.${cx('categories-active')}`)
                if(check != null)
                    document.querySelector(`.${cx('categories-active')}`).classList.remove(`${cx('categories-active')}`)
                value.classList.add(`${cx('categories-active')}`)
            }
        })
        list_sortBy.forEach((value, index) => {
            value.onclick = () => {
                const data = document.querySelector(`.${cx('categories-active')}`)
                getData(data.getAttribute("value")).then((res) => {
                    dispatch(change_sortby({key:value.getAttribute("value"), data: res}))
                })
                const check = document.querySelector(`.${cx('sort-by-active')}`)
                if(check != null)
                    document.querySelector(`.${cx('sort-by-active')}`).classList.remove(`${cx('sort-by-active')}`)
                value.classList.add(`${cx('sort-by-active')}`)
            }
        })
        list_price.forEach((value, index) => {
            value.onclick = () => {
                const data = document.querySelector(`.${cx('categories-active')}`)
                getData(data.getAttribute("value")).then((res) => {
                    dispatch(change_price({key:value.getAttribute("value"), data: res}))
                })
                
                const check = document.querySelector(`.${cx('price-range-active')}`)
                if(check != null)
                    document.querySelector(`.${cx('price-range-active')}`).classList.remove(`${cx('price-range-active')}`)
                value.classList.add(`${cx('price-range-active')}`)
            }
        })
    }, [])
    return ( 
        <div className= {cx('wrapper')}>
            <div className = {cx('categories')}>
                <h4>Categories</h4>
                <ul ref={cate}>
                    <li value= 'All' className= {cx('categories-active')}>All</li>
                    <li value= 'converse'>Converse</li>
                    <li value= 'vans'>Vans</li>
                    <li value= 'champion'>Champion</li>
                    <li value= 'converseAccessory'>PK Converse</li>
                    <li value= 'vanAccessory'>PK Vans</li>
                    <li value= 'fungus'>Fungus</li>
                </ul>
            </div>
            <div className = {cx('sort-by')}>
                <h4>Sort By</h4>
                <ul ref={sort}>
                    <li value= "Default" className= {cx('sort-by-active')}>Default</li>
                    <li value= "Sale">Sale</li>
                    <li value= "Low to High">Price: Low to High</li>
                    <li value= "High to Low">Price: High to Low</li>
                </ul>
            </div>
            <div className = {cx('price-range')}>
                <h4>Price Range</h4>
                <ul ref={price}>
                    <li value= "All" className= {cx('price-range-active')}>All</li>
                    <li value= "200000">0 - 200.000 VND</li>
                    <li value= "400000">0 - 400.000 VND</li>
                    <li value= "600000">0 - 600.000 VND</li>
                    <li value= "800000">0 - 800.000 VND</li>
                    <li value= "800000+">800.000+ VND</li>
                </ul>
            </div>
        </div> 
    );
}

export default SideBar;