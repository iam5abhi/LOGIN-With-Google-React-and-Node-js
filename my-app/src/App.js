import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import NavBar from './Components/Navbar';
import Card from './Components/Welcome';
import Login from './pages/Login';

function App() {
   const [User,setUser] =useState(null)

    useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/sucess", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type":"application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          console.log(response,"sfhejr")
          if (response.status === 201) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          console.log(resObject.data,"hum dsa")
          setUser(resObject.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
   getUser();
  }, []);
  console.log(User,"vikas")
  return (
    <BrowserRouter>
     <div className="App">
        <NavBar user={User}/>
        <Routes>
          <Route path="/" element={<Card/>} />
          <Route
            path="/login"
            element={User ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
