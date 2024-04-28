import style from "./Notification.module.css";

function Notification(){
    return(
        <div className={style.container}>
            <div className={style.subscribe}>
                <h1 className={style.title}>Subscribe Us to Stay updated</h1>
                <div className={style.subBar}>
                    <input type="email" className={style.email} placeholder="Send to your email"/>
                    <button className={style.subcbtn}>SEND</button>
                </div>
            </div>
        </div>
    )
}

export default Notification