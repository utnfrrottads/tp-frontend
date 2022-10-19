

export default function Footer (){

    return(
        <footer>
            <div className="bg-neutral-900 container m-auto text-white text-center pb-10 ">
                <h1 className="text-[72px]">ChatWithMe</h1>
                <p className="font-semibold text-[20px]">ChatWithMe is chat website where you could communicate with friends beyond<br/> a well design UI.
                Here you can write what you want to whoever you want. 
                </p>
                <div className="flex flex-row bg-inherit justify-center mt-10">
                    <img src="/icons/linkedin-round-icon.svg" className="w-10 border rounded-full bg-white mx-2"></img>
                    <img src="/icons/youtube-round-icon.svg" className="w-10 border rounded-full bg-white mx-2"></img>
                    <img src="/icons/facebook-round-icon.svg" className="w-10 border rounded-full bg-white mx-2"></img>
                    <img src="/icons/twitter-round-icon.svg" className="w-10 border rounded-full bg-white mx-2"></img>
                </div>
            </div>
        </footer>
    )
}