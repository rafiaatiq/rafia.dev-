import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import '../App.css'
import { useDarkMode } from "../context/Theme";


export default function YoutubeAnimate () {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    const onScrollDiv = useRef(null);

    useEffect(()=> {

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger:onScrollDiv.current, // Trigger element
                start: "40% center", // Start animation when top of trigger element reaches the top of the viewport
                end: "bottom 20%", // End animation when bottom of trigger element reaches the center of the viewport
                scrub: true, // Smoothly scrub through animations
            }
        });

        timeline.to(onScrollDiv.current, {
            yPercent: "-120",
            opacity:0,
            // duration: 20, // Adjust the duration to make the animation slower
        })


        // if (scroll) {
        //     scroll.on('scroll', (obj) => {
        //         console.log("object, ", obj);
        //         // This code will run when Locomotive Scroll emits a 'scroll' event
        //         const targetElement = document.querySelector('.onScroll');
        //         const scrollPosition = obj.scroll.y;
        //         console.log(scrollPosition);
        //         const opacity = 1 - (scrollPosition * 0.005);
            
        //         targetElement.style.opacity = opacity;
        //     });
        //   }
    }, [])

    
    return (
        <>
        {/* //wrapping this in another div */}
       
            <div className="h-96 w-[40rem] absolute top-[-10rem] right-[-29rem] md:top-[-15rem] md:right-[-23rem] z-0" >
                <div className={`h-[19rem] w-[19rem] md:h-[30rem] md:w-[30rem]  ${isDarkMode ? "bg-[#b7b7b7]" : "bg-[#0B0909]"}  rounded-full flex justify-center items-center`} id="circle1">
                    <div className={`h-[15rem] w-[15rem] md:h-[22rem] md:w-[22rem] ${isDarkMode ? "bg-[#8c8c8c]" : "bg-[#44444C]"} rounded-full z-0 flex justify-center items-center`} id="circle2">
                        <div className={`h-[10rem] w-[10rem] md:h-[14rem] md:w-[14rem] ${isDarkMode ? "bg-[#525252]" : "bg-[#8C8C8C]"} rounded-full z-0`} id="circle3"></div>
                    </div>
                </div>
            </div>

            <div className={`h-[30rem] w-[30rem] ${isDarkMode ? "bg-[#525252]" : "bg-[#74747417]"}  absolute top-[33rem] left-[-10rem] rounded-full`} data-scroll data-scroll-speed="0.2"></div>
    
            <div className="h-96 w-[65rem] md:mt-32 mt-10 onScroll" ref={onScrollDiv} data-scroll data-scroll-speed="0.2">
                
                <div className="flex justify-center items-center font-general md:mt-1 mt-10" >
                    <h1 className="md:mr-4 md:text-xl md:inline hidden" id="subhead">I'm Rafia Atiq, a</h1>
                    <span className={`text-4xl md:text-7xl font-bold ${isDarkMode ? "text-white" : "text-shadow"} text-center`} id="Heading">FULL STACK WEB</span>
                </div>
                
                <div className="flex justify-center items-center font-general">
                    <span className={`md:text-7xl md:py-2 font-bold ${isDarkMode ? "text-white" : "text-shadow"} text-4xl`} id="Heading">DEVELOPER</span>
                    <h1 className="md:ml-4 md:text-xl md:inline hidden" id="subhead">creating Web Solutions;</h1>
                </div>

                <div className="mt-4 font-general" >
                    <p className="text-center md:text-xl md:tracking-wider text-lg" id="Heading">Expertise in JavaScript, HTML, CSS, React, <br /> Node.js, Express, MongoDB </p>
                    
                    <div className="md:flex md:flex-row flex-col justify-center items-center md:mt-4 mt-2" id="Heading">

                        <div className="flex justify-center items-center gap-1">
                            <p className="text-center font-semibold md:text-2xl md:ml-2 text-xl">[ <span className={` ${isDarkMode ? "text-[#E2DED0]" : "text-[#5C4E4E]"} `} >JAVASCRIPT</span> ]</p>
                            <p className="text-center font-semibold md:text-2xl md:ml-2 text-xl">[ <span className={` ${isDarkMode ? "text-[#E2DED0]" : "text-[#5C4E4E]"} `}>MERN STACK</span> ]</p>
                        </div>
                    
                        {/* <div className=""> */}
                            <p className="text-center font-semibold md:text-2xl text-xl md:ml-2">[ <span className={` ${isDarkMode ? "text-[#E2DED0]" : "text-[#5C4E4E]"} `}>JUNIOR DEVELOPER </span> ]</p> 
                        {/* </div> */}
                        
                    </div>
                </div>
            </div>

            <div className="absolute right-[-0.65rem] top-[32rem] md:inline hidden  md:right-12 md:top-[30rem] rotate-90 text-xl font-general">
                    <h1>Scroll <i class={`fa-solid fa-arrow-right ml-2 ${isDarkMode ? "text-white" : "text-black" }`}></i></h1>
            </div>
        </>
    )
}

// 5things that need to be animated
//1- the white slide
// 2- 3text messages
//3- when slide finishes the welcome messages

//id=intro-slider , id=welcome, id=title-1, id=title-2, id=title-3