import React,{useState} from 'react'
import axios from "axios";
import { Button } from '../../UI/Button/Button'; 
import { NavLink } from "react-router-dom";
export const FormRegister = () => {

    const [data, setData]=useState({
        form:{
            "username":"",
            "name":"",
            "password":""
        },
        error:false,
        errorMsg:""
    })

    const Registerpost = () =>{
        axios.post('https://backend-edw.herokuapp.com/usuario',data.form )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const register = (e) =>{
        e.preventDefault()
        const user = document.getElementById("userName").value
        const password = document.getElementById("password").value
        const name = document.getElementById("name").value
        setData(
            data.form.username=user,
            data.form.name=name,
            data.form.password=password
        )
        console.log(data.form)
        Registerpost()
    }
    
    return (
        <div className="form">
            <form id="form">
                <h1>REGISTRATION</h1>
                <input type="text" id="userName" placeholder="User Name" />
                <input type="text" id="name" placeholder="Name" />
                <input type="password" id="password" placeholder="Password" />
                <Button id="submit"  content="Register" event={register}/>
                <NavLink to="/"><Button id="submit"  content="Login"/></NavLink>

            </form>
        </div>
  )
}
