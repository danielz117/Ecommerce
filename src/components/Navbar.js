import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";

function Navbar({ totalItems }) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick = {closeMobileMenu}>
                        PlushAholic <img className="name-icon" src={require('./assets/images/plushIcon.png').default} />
                    </Link>
                    <div className="menu-icon" onClick = {handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick = {closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick = {closeMobileMenu}>
                                Collections
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/cart' className='nav-links' onClick = {closeMobileMenu}>
                            <div>
                                <Badge color="secondary" badgeContent={totalItems}>
                                <ShoppingCartIcon />{" "}
                                </Badge>
                                <ButtonGroup>
                                
                                </ButtonGroup>
                            </div>
                            </Link>
                        </li>
                    </ul>
                    {/*button && <Button buttonStyle='btn--primary'>SIGN UP</Button>*/}
                </div>
            </nav>
        </>
    );
}

export default Navbar
