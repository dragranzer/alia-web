import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import headImg from '../assets/img/landing-1.png';
import banner1 from '../assets/img/banner1.jpg';
import banner3 from '../assets/img/banner3.jpg';
import ic_globe from '../assets/img/ic_globe.png';
import ic_globe1 from '../assets/img/ic_globe-1.png';
import ic_globe2 from '../assets/img/ic_globe-2.png';
import ic_globe3 from '../assets/img/ic_globe-3.png';
import caraPembelianimg from '../assets/img/caraPembelian.png';
import timeline from '../assets/img/Timeline.png';
import styles from '../assets/css/LandingPage.module.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../assets/css/slide.css';

function LandingPage() {
    const [img, setImg] = useState([
        {
            title:"Barang1",
            url:"https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz"
        },
        {
            title:"Barang1",
            url:"https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz"
        },
        {
            title:"Barang1",
            url:"https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz"
        },
        {
            title:"Barang1",
            url:"https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz"
        },
        {
            title:"Barang1",
            url:"https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz"
        },
        {
            title:"Barang1",
            url:"https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz"
        },
    ])
    
    console.log(img[0].url)
    return (
        <div>
            <Navbar />
            <div className={styles.body}>
                <Carousel infiniteLoop autoPlay interval="3000" className="main-slide">
                    <div className={styles.topImg}>
                        <img src={headImg} alt="" />
                    </div>
                    <div className={styles.topImg}>
                        <img src={banner1} alt="" />
                    </div>
                    <div className={styles.topImg}>
                        <img src={banner3} alt="" />
                    </div>
                </Carousel>
                <div className={styles.favorite}>
                    <div className={styles.cap1}>
                        Jelajahi Katalog Kami
                    </div>
                    <div className={styles.cap2}>
                        Produk Pilihan
                    </div>
                    <div className={styles.cap3}>
                        Lihat Semua
                    </div>
                    <div className={styles.listImg}>
                        {
                            img.map((item, index) =>{
                                return(
                                    <div className={styles.img} key={index}>
                                        <img src={item.url} alt="" />
                                        <div>
                                            {item.title}
                                        </div>
                                    </div>
                                )
                            })
                        }
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
                <div className={styles.caraPemesanan}>
                    <div className={styles.containerImg}>
                        <img src={caraPembelianimg} alt="" />
                        <img src={timeline} alt="" />
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
                {/* <img src={img[0].url} alt="" /> */}
            </div>
            <Footer />
        </div>
    )
};
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default LandingPage
