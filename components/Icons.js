

export default function Icons(){

    return(
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 text-center py-10 px-8 gap-4">
            <div className="shadow-cyan-400 shadow-md pt-8 border-t-1 border-cyan-400 text-cyan-400 rounded-lg hover:scale-105 duration-500">
                <img src="/icons/react-js-icon.svg" className="w-20 h-20 mx-auto"/> 
                <p className="mt-10 pb-4">REACT</p> 
            </div>
            <div className="shadow-black shadow-md pt-8 border-t-1 border-black text-black rounded-lg hover:scale-105 duration-500">
                <img src="/icons/nextjs-icon.svg" className="w-20 h-20 mx-auto"/>
                <p className="mt-10 pb-4">NEXT</p>
            </div>
            <div className="shadow-green-600 shadow-md pt-8 border-t-1 border-green-600 text-green-600 rounded-lg hover:scale-105 duration-500">
                <img src="/icons/node-js-icon.svg" className="w-20 h-20 mx-auto"/>
                <p className="mt-10 pb-4">NODE.JS</p>
            </div>
            <div className="shadow-sky-300 shadow-md pt-8 border-t-1 border-sky-300 text-sky-300 rounded-lg hover:scale-105 duration-500">
                <img src="/icons/tailwind-css-icon.svg" className="w-20 h-20 mx-auto"/>
                <p className="mt-10 pb-4">TAILWIND CSS</p>
            </div>
        </div>
    )
}