
import Productcard from "./Productcard.jsx"
function App() {
    const product="face cream"
    const price=200
    const isavailable=true
   

  return (
    
    <div>
      
    
     <Productcard pname={product} pprice={price} pavailable={isavailable}/>

    </div>
  )
}

export default App
