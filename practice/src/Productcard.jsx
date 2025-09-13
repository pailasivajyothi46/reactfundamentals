import "./Productcard.css"
function Productcard(product) {
    const stylevariable = {
        fontSize: "20px",
        fontWeight: "bold",
        color: "black"
    }

    return (
        <div className="container">
            <p style={stylevariable}>product name:{product.pname}</p>
            <p className="price">price :{product.pprice}</p>
            {product.pavailable === true ? <p className="gecol">in stock</p> : <p className="recol">out of stock</p>}
        </div>

    )
}
export default Productcard;