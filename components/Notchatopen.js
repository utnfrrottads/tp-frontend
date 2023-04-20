import Image from "next/image"

import back from '../public/back.png'


export default function Notchatopen(){

    return(
        <div className="h-full w-full absolute bg-slate-500 ">
            <Image
            src={back}
            alt="Abre un chat"
            layout="fill"
            quality={100}
            
            />
        </div>
    )
}

