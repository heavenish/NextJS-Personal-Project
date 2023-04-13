import React from 'react';
import styles from './Header.module.scss';
import NextLink from 'next/link';
import { FaReact } from 'react-icons/fa';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoIcon}>
        <FaReact size={32} />
      </div>
      <nav className={styles.navigation}>
        <NextLink href="/" passHref>
          <span className={styles.navLink}>Home</span>
        </NextLink>
        <div className={styles.dropdown}>
          <NextLink href="/about" passHref>
            <span className={styles.navLink}>About</span>
          </NextLink>
          <div className={styles.dropdownContent}>
            <div className={styles.dropdown}>
              <a href="#">Widgets</a>
              <div className={styles.dropdownContent}>
                <a href="#">Calculator Widget</a>
                <a href="#">Weather Widget</a>
              </div>
            </div>
            <a href="#">Work</a>
            <a href="#">Anchor Item</a>
          </div>
        </div>
        <NextLink href="/contact" passHref>
          <span className={styles.navLink}>Contact</span>
        </NextLink>
      </nav>
    </header>
  );
};

export default Header;
