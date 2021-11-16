import React from 'react';
import styles from '../assets/css/Footer.module.css';
import logo from '../assets/img/logo.png';
import * as FaIcons from "react-icons/fa";

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.leftData}>
                <img src={logo} alt="" />
                <div>
                    Kami adalah solusi untuk berbagai masalah 
                    Fields Instrumentation, Otomation Procces 
                    dan Analiticall System.
                </div>
                <p>️<FaIcons.FaRegCopyright /> Copyright 2021. All Rights Reserved.</p>
            </div>
            <div className={styles.container}>
                <div className={styles.item}>
                    <div className={styles.title}>
                        Company
                    </div>
                    <div className={styles.detail}>
                        Tentang Kami
                    </div>
                    <div className={styles.detail}>
                        Produk Kami
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>
                        Support
                    </div>
                    <div className={styles.detail}>
                        Kontak Kami
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>
                        Totalitas Teknik Indonesia
                    </div>
                    <div className={styles.detail}>
                        zzzzzz@gmail.com
                    </div>
                    <div className={styles.detail}>
                        +62 123 456
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
