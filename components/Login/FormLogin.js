

export default function FormLogin({handleChangeInput, handleSubmit, username, password}){



    return(
        <div>
            <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => handleChangeInput(e)}
            >
            </input>
            <input
            type="password"
            placeholder="Contrasena"
            value={password}
            onChange={(e) => handleChangeInput(e)}
            >
            </input>
            <button type="submit"  onClick={() => handleSubmit()}>
                Log-In
            </button>
        </div>
    )

}