import classNames from 'classnames/bind';
import styles from './Content.module.scss'
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import Card from '../Card/Card'

const cx = classNames.bind(styles)

function Content() {
    const show = useSelector((state) => state.show)
    if(show !== undefined) {
        const relatedProducts = [...show]
        return ( 
            <div className= {cx('wrapper')}>
                {
                    show.map((value, index) => 
                        <Card 
                            key = {index}
                            id = {value.id} 
                            name = {value.name}
                            code = {value.code}
                            image = {value.image}
                            price = {value.price}
                            sale = {value.sale}
                            related_products = {relatedProducts}
                        />
                    )
                }
            </div>
        );
    }
    
}

export default Content;