import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { popular } from '../assets/popular';
import style from './pages_css/category.module.css';

function ShopCategory(props){

    function shortname(name){
        if(name.length > 40){
            return(name.substr(0,40))+".....";
        }
        else{
            return name
        }
    }

    function settitle(){
        switch ((useLocation().pathname)) {
            case "/ram":
                return "Upgrade Your Performance !\n Unleash the Power of Lightning-fast RAM!";
                break;
        
            case "/gpu":
                return "Elevate Your Gaming ! Dive into Immersive Worlds with Cutting-Edge Graphics Power.";
                break;
            case "/cpu":
                return "Empower Your System ! Drive Innovation and Creativity with Powerful CPU Solutions.";
                break;
            case "/storage":
                return "Revolutionize Your Storage ! Experience Lightning-Fast Performance with Storage Device.";
                break;
            default:
                break;
        }
    }

    let show = popular.filter(cate =>
        cate.category === (useLocation().pathname.replace("/",""))).length <= 12
        ? popular.filter(cate => cate.category === (useLocation().pathname.replace("/",""))).length
        : 12;

    return(
        <div className={style.sect}>
            <div className={style.title}>
                <h2 className={style.slogan}>{settitle()}</h2>
            </div>
            <div className={style.bar}>
                <p className={style.alert}><b>Showing 1-{show}</b> out of {popular.filter(cate => cate.category === (useLocation().pathname.replace("/",""))).length} products</p>
                <div className={style.sort}>
                    <p >Sort<svg className={style.filter} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg></p>
                </div>
            </div>
            <div className={style.wrap}>
                {popular.map(item => {
                    if(props.category === item.category){
                        return (
                            <div className={style.product}>
                                <Link to={`/product/${item.id}`}><img className={style.pic} src={item.image} alt={item.image.replace("src/assets/","")}/></Link>
                                <div className={style.product_bar}>
                                    <p className={style.product_name}>{shortname(item.name)}</p>
                                    <p className={style.price}>Price:{item.price}</p>
                                    <button className={style.details}>More details</button>
                                </div>
                            </div>)
                    }
                    else{
                        return null;
                    }
                })}
            </div>
        </div>
    )
}

export default ShopCategory