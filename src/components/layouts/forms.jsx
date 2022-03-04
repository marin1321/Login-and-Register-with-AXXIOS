import React, {useState} from "react";
import { Buttons } from "../UI/buttons";
import { Inputs } from "../UI/inputs";
import axios from "axios";
import { NavLink } from "react-router-dom";
export const Forms = () =>{
    const [datas, setData]=useState({
        form:{
            "username":"",
            "password":""
        },
        error:false,
        errorMsg:""
    })
    const login = (e) =>{
        e.preventDefault()
        const user = document.getElementById("userName").value
        const password = document.getElementById("password").value
        setData(
            datas.form.username=user,
            datas.form.password=password
        )
        console.log(datas.form)
        post()
    }
    
    const post = () =>{
        axios.post('https://backend-edw.herokuapp.com/login',datas.form )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return(
        <div className="form">
            <form id="form" className="topBefore">

                <Inputs idI="userName" types="text" place="Name"/>
                <Inputs idI="password" types="password" place="Password"/>
                <Buttons idI="submit"  text="GO!" event={login}/>
                <NavLink to="/Register"><Buttons idI="submit"  text="Register"/></NavLink>

            </form>
        </div>
    )
}