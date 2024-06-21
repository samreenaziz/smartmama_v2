import './Header.scss'
import {Link} from "react-router-dom";


import logo from "../../assets/smartmom-logo1.png";


const Header = () => {
    return (
       <header className="header__container">
            <div className="header__logo--display">
                <Link className="header__logo-link" to="/">
                <img className="header__logo" src={logo} alt="SmartMom logo" />
                </Link>
            </div>
        </header>
      );

};

export default Header;
