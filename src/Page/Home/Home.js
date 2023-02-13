import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import SideBar from '../../Layout/SideBar/SideBar';
import Content from '../../Layout/Content/Content';

const cx = classNames.bind(styles)
function Home() {
    return ( 
        <div className= {cx('wrapper')}>
            <div className= {cx('side-bar')}>
                <SideBar />
            </div>
            <div className= {cx('content')}>
                <Content />
            </div>
        </div>
    );
}

export default Home;