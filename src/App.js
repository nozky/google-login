import React,{ useState } from 'react'
import './App.css';
import GoogleLogin from 'react-google-login'



function App() {

 const [res, setRes] = useState(null)
 const [btnState, setBtnState] = useState("off")

// googleLogin callback
const responseGoogle =(response)=>{
  setRes( response.profileObj )
}

console.log( res )

  return (
    <div className="App" >
      
      <h1>Google logIn</h1>
      
      <GoogleLogin 
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      { res? <img src={res.imageUrl} alt={res.imageUrl}/> : <MsgBox msg="No Data"/>}  

      {
        res? Object.keys(res).map( (key, index) => (
          <p key={index}>{`${key} : ${res[key]}`}</p>
        )) : <MsgBox msg="Please Sign in"/>
      }

      <p>Your information will not be save, this is for test purpose only...</p>

      <h3>{res? "Your Log in." : "Your not log in."}</h3>
      <p>test button state: {btnState}</p>
      <button onClick={()=> setBtnState("on")}>On</button>
      <button onClick={()=> setBtnState("off")}>Off</button>

    </div>
  );
}

export default App;


const MsgBox = ({msg})=> {
  return(
    <>
      <h2>{msg}</h2>
    </>
  )
}