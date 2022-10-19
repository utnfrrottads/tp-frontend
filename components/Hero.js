import Image from "next/image"
import Link from "next/link"
import Icons from "./Icons"


export default function Hero () {

    return(
        <section className="text-neutral-300">
        <div className="flex lg:flex-row md:justify-between flex-col mx-auto ">
            <div className="mx-auto my-auto flex flex-col justify-center items-center relative">
            
                

                <h1 className="z-[5] font-poppins font-semibold ss:text-[72px] text-[52px]  ss:leading-[100.8px] leading-[75px]">
                    Have your<br/> best chat 
                </h1>
                
                <p className="z-[5]">Fast, easy & unlimited team chat.</p>
            
                
                
                <div className="mt-10 lg:mt-20 bg-neutral-900 rounded-full relative p-4 cursor-pointer border-1 hover:bg-neutral-400 w-full text-center duration-300">
                <Link href='/'>
                <a className="font-semibold">TRY FREE</a>
                </Link>
                
                </div>

            </div>

            <div className=" md:mx-auto my-10 relative">
                
                <img src="/HomeImage.png" alt="billing" className="w-[100%] h-[100%] relative z-[5] " />
                <div className="z-0 absolute top-0 bg-gradient-to-bl from-white to-black  w-[100%] h-[100%]  blur-lg"/>
            </div>
        </div>
        <div className="text-center mt-10">
            <h1 className="text-[50px] underline font-semibold">Technologies we used</h1>
        </div>
        <Icons/>
        </section>
    )
}

