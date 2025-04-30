'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Logo
                </Link>
                
                <button 
                    className={styles.menuButton}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={styles.menuIcon}></span>
                </button>

                <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
                    <Link href="/" className={styles.navLink}>
                        Главная
                    </Link>
                    <Link href="/about" className={styles.navLink}>
                        О нас
                    </Link>
                    <Link href="/contact" className={styles.navLink}>
                        Контакты
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 