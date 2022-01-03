import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../assets/css/DetailProduk.module.css';
import * as AiIcons from "react-icons/ai";
import {useParams} from "react-router-dom";

function DetailProduk() {
    const { id } = useParams();

    const [fitur, setFitur] = useState(`
    <ul>
        <li>Light and compact version </li>
        <li>Flow velocity range: 0-12 m/s, precise in low flow applications</li>
        <li>IDF Tri-Clamp or Union screw Connection</li>
        <li>Excellent for high pressure application</li>
    </ul>`);

    const [spesifikasi, setSpesifikasi] = useState(`
    <ul>
        <li>Spesifikasi 1 </li>
        <li>Spesifikasi 2</li>
        <li>Spek 3</li>
        <li>Excellent for high pressure application</li>
    </ul>`);

    const [download, setDownload] = useState(`
    <a href="#">Link dokument.pdf</a>
    `);

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
            presure: false,
            temperature: false,
            liquid: false,
            panel: false,
            other: false
        }
    );

    const showFlowmeter = () => {
        setToggle({
            ...toggle,
            flowmeter: !toggle.flowmeter,
        })
    };

    const showPresure = () => {
        setToggle({
            ...toggle,
            presure: !toggle.presure,
        })
    };

    const showTemperature = () => {
        setToggle({
            ...toggle,
            temperature: !toggle.temperature,
        })
    };

    const showLiquid = () => {
        setToggle({
            ...toggle,
            liquid: !toggle.liquid,
        })
    };

    const showPanel = () => {
        setToggle({
            ...toggle,
            panel: !toggle.panel,
        })
    };

    const showOther = () => {
        setToggle({
            ...toggle,
            other: !toggle.other,
        })
    };

    const [mode, setMode] = useState(
        {
            fitur: true,
            spesifikasi: false,
            download: false,
        }
    );

    const changeFitur = () => {
        setMode({
            fitur: true,
            spesifikasi: false,
            download: false,
        })
    };

    const changeSpesifikasi = () => {
        setMode({
            fitur: false,
            spesifikasi: true,
            download: false,
        })
    };

    const changeDownload = () => {
        setMode({
            fitur: false,
            spesifikasi: false,
            download: true,
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
                    <div className={toggle.presure ? styles.itemActive:styles.item} onClick={showPresure}>
                        <div className={toggle.presure ? styles.categoryActive:styles.category}>
                            Pressure & Differential Pressure
                        </div>
                        {
                            toggle.presure ? 
                            <AiIcons.AiOutlineUp size={15}/>
                            :
                            <AiIcons.AiOutlineDown size={15}/>
                        }
                    </div>
                    <div className={toggle.temperature ? styles.itemActive:styles.item} onClick={showTemperature}>
                        <div className={toggle.temperature ? styles.categoryActive:styles.category}>
                            Temperature & humidity
                        </div>
                        {
                            toggle.temperature ? 
                            <AiIcons.AiOutlineUp size={15}/>
                            :
                            <AiIcons.AiOutlineDown size={15}/>
                        }
                    </div>
                    <div className={toggle.liquid ? styles.itemActive:styles.item} onClick={showLiquid}>
                        <div className={toggle.liquid ? styles.categoryActive:styles.category}>
                            Liquid Level
                        </div>
                        {
                            toggle.liquid ? 
                            <AiIcons.AiOutlineUp size={15}/>
                            :
                            <AiIcons.AiOutlineDown size={15}/>
                        }
                    </div>
                    <div className={toggle.panel ? styles.itemActive:styles.item} onClick={showPanel}>
                        <div className={toggle.panel ? styles.categoryActive:styles.category}>
                            Panel Meter
                        </div>
                        {
                            toggle.panel ? 
                            <AiIcons.AiOutlineUp size={15}/>
                            :
                            <AiIcons.AiOutlineDown size={15}/>
                        }
                    </div>
                    <div className={toggle.other ? styles.itemActive:styles.item} onClick={showOther}>
                        <div className={toggle.other ? styles.categoryActive:styles.category}>
                            Other
                        </div>
                        {
                            toggle.other ? 
                            <AiIcons.AiOutlineUp size={15}/>
                            :
                            <AiIcons.AiOutlineDown size={15}/>
                        }
                    </div>
                </div>
                <div className={styles.RightData}>
                    <div className={styles.image}>
                        <img src={detailData.image} alt="" />
                    </div>
                    <div className={styles.name}>
                        {detailData.name}
                    </div>
                    <div className={styles.tampilData}>
                        <div className={mode.fitur ? styles.borderBot : styles.modeItem} onClick={changeFitur}>
                            Fitur
                        </div>
                        <div className={mode.spesifikasi ? styles.borderBot : styles.modeItem} onClick={changeSpesifikasi}>
                            Spesifikasi
                        </div>
                        <div className={mode.download ? styles.borderBot : styles.modeItem} onClick={changeDownload}>
                            Download
                        </div>
                    </div>
                    <div className={styles.data}>
                        {
                            mode.fitur ?
                            <div dangerouslySetInnerHTML={{__html: fitur}}></div>
                            :
                            <></>
                        }
                        {
                            mode.spesifikasi ?
                            <div dangerouslySetInnerHTML={{__html: spesifikasi}}></div>
                            :
                            <></>
                        }
                        {
                            mode.download ?
                            <div dangerouslySetInnerHTML={{__html: download}}></div>
                            :
                            <></>
                        }
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default DetailProduk
