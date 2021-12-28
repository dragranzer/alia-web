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
