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
        <NextLink href="/about" passHref>
          <span className={styles.navLink}>About</span>
        </NextLink>
        <NextLink href="/projects" passHref>
          <span className={styles.navLink}>Projects</span>
        </NextLink>
        <NextLink href="/contact" passHref>
          <span className={styles.navLink}>Contact</span>
        </NextLink>
      </nav>
    </header>
  );
};

export default Header;
