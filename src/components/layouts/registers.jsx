import React,{useState} from 'react'
import { Buttons } from "../UI/buttons";
import { Inputs } from "../UI/inputs";
import { NavLink } from "react-router-dom";
import axios from "axios";
export const Registers = () => {
    const [datas, setData]=useState({
        form:{
            "username":"",
            "name":"",
            "password":""
        },
        error:false,
        errorMsg:""
    })
    const register = (e) =>{
        e.preventDefault()
        const user = document.getElementById("userName").value
        const password = document.getElementById("password").value
        const name = document.getElementById("name").value
        setData(
            datas.form.username=user,
            datas.form.name=name,
            datas.form.password=password
        )
        console.log(datas.form)
        post()
    }
    const post = () =>{
        axios.post('https://backend-edw.herokuapp.com/usuario',datas.form )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="form">
            <form id="form" className="topBefore">

                <Inputs idI="userName" types="text" place=" User Name"/>
                <Inputs idI="name" types="text" place="Name"/>
                <Inputs idI="password" types="password" place="Password"/>
                <Buttons idI="submit"  text="Register" event={register}/>
                <NavLink to="/"><Buttons idI="submit"  text="Login"/></NavLink>

            </form>
        </div>
  )
}
