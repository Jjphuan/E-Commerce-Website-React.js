import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import style from './NavBar.module.css';


function Nav(){

    const [menu,setMenu] = useState("shop");

    return(
        <div className={style.navbar}>
            <div className={style.right}>
                <img src={logo} alt="GoBuy.logo" className={style.logo}/>
                <p className={style.title}>GoBuy</p>
            </div>
            <ul className={style.list}>
                <li onClick={()=>{setMenu("shop")}}><Link to="/" style={{textDecoration:'none'}}><p>Home</p></Link>{menu === "shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("ram")}}><Link to="/ram" style={{textDecoration:'none'}}><p>RAM</p></Link>{menu === "ram"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("gpu")}}><Link to="/gpu" style={{textDecoration:'none'}}><p>GPU</p></Link>{menu === "gpu"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("cpu")}}><Link to="/cpu" style={{textDecoration:'none'}}><p>CPU</p></Link>{menu === "cpu"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("storage")}}><Link to="/storage" style={{textDecoration:'none'}}><p>STORAGE DEVICE</p></Link>{menu === "storage"?<hr/>:<></>}</li>
            </ul>
            <div className={style.right}>
                <Link to="/signup"><button className={style.login}>Sign up</button></Link>
                <Link to="/cart">
                    <i style={style.cart}><FontAwesomeIcon icon={faCartShopping}/></i>
                </Link>
            </div>
        </div>
    )
}

export default Nav