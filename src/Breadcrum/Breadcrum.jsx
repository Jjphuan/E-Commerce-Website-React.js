
function Breadcrum(props){

    const style = {
        fontSize: "15px",
        margin: "5px",
    }

    return(
        <div style={style}>
            HOME → SHOP → {props.category} → {props.name}
        </div>
    )
}

export default Breadcrum