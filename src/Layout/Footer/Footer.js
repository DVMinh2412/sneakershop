import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';


const cx = classNames.bind(styles)

function Footer() {
    return ( 
        <footer className= {cx('wrapper')}>
            <div className= {cx('footer-top')}>
                <div className= {cx('footer-top_right')}>
                    <ContactPhoneOutlinedIcon className= {cx('icon')}/>
                    <div className= {cx('content')}>
                        <h3>Call Center</h3>
                        <p>(734) 555.1212</p>
                    </div>
                </div>
                <div className= {cx('footer-top_center')}>
                    <LocalShippingOutlinedIcon  className= {cx('icon')}/>
                    <div className= {cx('content')}>
                        <h3>Free Delivery</h3>
                        <span>Free delivery on the territory of USA for all amounts over $100</span>
                    </div>
                </div>
                <div className= {cx('footer-top_left')}>
                    <CardGiftcardOutlinedIcon  className= {cx('icon')}/>
                    <div className= {cx('content')}>
                        <h3>Gift Cards</h3>
                        <p>Save Up To 20%</p>
                    </div>
                </div>
            </div>
            <div className= {cx('footer-center')}>
                <div className= {cx('footer-center_infor')}>
                    <h4>Get to Know Us</h4>
                    <ul>
                        <li>About us</li>
                        <li>Our Service</li>
                        <li>Store</li>
                        <li>Contact Us</li>
                        <li>Order Tracking</li>
                    </ul>
                </div>
                <div className= {cx('footer-center_service')}>
                    <h4>Customer Service</h4>
                    <ul>
                        <li>My account</li>
                        <li>Order Tracking</li>
                        <li>Pricing Plans</li>
                        <li>Terms & Conditions</li>
                        <li>Our Team</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className= {cx('footer-center_quickLink')}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li>Converse</li>
                        <li>Vans</li>
                        <li>Champion</li>
                        <li>Fungus</li>
                    </ul>
                </div>
                <div className= {cx('footer-center_contactUs')}>
                    <h4>Sign up to Newsletter</h4>
                    <div className= {cx('send-email')}>
                        <input type= "text" placeholder='Your Email Address...'/>
                        <button className= {cx('btn-send')}>
                            <SendOutlinedIcon className= {cx('icon')}/>
                        </button>
                    </div>
                    <p>Stay up to date with all the actions that we are saved for all our customers.</p>
                    <div className= {cx('social-media')}>
                        <FacebookOutlinedIcon className= {cx('icon-social')} />
                        <InstagramIcon className= {cx('icon-social')} />
                        <TwitterIcon className= {cx('icon-social')} />
                        <LinkedInIcon className= {cx('icon-social')} />
                        <PinterestIcon className= {cx('icon-social')} />
                    </div>
                </div>
            </div>
            <div className= {cx('footer-bottom')}>
                <p className= {cx('footer-bottom_copyRight')}>
                    © 2021 Qode Interactive, All Rights Reserved
                </p>
                <div className= {cx('footer-bottom_paymentMethod ')}>
                    <img src='../image/payment/visa.png' alt='visa'/>
                    <img src='../image/payment/masterCard.png' alt='mastercard'/>
                    <img src='../image/payment/paypal.png' alt='paypal'/>
                    <img src='../image/payment/westernunion.png' alt='westernunion'/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;