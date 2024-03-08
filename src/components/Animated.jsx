import React, {useRef, useEffect} from "react"
import {gsap} from "gsap";

export default function Animated () {
    const black = useRef(null);
    const name = useRef(null);

    useEffect(() => {
        gsap.to(black.current, { opacity: 0, y:-700, duration: 1, delay: 2 })
    }, [])

    useEffect(() => {
        gsap.from(name.current, {opacity: 0, y:100, duration: 1, })
    }, [])



    return (
    <div className="h-screen w-full bg-black z-10" ref={black}>

        <div className="flex justify-center items-center">
            <div className="h-96 w-96 mt-44 flex flex-col justify-center items-center" ref={name}>
                <h1 className="text-white text-4xl font-general font-semibold tracking-widest">Rafia Atiq</h1>
                <h1 className="text-white mt-2 text-4xl font-general font-semibold tracking-wider">@ Portfolio</h1>
            </div>
            
        </div>
        
    </div>
    )
}