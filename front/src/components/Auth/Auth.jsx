import React, {useState} from "react";
import "./auth.css"
import {useNavigate} from "react-router-dom";

export default function Auth() {
  const [logIn, changeLogIn] = useState(true);
  const navigate = useNavigate();
  const handleSubmit = (event) =>{
    event.preventDefault();
    if(logIn){
      sendLogIn()
    }
    else{
      sendSignUp()
    }
  }
  const sendLogIn = (e) =>{
        fetch("http://localhost:4001/api/users/login", { method: "POST", body: JSON.stringify(userData), mode: 'cors', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},contentType: "application/json"})
            .then(res => {
                return res.json()
            })
            .then(data => {
                localStorage.setItem("profile", JSON.stringify(data));
                navigate('/');
            })
        .catch(e => {
            console.log(e)
        })
  }

  const sendSignUp = (e) =>{
        fetch("http://localhost:4001/api/users/", { method: "POST", body: JSON.stringify(userData), mode: 'cors', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},contentType: "application/json"})
            .then(res => {
                return res.json();
            })
            .then(data => {
                localStorage.setItem("profile", JSON.stringify(data));
                navigate('/');
            })
        .catch(e => {
            console.log(e)
        })
  }

  const changeMode = () =>{
    changeLogIn(!logIn);
  }
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    school: "",
    isOrganizer: false,
    password: ""
})

  return (
    <div>
        <div className="authPage">
            <h1 className = "header" >{logIn ? "Log In" : "Sign Up"}</h1>
            <form autoComplete = "off" validate = "true" className = "form" onSubmit = {handleSubmit}> 
                <input placeholder = "Your school email" id = "email" name = "email" type ="email" onChange = {(e) => setUserData({...userData, email: e.target.value})}/>
              
                { !logIn && (
                    <>
                      <input placeholder = "Your full name" id = "fullName" name = "fullName" type ="fullName" onChange = {(e) => setUserData({...userData, fullName: e.target.value})}/>
                      <input placeholder = "Your school" id = "school" name = "school" type ="school" onChange = {(e) => setUserData({...userData, school: e.target.value})}/>
                    </>
                  )
                }
                
                <input placeholder = "Enter Password" id = "password" name = "password" type ="password" onChange = {(e) => setUserData({...userData, password: e.target.value})}/>
                { !logIn && (
                <label className="dropdown">
                  Are you an organizer for your school?
                    <select className = "select" value={userData.isOrganizer} onChange={(e) => setUserData({...userData, isOrganizer: e.target.value})}>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </label>
                )}
  
                <button className = "submitButton" type="submit" onClick = {handleSubmit}>Submit</button>
            </form>
            <button className = "changeMode" onClick = {changeMode}>{logIn ? "Sign Up Instead" : "Log In instead"}</button>
        </div>
    </div>
  )
}