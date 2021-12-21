import React from 'react';
import successImg from '../assets/img/Group 1354.png';
import styles from '../assets/css/Success.module.css';

function Success() {
    return (
        <div className={styles.body}>
            <div className={styles.content}>
                <img src={successImg} alt="" />
                <div className={styles.title}>
                    Formulir Terkirim!
                </div>
                <div className={styles.description}>
                    Kami akan segera menindak lanjuti Permintaan anda. jangan ragu untuk langsung menghubungi kami via Whatsapp
                </div>
                <div className={styles.btn}>
                    <div className={styles.home}>
                        Kembali Home
                    </div>
                    <div className={styles.wa}>
                        Chat Whatsapp
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success
