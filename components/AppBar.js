import Link from "next/link";


export default function AppBar () {

    return(
        <nav className="top-0 left-0 w-full shadow bg-neutral-900"> {/* Fijar y poner en posicion delatera */}
        <div className="container m-auto flex justify-between items-center text-neutral-300">
          <h1 className="pl-8 py-4 text-xl font-bold">ChatWithMe</h1>
          
          <ul className="hidden md:flex justify-between item-center pr-4 text-base font-semibold cursor-pointer">
              <li className="hover:bg-neutral-400 py-4 px-6 mr-6 rounded-full duration-300"><Link href='/login'>
                <a>Login</a>
              </Link></li>
              <li className="hover:bg-neutral-400  ml-6 py-4 px-6 rounded-full duration-300"><Link href='/login'>
                <a>Try free</a>
              </Link></li>
          </ul>
        </div>
      </nav>
    )
}