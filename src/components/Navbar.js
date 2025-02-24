import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link to="/"> {/* Clicking the logo redirects to Home */}
          <img src={logo} alt="Populex Logo" className={styles.logo} />
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/women">Women</Link></li>
        <li><Link to="/accessories">Accessories</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search..." className={styles.searchInput} />
      </div>
    </nav>
  );
};

export default Navbar;
