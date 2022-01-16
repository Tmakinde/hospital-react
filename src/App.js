import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Dashboard from './components/Dashboard'
import Appointment from './components/Appointment'
//import { navigate, Router } from "@reach/router"
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  const [token, settoken] = useState(null)

  const checkUser = (email, password) => {
    axios.post('http://localhost:8000/api/patient/login',{  
      email:email,
      password:password
    }, 
    {
      withCredentials: true,
      credentials: 'include',
      headers: {'Access-Control-Allow-Origin':'http://localhost:3000'}
    }).then(function(response){
      settoken(response.data.token)
      //navigate('/dashboard')

    }).catch(function (error) {
      console.log(error);
    })
  }

  const getRefreshToken  = () =>{
    axios.get('http://localhost:8000/api/refresh_token',{
      withCredentials: true,
      headers: {'Access-Control-Allow-Origin':'http://localhost:3000'}
    }).then(function(response){
      settoken(response.data.token);

      //set timeout for token
      setTimeout(() => {
        getRefreshToken()
      }, 40)

    }).catch(function (error) {
      //redirect to loginpage here
      console.log(error);
    })
  }

  useEffect(() => {
    
    getRefreshToken();

  }, [token])

  return (
    <Router>

      { <>
        <Route path="/" exact render={ (props) => (
            <>
              <Header content="LOGIN PAGE" />
              <Login getCredentials={checkUser} />
            </>
          )} />
        
        <Route path="/dashboard"  render={ (props) => (
          <>
            <Dashboard token={token}/>
          </>
        )} />

        <Route path="/appointment" render={ (props) => (
          <>
            <Appointment token={token} />
          </>
        )} />

        <Footer />
      </> }

    </Router>
    
  );
}

export default App;
