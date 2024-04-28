import style from './DisplayProduct.module.css';

function DisplayProduct(props){

    return(
        <div className={style.product}>
            <div className={style.right_wrapper}>
                <img className={style.image} src={props.image}/>
            </div>
            <div className={style.left_wrapper}>
                <h1 className={style.productname}>{props.name}</h1>
                <h3 >Features:</h3>
                <ul className={style.featureUL}>
                    {Object.entries(props.features).map(([key,value]) => (
                        <li className={style.featureLI} key={key}>{value}</li>
                    ))}
                </ul>
                <div className={style.addcart}><button className={style.button}>ADD TO CART</button></div>

            </div>
        </div>
    )
}

export default DisplayProduct