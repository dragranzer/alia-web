import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../assets/css/KontakKami.module.css';
import {useHistory} from "react-router-dom";

function KontakKami() {
    let history = useHistory();
    const [pesan, setPesan] = useState({
        perusahaan: "",
        nama: "",
        website: "",
        gender: "",
        telepon: "",
        email: "",
        alamat: "",
        kota: "",
        negara: "",
        kodepos: "",
        catatan: "",
        tertarik: "",
    })

    const [tertarik, setTertarik] = useState([
        {
            id:1,
            name:"Barang1"
        },
        {
            id:2,
            name:"Barang2"
        },
        {
            id:3,
            name:"Barang3"
        },
        {
            id:4,
            name:"Barang4"
        },
        {
            id:5,
            name:"Barang5"
        },
        {
            id:6,
            name:"Barang6"
        },
        {
            id:7,
            name:"Barang7"
        },
        {
            id:8,
            name:"Barang8"
        },
        {
            id:9,
            name:"Barang9"
        },
        {
            id:10,
            name:"Barang10"
        },
        {
            id:11,
            name:"Barang11"
        },
        {
            id:12,
            name:"Barang12"
        },
    ])
    const [checkedState, setCheckedState] = useState(
        new Array(12).fill(false)
    );

    const handleOnChange = async (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);   
    }

    const submit = async () => {
        let list = []
        checkedState.map((item, index) => {
            if(item === true){
                list.push(tertarik[index-1]);
            }
        })
        history.push("/success")
        console.log("submit ",list)
    }
    const handleChange = (e) => {
        setPesan({
            ...pesan,
            [e.target.name] : e.target.value
        })
        console.log(pesan)
    }
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
                        <input type="text" placeholder="Masukkan Nama Perusahaan ..." 
                            name="perusahaan" value={pesan.perusahaan} onChange={handleChange}/>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title2}>
                            Nama
                        </div>
                        <input type="text" placeholder="Masukkan Nama ..."
                            name="nama" value={pesan.nama} onChange={handleChange}/>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title2}>
                            Website
                        </div>
                        <input type="text" placeholder="Masukkan Website ..."
                            name="website" value={pesan.website} onChange={handleChange}/>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title2}>
                            Jenis Kelamin
                        </div>
                        <select type="text" placeholder="Pilih Gender ..."
                            name="gender" value={pesan.gender} onChange={handleChange}>
                            <option value="" defaultValue >Pilih Gender ...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title2}>
                            Telepon
                        </div>
                        <input type="number" placeholder="Masukkan Nomor Telepon ..."
                            name="telepon" value={pesan.telepon} onChange={handleChange}/>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title2}>
                            Email
                        </div>
                        <input type="email" placeholder="Masukkan Email ..."
                            name="email" value={pesan.email} onChange={handleChange}/>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title2}>
                            Alamat
                        </div>
                        <input type="text" placeholder="Masukkan Alamat ..."
                            name="alamat" value={pesan.alamat} onChange={handleChange}/>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title2}>
                            Kota
                        </div>
                        <input type="text" placeholder="Masukkan Kota ..."
                            name="kota" value={pesan.kota} onChange={handleChange}/>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title2}>
                            Negara
                        </div>
                        <input type="text" placeholder="Masukkan Negara ..."
                            name="negara" value={pesan.negara} onChange={handleChange}/>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title2}>
                            Kode Pos
                        </div>
                        <input type="number" placeholder="Masukkan Kode Pos ..."
                            name="kodepos" value={pesan.kodepos} onChange={handleChange}/>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title2}>
                            Catatan
                        </div>
                        <textarea type="text" placeholder="Mohon isi konten konsultasi atau catatan agar kami mengeri kebutuhan anda ..."
                            name="catatan" value={pesan.catatan} onChange={handleChange}/>
                    </div>
                </div>
                <div className={styles.inputCheck}>
                    <div className={styles.title3}>
                        Tertarik dengan
                    </div>
                    <div className={styles.checkData}>
                        {
                            tertarik.map((item, index) =>{
                                return(
                                    <div className={styles.item2} key={item.id}>
                                        <input 
                                            type="checkbox" 
                                            checked={checkedState[item.id]}
                                            onChange={() => handleOnChange(item.id)}
                                        />
                                        <div className={styles.detail}>
                                            {item.name}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.btnSubmit} onClick={submit}>
                    Submit
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default KontakKami
