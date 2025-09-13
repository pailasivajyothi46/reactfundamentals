import "./App.css"
import { useState } from "react"
// import ButtonClick from "./ButtomClick.jsx"
function App() {
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [formData,setformData]=useState({
    email:"",
    password:""
  })
  
  const handleIncreement = () => {
    setCount((prevCount) => (prevCount + 1))
    console.log(count)
  }

  const handleEmail = (event) => {

    setEmail(event.target.value)

  }
  const handlePassword = (event) => {
    setPassword(event.target.value)

  }


  const handleclick = (name) => {
    console.log("you clicked a button")
    alert("hello" + " " + name)
  }
  const handleChange = (event) => {

    // console.log(event.target.name)
    // console.log(event.target.value)
    setformData({
      ...formData,
      [event.target.name]:event.target.value
  })

  }
  const handleSubmit=(event) => {
    event.preventDefault();
    alert(`email:${formData.email}\n password:${formData.password} \n you are logged in`)
  }

  return (


    <div >
      
        <p>i am abutton</p>
{/* //  <input type="text" name="myName" placeholder="type your name" onChangr={handlechange} />

//  <button onClick={() => handelclick("jyothi")}> click me</button>   */} 
      {<form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="type your email" onChange={handleChange} />
        <input type="password" name="password" placeholder="type your password" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>submit</button>
      </form>
      }
      {/* <p>{count}</p>
       <button onClick={handleIncreement}> increement</button> */}

    </div>
  )
}

export default App
