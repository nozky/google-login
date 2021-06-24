import React,{ useState } from 'react'
import './App.css';
import GoogleLogin from 'react-google-login'


function App() {
 const [res, setRes] = useState(null)
 const [error, setError] = useState(null)

// googleLogin callback
const responseGoogle =(response)=>{
  if( response.error){
    setError(response.details)
  }else{
    console.log( response.profileObj )
    setRes( response.profileObj )
  }
}

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
      
      {error && <h5 style={{color:"red"}}><span style={{color:"black"}}>ERROR:</span> {error && error}</h5>}
    </div>
  );
}

export default App;


// component
const MsgBox = ({msg})=> {
  return(
    <>
      <h2>{msg}</h2>
    </>
  )
}