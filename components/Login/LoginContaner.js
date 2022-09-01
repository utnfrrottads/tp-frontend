import FormLogin from "./FormLogin";
import { useEffect, useState } from "react";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";


const endpoint = "http://localhost:9000/api/v1/users/"

export default function LoginContaner(props){

    const [usernameForm, setUsernameForm] = useState("");
    const [passwordForm, setPasswordForm] = useState("");
    const [error, setError] = useState(false)

    const handleChangeInput = (event) => {
        if(event.target.type == "password") {setPasswordForm(event.target.value);}
        else{setUsernameForm(event.target.value);}
        
      };


    const handleSubmit = async ()=>{

      const data = {
        username: usernameForm,
        password: passwordForm,
        
      };
  
      const JSONdata = JSON.stringify(data);
  
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      };
  
      const response = await fetch('/api/auth/login', options);

      return response.json()
      
      // const data =  await response.json();
      // const users = data.users;

      
      // const loggedUser = await users.filter((user) =>{
      //     return (user.name === usernameForm && user.password === passwordForm)
      // });

      // if(loggedUser == []) {setError(true);
      //   return }; // Hardcode, por si se erra en el login
      // // Creo la cookie, en caso de que no haya usuario, devuelvo un forbiden y algun
      
      // const token = await sign({
      //   exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
      //   userID:loggedUser._id,

      // }, 
      // "secret");

      // const serialized = await serialize ("userToken", token,{
      //   httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      // sameSite: "strict",
      // maxAge: 1000 * 60 * 60 * 24 * 30,
      // path: "/",
      // });
  
      // await response.setHeader("Set-Cookie", serialized);
      // return response

      // No funciona porque la response no se puede editar
  }
      
    

    return(
        <div>
            {!error?<p></p>:<p>Suerte en la prox</p>}
            <FormLogin
                handleSubmit={handleSubmit}
                handleChangeInput={handleChangeInput}
                username={usernameForm}
                password={passwordForm}
            />
        </div>

    )

}