
import { useState } from "react";
import {useUser} from '../context/userContext'
import { useRouter } from 'next/router'
import FormLogin from "../components/Login/FormLogin"
import Link from "next/link";
const JWT = require("jsonwebtoken");
import { urlUsers, urlSingIn } from "../utils/constants";

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
      const JSONdata = JSON.stringify({username: usernameForm, password:passwordForm})

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata
      };

      const response = await fetch(urlSingIn,options);
      const data =  await response.json();
      const decodeJWT = JWT.decode(data.jwt);
      const user = decodeJWT.user
      
      // const loggedUser = await users.find((user) =>{
      //   return (user.name === usernameForm && user.password === passwordForm)
      // });

      if(!user) {setError(true);
       return}; // Hardcode, por si se erra en el login
      // // Creo la cookie, en caso de que no haya usuario, devuelvo un forbiden y algun


      setUser(user)
      router.push('/chat')

  }



    return(
        <div className="relative flex justify-center items-center h-screen w-screen bg-neutral-700">

          <div className="flex flex-col items-center justify-center bg-neutral-800 sm:w-[400px] sm:h-[300px] w-full h-full sm:rounded-2xl relative shadow-white shadow-lg ">
            <div className="absolute top-0 left-0 cursor-pointer">
            <Link href='/'>
              <svg className="h-10 w-10 sm:h-10 sm:w-10 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path stroke-linecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </Link>
            </div>
              <svg className="shadow-md absolute sm:top-[-20px] top-[40px] bg-neutral-900 rounded-full sm:block w-32 h-32 text-neutral-300 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
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

