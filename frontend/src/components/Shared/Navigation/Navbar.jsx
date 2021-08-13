import {Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {


    const linkStyle={
        color:'#fff',
        textDecoration:'none',
        fontWeight:'bold',
        fontSize:'1.25rem',
        display:'flex',
        alignItems:'center',
    };

    const logoText = {
        marginLeft: '0.625rem',
    };

    return (
        <nav className={`${styles.navbar} container`}>
            <Link style={linkStyle} to="/">
            <img src="/images/logo.png" alt="logo" srcset="" />
            <span style={logoText}>Codershouse</span>
            </Link>
        </nav>
    )
}

export default Navbar
