import style from './DescriptionBox.module.css';

function DescriptionBox(){

    return(
        <div className={style.container}>
            <div className={style.titles}>
                <h4 className={style.title_des}>Descrition</h4>
                <h4 className={style.title_rev} id='rev'>Reviews</h4>
            </div>
            <div className={style.details}>
                <p className={style.des_detail}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, dignissimos? Perferendis beatae voluptates nisi, inventore facilis labore odio rerum nobis velit laudantium nihil sequi quo deserunt modi minus! Repellendus, saepe.
                </p>
                <p className={style.rev_detail}>No Review yet</p>
            </div>
        </div>
    )
}

export default DescriptionBox