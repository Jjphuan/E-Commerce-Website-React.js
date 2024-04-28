import Notification from "../Notification/Notification";
import Popular from "../Popular/popular";
import "./pages_css/Pages.css";

function Shop(){

    

    return(
        <>
            <div className="main-page">
                <h1 className="main-title">GoBuy Shop</h1>
                <p className="main-details">Enhance Your Tech, Elevate Your Experience!</p>
                <button className="main-button">See more popular product ➡️</button>
            </div>
            <Popular/>
            <Notification/>
        </>
    )
}

export default Shop