import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../assets/css/Produk.module.css';
import * as AiIcons from "react-icons/ai";
import {useHistory} from "react-router-dom";

function Produk() {
    let history = useHistory();
    const [category, setCategory] = useState([
        {
            id:1,
            title:"Barang1",
            series:[
                {
                    id:1,
                    name: "series1",
                    image: "https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz",
                },
                {
                    id:2,
                    name: "series2",
                    image: "https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz",
                },
                {
                    id:3,
                    name: "series3",
                    image: "https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz",
                },
                {
                    id:4,
                    name: "series4",
                    image: "https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz",
                }
            ]
        },
        {
            id:2,
            title:"Barang2",
            series:[
                {
                    id:5,
                    name: "series11",
                    image: "https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz",
                },
                {
                    id:6,
                    name: "series22",
                    image: "https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz",
                },
                {
                    id:7,
                    name: "series33",
                    image: "https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz",
                }
            ]
        },
        {
            id:3,
            title:"Barang3",
            series:[]
        },
        {
            id:4,
            title:"Barang14",
            series:[]
        },
        {
            id:5,
            title:"Barang1",
            series:[]
        },
        {
            id:6,
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
    const goDetail = (id) => {
        history.push(`/produk/${id}`)
    }
    return (
        <div>
            <Navbar/>
            <div className={styles.header}>
                <div className={styles.pages}>
                    Catalogue
                </div>
                <div className={styles.title}>
                    Explore Products
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
                <div className={styles.product}>
                    {
                        category.map((item, index)=>{
                            return(
                                <div key={index} >
                                    <div className={styles.titleProduct}>
                                        {item.title}
                                    </div>
                                    <div className={styles.barang}>
                                        {
                                            item.series.map((item2, index2)=>{
                                                return(
                                                    <div key={index2} className={styles.series} onClick={() => goDetail(item2.id)}>
                                                        <img src={item2.image} alt="" />
                                                        <div className={styles.titleSeries}>
                                                            {item2.name}
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Produk
