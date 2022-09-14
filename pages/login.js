
import { useEffect, useState } from "react";
import {useUser} from '../context/userContext'
import { useRouter } from 'next/router'
import FormLogin from "../components/Login/FormLogin"

const endpoint = "http://localhost:9000/api/v1/users/"

export default function Login(props){

    const router = useRouter();

    const [usernameForm, setUsernameForm] = useState("");
    const [passwordForm, setPasswordForm] = useState("");
    const [error, setError] = useState(false)

    const {user,setUser} = useUser();


    const handleChangeInput = (event) => {
        if(event.target.type == "password") {setPasswordForm(event.target.value);}
        else{setUsernameForm(event.target.value);}
        
      };


    const handleSubmit = async ()=>{

      // const data = {
      //   username: usernameForm,
      //   password: passwordForm,
        
      // };
  
      // const JSONdata = JSON.stringify(data);
  
      // const options = {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSONdata,
      // };
  
      // const response = await fetch('/api/auth/login', options);

      // return response.json()
      const response = await fetch(endpoint);
      const data =  await response.json();
      const users = data.users;

      
      const loggedUser = await users.find((user) =>{
        return (user.name === usernameForm && user.password === passwordForm)
      });

      if(!loggedUser) {setError(true);
       return}; // Hardcode, por si se erra en el login
      // // Creo la cookie, en caso de que no haya usuario, devuelvo un forbiden y algun


      setUser(loggedUser)
      router.push('/')

  }



    return(
        <div className="relative flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-b from-white to-black">

            <div className="flex flex-col items-center justify-center bg-gray-300 w-[400px] h-[300px] rounded-2xl relative shadow-slate-800 shadow-lg ">
            <svg className="shadow-md absolute top-[-20px] bg-slate-800 rounded-full w-32 h-32 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>   
            <FormLogin
                handleSubmit={handleSubmit}
                handleChangeInput={handleChangeInput}
                username={usernameForm}
                password={passwordForm}
            />
            </div>

        </div>
    )

}