import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../assets/css/KontakKami.module.css';

function KontakKami() {
    return (
        <div>
            <Navbar/>
            <div className={styles.header}>
                <div className={styles.pages}>
                    Need our help?
                </div>
                <div className={styles.title}>
                    Kontak Kami
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.inputText}>
                    <div className={styles.item}>
                        <div className={styles.title2}>
                            Perusahaan
                        </div>
                        <input type="text" placeholder="Masukkan Nama Perusahaan ..."/>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title2}>
                            Nama
                        </div>
                        <input type="text" placeholder="Masukkan Nama ..."/>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title2}>
                            Website
                        </div>
                        <input type="text" placeholder="Masukkan Website ..."/>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title2}>
                            Jenis Kelamin
                        </div>
                        <select type="text" placeholder="Pilih Gender ...">
                            <option value="" disabled selected >Pilih Gender ...</option>
                            <option value="">Male</option>
                            <option value="">Female</option>
                        </select>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title2}>
                            Telepon
                        </div>
                        <input type="number" placeholder="Masukkan Nomor Telepon ..."/>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title2}>
                            Email
                        </div>
                        <input type="text" placeholder="Masukkan Email ..."/>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title2}>
                            Alamat
                        </div>
                        <input type="text" placeholder="Masukkan Alamat ..."/>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title2}>
                            Kota
                        </div>
                        <input type="text" placeholder="Masukkan Kota ..."/>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title2}>
                            Negara
                        </div>
                        <input type="text" placeholder="Masukkan Negara ..."/>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title2}>
                            Kode Pos
                        </div>
                        <input type="text" placeholder="Masukkan Kode Pos ..."/>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title2}>
                            Catatan
                        </div>
                        <textarea type="text" placeholder="Mohon isi konten konsultasi atau catatan agar kami mengeri kebutuhan anda ..."/>
                    </div>
                </div>
                <div className={styles.inputCheck}>
                    <div className={styles.title3}>
                        Tertarik dengan
                    </div>
                    <div className={styles.checkData}>
                        <div className={styles.item2}>
                            <input type="checkbox" />
                            <div className={styles.detail}>
                                Flowmeter
                            </div>
                        </div>
                        <div className={styles.item2}>
                            <input type="checkbox" />
                            <div className={styles.detail}>
                                Watermeter
                            </div>
                        </div>
                        <div className={styles.item2}>
                            <input type="checkbox" />
                            <div className={styles.detail}>
                                Gaussian
                            </div>
                        </div>
                        <div className={styles.item2}>
                            <input type="checkbox" />
                            <div className={styles.detail}>
                                Flowmeter
                            </div>
                        </div>
                        <div className={styles.item2}>
                            <input type="checkbox" />
                            <div className={styles.detail}>
                                Flowmeter
                            </div>
                        </div>
                        <div className={styles.item2}>
                            <input type="checkbox" />
                            <div className={styles.detail}>
                                Flowmeter
                            </div>
                        </div>
                        <div className={styles.item2}>
                            <input type="checkbox" />
                            <div className={styles.detail}>
                                Flowmeter
                            </div>
                        </div>
                        <div className={styles.item2}>
                            <input type="checkbox" />
                            <div className={styles.detail}>
                                Flowmeter
                            </div>
                        </div>
                        <div className={styles.item2}>
                            <input type="checkbox" />
                            <div className={styles.detail}>
                                Flowmeter
                            </div>
                        </div>
                        <div className={styles.item2}>
                            <input type="checkbox" />
                            <div className={styles.detail}>
                                Flowmeter
                            </div>
                        </div>
                        <div className={styles.item2}>
                            <input type="checkbox" />
                            <div className={styles.detail}>
                                Flowmeter
                            </div>
                        </div>
                        <div className={styles.item2}>
                            <input type="checkbox" />
                            <div className={styles.detail}>
                                Flowmeter
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default KontakKami
