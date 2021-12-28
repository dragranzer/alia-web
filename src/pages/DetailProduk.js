import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../assets/css/Produk.module.css';
import * as AiIcons from "react-icons/ai";
import {useParams} from "react-router-dom";

function DetailProduk() {
    const { id } = useParams();

    const [detailData, setDetailData] = useState({
        name: "series1",
        image: "https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz",
        fitur: "",
        spesofication: "",
        link_decument: ""
    })
    const [category, setCategory] = useState([
        {
            title:"Barang1",
            series:[
                {
                    name: "series1",
                    image: "https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz",
                },
                {
                    name: "series2",
                    image: "https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz",
                },
                {
                    name: "series3",
                    image: "https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz",
                },
                {
                    name: "series4",
                    image: "https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz",
                }
            ]
        },
        {
            title:"Barang2",
            series:[
                {
                    name: "series11",
                    image: "https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz",
                },
                {
                    name: "series22",
                    image: "https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz",
                },
                {
                    name: "series33",
                    image: "https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz",
                }
            ]
        },
        {
            title:"Barang3",
            series:[]
        },
        {
            title:"Barang14",
            series:[]
        },
        {
            title:"Barang1",
            series:[]
        },
        {
            title:"Barang1",
            series:[]
        },
    ])

    const [toggle, setToggle] = useState(
        {
            flowmeter: false,
            flowmeter1: false,
            flowmeter2: false,
            flowmeter3: false,
            flowmeter4: false
        }
    );

    const showFlowmeter = () => {
        setToggle({
            ...toggle,
            flowmeter: !toggle.flowmeter,
        })
    };

    return (
        <div>
            <Navbar/>
            <div className={styles.header}>
                <div className={styles.pages}>
                    Pelajari Lebih Lanjut
                </div>
                <div className={styles.title}>
                    Detail Produk
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.dropdown}>
                    <div>
                        <div className={toggle.flowmeter ? styles.item1Active:styles.item1} onClick={showFlowmeter}>
                            <div className={toggle.flowmeter ? styles.categoryActive:styles.category}>
                                Flowmeter
                            </div>
                            {
                                toggle.flowmeter ? 
                                <AiIcons.AiOutlineUp size={15}/>
                                :
                                <AiIcons.AiOutlineDown size={15}/>
                            }
                        </div>
                        {
                            toggle.flowmeter ?
                                <div className={styles.containerDrop}>
                                    {
                                        category.map((item, index) => {
                                            return(
                                                <div key={index} className={styles.dropItem}>
                                                    {item.title}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            :
                            <div className={styles.containerBack}>

                            </div>
                        }
                    </div>
                    <div className={styles.item}>
                        <div className={styles.category}>
                            Flowmeter
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.category}>
                            Flowmeter
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.category}>
                            Flowmeter
                        </div>
                    </div>
                </div>
                <div >
                    <img src={detailData.image} alt="" />
                    <div>
                        {detailData.name}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default DetailProduk
