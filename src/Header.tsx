import logo from "../src/images/logo192.png";
import "../src/CSS/style.css";
const Header = () => {
  return (
    <div>
      <div className="banner-style py-3">
        <img src={logo} className="logo-style px-3" />
        <h1 className="heading1">Countopedia</h1>        
      </div>
    </div>
  );
};

export default Header;
