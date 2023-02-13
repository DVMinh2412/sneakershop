import classNames from "classnames/bind";
import styles from './CardSearch.module.scss'
import Function from "../../function/Function";

const cx = classNames.bind(styles)
function CardSearch(value) {
    return ( 
        <div className= {cx('wrapper')}>
            <div className= {cx('image-product')}>
                <img src= {value.image}/>
            </div>
            <div className= {cx('content')}>
                <h4>{value.name}</h4>
                <p>{Function(value.price)} VND</p>
            </div>
        </div>
    );
}

export default CardSearch;