import React, {useState} from "react";
import axios from "axios";
import { Button } from "../../UI/Button/Button"; 
import { NavLink } from "react-router-dom";
export const FormLogin = () =>{
    const [data, setData]=useState({
        form:{
            "username":"",
            "password":""
        },
        error:false,
        errorMsg:""
    })

    const postData = () =>{
        axios.post('https://backend-edw.herokuapp.com/login',data.form )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const login = (e) =>{
        e.preventDefault()
        const user = document.getElementById("userName").value
        const password = document.getElementById("password").value
        setData(
            data.form.username=user,
            data.form.password=password
        )
        console.log(data.form)
        postData()
    }


    axios.get('https://backend-edw.herokuapp.com/usuarios')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    
    return(
        <div className="form">
            <form id="form">
                <h1>LOGIN</h1>
                <input type="text" id="userName" placeholder="Name" />
                <input type="text" id="password" placeholder="Password" />
                <Button id="submit"  content="Login" event={login}/>
                <NavLink to="/Register"><Button id="submit"  content="Register"/></NavLink>

            </form>
        </div>
    )
}