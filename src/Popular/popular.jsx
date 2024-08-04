import { React } from "react";
import { popular } from '../assets/popular';
import style from "./popular.module.css";

function Popular(){

    return(
        <div className={style.sect}>
            <p className={style.top}>Popular</p>
            <div className={style.wrapproduct}>
                {popular.map(item => (
                    <div key={item.id} className={style.product}>
                        <img className={style.pic} src={item.image} alt={item.image.replace("src/assets/","")}/>
                        <div className={style.bar}>
                            <p className={style.item_name}>{item.name}</p>
                            <p className={style.price}>Price:{item.price}</p>
                            <button className={style.details}>More details</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Popular