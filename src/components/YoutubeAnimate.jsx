import About from "./About"
import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import Services from "./Services"
import Projects from "./Projects"
import Contact from "./Contact"
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
  
        <div className={`h-[100vh] overflow-auto flex justify-center place-items-center Section ${isDarkMode ? "text-white" : "bg-white"} `} id="Hero" >
           <HeroSection/>
            {/* navbar */}
            <Navbar/>
        </div>

        <About/>
        <Services/>
        <Projects/>
        <Contact/>
        </>
    )
}

// 5things that need to be animated
//1- the white slide
// 2- 3text messages
//3- when slide finishes the welcome messages

//id=intro-slider , id=welcome, id=title-1, id=title-2, id=title-3