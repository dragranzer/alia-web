import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../assets/css/TentangKami.module.css';
import image from '../assets/img/image 22.png'

function TentangKami() {
    return (
        <div>
            <Navbar/>
            <div className={styles.header}>
                <div className={styles.pages}>
                    Kami Adalah
                </div>
                <div className={styles.title}>
                    Totalitas Teknik Indonesia
                </div>
            </div>
            <div className={styles.body}>
                Kami merupakan Agen Alia wilayah jawa timur. PT ALIA INDONESIA (ALIA TEKNIK)
                sendiri merupakan Marketing & Support Center Indonesia untuk BRAND ALIA (USA). 
                Kami memberikan berbagai solusi untuk berbagai permasalahan khususnya Fields Instrumentation, 
                Otomation Procces dan Analiticall System. Kami menawarkan berbagai layanan teknis, konsultasi, 
                desain system di tempat commissioning, pelatihan dan pemeliharaan. Dengan pengetahuan teknis dan 
                pengalaman yang kuat di berbagai industri, memungkinkan kami untuk memastikan jalur cepat penyelesaian 
                proyek untuk memenuhi kebutuhan customer. 
            </div>
            <div className={styles.hiasan}>
                <div className={styles.leftItem}>
                    <img src={image} alt="" />
                </div>
                <div className={styles.rightItem}>
                    <div className={styles.title2}>
                        Tunggu Apa Lagi
                        Pesan Sekarang Juga
                    </div>
                    <div className={styles.detail}>
                        Mulai dengan menjelajahi katalog kami, & jangan ragu untuk menghubungi kami.
                    </div>
                    <div className={styles.button}>
                        Jelajahi Katalog
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default TentangKami
