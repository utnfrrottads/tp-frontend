

export default function FormLogin({handleChangeInput, handleSubmit, username, password}){



    return(
        <div className="flex flex-col"> 
        <h1 className="mb-[12px] text-center font-semibold">LOGIN</h1>
            <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => handleChangeInput(e)}
            className="mb-6 outline-none rounded-lg px-1"
            >
            </input>
            <input
            type="password"
            placeholder="Contrasena"
            value={password}
            onChange={(e) => handleChangeInput(e)}
            className="mb-6 outline-none rounded-lg px-1"
            >
            </input>
            <button className="transition duration-100 bg-gray-400 mx-10 rounded-lg font-semibold hover:bg-gray-500" type="submit"  onClick={() => handleSubmit()}>
                Log in
            </button>
        </div>
    )

}