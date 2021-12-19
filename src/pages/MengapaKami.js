import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../assets/css/MengapaKami.module.css';
import ic_globe from '../assets/img/ic_globe.png';
import ic_globe1 from '../assets/img/ic_globe-1.png';
import ic_globe2 from '../assets/img/ic_globe-2.png';
import ic_globe3 from '../assets/img/ic_globe-3.png';
import caraPembelianimg from '../assets/img/caraPembelian.png';
import timeline from '../assets/img/Timeline.png';

function MengapaKami() {
    return (
        <div>
            <Navbar/>
            <div className={styles.header}>
                <div className={styles.pages}>
                    Our value
                </div>
                <div className={styles.title}>
                    Mengapa Harus Kami?
                </div>
            </div>
            <div className={styles.caraPemesanan}>
                <div className={styles.containerImg}>
                    <img src={caraPembelianimg} alt="" />
                    <img src={timeline} alt="" />
                </div>
            </div>
            <div className={styles.benefit}>
                <div className={styles.cap1}>
                    Kami terpercaya
                </div>
                <div className={styles.cap2}>
                    Mengapa Harus Kami
                </div>
                <div className={styles.listImg2}>
                    <div className={styles.content}>
                        <img src={ic_globe} alt="" />
                        <div className={styles.title2}>
                            Kualitas Terbaik
                        </div>
                        <div className={styles.cap4}>
                            Produk Alia sudah terbukti berkualitas dan Terbaik
                        </div>
                    </div>
                    <div className={styles.content}>
                        <img src={ic_globe1} alt="" />
                        <div className={styles.title2}>
                            Kualitas Terbaik
                        </div>
                        <div className={styles.cap4}>
                            Produk Alia sudah terbukti berkualitas dan Terbaik
                        </div>
                    </div>
                    <div className={styles.content}>
                        <img src={ic_globe2} alt="" />
                        <div className={styles.title2}>
                            Kualitas Terbaik
                        </div>
                        <div className={styles.cap4}>
                            Produk Alia sudah terbukti berkualitas dan Terbaik
                        </div>
                    </div>
                    <div className={styles.content}>
                        <img src={ic_globe3} alt="" />
                        <div className={styles.title2}>
                            Kualitas Terbaik
                        </div>
                        <div className={styles.cap4}>
                            Produk Alia sudah terbukti berkualitas dan Terbaik
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={styles.tempatTepat}>
                <div className={styles.text}>
                    <div className={styles.title3}>
                        Anda ditempat yang tepat, Tunggu Apa Lagi?
                    </div>
                    <div className={styles.cap5}>
                        Mulai dengan menjelajahi produk, dan jangan ragu untuk menghubungi kami.
                    </div>
                    <div className={styles.jelajahBtn}>
                        <div className={styles.center}>
                            Jelajahi Produk
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default MengapaKami
