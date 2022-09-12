import Image from "next/image"
import Link from "next/link"

export default function Hero () {

    return(
        <section className="flex lg:flex-row md:justify-between flex-col mx-auto text-black">
        <div className="mx-auto my-auto flex flex-col justify-center items-center relative">
            <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px]  ss:leading-[100.8px] leading-[75px]">
                Have your<br/> best chat 
            </h1>

            <p className="">Fast, easy & unlimited team chat.</p>

            
            <div className="mt-10 bg-gray-400 rounded-full relative p-4 cursor-pointer border-2 border-black hover:bg-white">
            <Link href='/'>
            <a className="font-semibold">TRY FREE</a>
            </Link>
            {/* <div className="absolute top-0 bg-gradient-to-tl from-white to-black  w-[100%] h-[100%]  blur-lg"/> */}
            </div>

        </div>

        <div className=" md:mx-auto my-10 relative">
        <img src="/HomeImage.png" alt="billing" className="w-[100%] h-[100%] relative z-[5] border-2 border-black" />
        

        </div>
        
        </section>
    )
}

