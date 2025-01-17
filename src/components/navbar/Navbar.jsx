import './Navbar.css';
import logo from '../../assets/logo.png';
import { GrContact } from "react-icons/gr";
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="Logo" className='logo'/>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
                <Link className="desktopMenuListItem">Clients</Link>
            </div>
            <button className='desktopMenuBtn'>
            <GrContact className='desktopMenuImg'/>Contact me
            </button>
        </nav>
    );
};

export default Navbar;