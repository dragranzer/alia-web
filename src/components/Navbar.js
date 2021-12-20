import React, {useState} from 'react';
import styles from '../assets/css/Navbar.module.css';
import logo from '../assets/img/logo.png';
import {useHistory} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { NavbarData } from "../components/NavbarData";

function Navbar() {
    // console.log(window.innerWidth);
    let history = useHistory();
    const [isDown, setIsDown] = useState(false);
    const setDown = () => {
        setIsDown(!isDown)
    }
    const redirect = async (path) => {
        history.push(path)
    }
    const goHome = async (path) => {
        history.push("/")
    }
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.container}>
                    <div className={styles.RightItem}>
                        <img src={logo} alt="" onClick={goHome}/>
                        <div className={styles.RightData}>
                        {
                            NavbarData.map((item, index) => {
                                return(
                                    <div className={styles.item} key={index} onClick={() => redirect(item.path)}>
                                        {item.title}
                                    </div>
                                )
                            })
                        }
                        </div>
                        
                    </div>
                    <div className={styles.hamburger} onClick={setDown}>
                        <FaIcons.FaBars size={30}/>
                    </div>
                    <div className={styles.search}>
                        <input type="text" placeholder="    Cari Produk ..."/>
                        <FaIcons.FaSearch size={25}/>
                    </div>
                </div>
            </div>
            <div className={isDown ? styles.dropdownActive : styles.dropdown} >
                {
                    NavbarData.map((item, index) => {
                        // console.log(isDown)
                        return(
                            <div className={styles.dropdownItem} key={index} onClick={() => redirect(item.path)}>
                                {item.title}
                            </div>
                        )
                    })
                }
                <div className={styles.searchDown}>
                    <input type="text" placeholder="    Cari Produk ..." size="30"/>
                    <FaIcons.FaSearch size={25}/>
                </div>
            </div>
        </>
    )
}

export default Navbar
