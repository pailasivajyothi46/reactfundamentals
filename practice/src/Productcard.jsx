function Productcard({pname,pprice,pavailable}){
   
    return(
        <div>
            <p>product name:{pname}</p>
            <p>price :{pprice}</p>
            <p>{pavailable===true?" in stock":"out of stock"}</p>
        </div>
    
    )
}
export default Productcard;