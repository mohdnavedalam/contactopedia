import Logo from '../images/logo192.png';
import '../CSS/style.css';

const Header = () => {
    return (
        <div className='banner-style py-3'>
            <img src={Logo} className='logo-style px-3' />
            <h1 className='heading1'>Contactopedia</h1>
        </div>
    );
};

export default Header;