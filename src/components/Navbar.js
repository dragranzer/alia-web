import React from 'react';
import styles from '../assets/css/Navbar.module.css';
import logo from '../assets/img/logo.png';
import * as FaIcons from "react-icons/fa";

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.RightItem}>
                    <img src={logo} alt="" />
                    <div className={styles.item}>
                        Produk
                    </div>
                    <div className={styles.item}>
                        Mengapa Kami
                    </div>
                    <div className={styles.item}>
                        Kontak Kami
                    </div>
                    <div className={styles.item}>
                        Tentang Kami
                    </div>
                </div>
                <div className={styles.search}>
                    <input type="text" placeholder="    Cari Produk ..."/>
                    <FaIcons.FaSearch size={25}/>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Navbar
