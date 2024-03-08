import "../App.css"
import { useRef, useEffect } from "react"
import gsap from "gsap";
import {HashLink as Link} from 'react-router-hash-link'
import { useDarkMode } from "../context/Theme";

export default function Contact () {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const collaborate = useRef(null);
    
    useEffect(()=> {
        const timeline = gsap.timeline();

        timeline.fromTo(collaborate.current, {
            x: '-100%' // Start position, off the left side of the viewport
        }, {
          x: '100%', // End position, off the right side of the viewport
          duration: 10, // Animation duration in seconds
          ease: 'linear', // Linear easing for continuous movement
          onComplete: collaborate.current, // Restart animation when complete
          repeat: -1, 
        })
    }, [])
    
    return(
        <div className={`md:h-[10vh] h-[5vh] w-full flex flex-col ${isDarkMode ? "text-white" : "text-black"}`} id="contact">
    
            <div className="flex md:flex-row flex-col justify-end items-center h-96 md:mt-[-3rem] mt-28">
                
                <div className="h-44 md:w-[50rem] md:mr-10 mr-52 flex justify-center items-center md:mt-20 ">
                    <h2 className="md:text-5xl text-3xl tracking-wider md:ml-96 ml-52 md:w-[23rem] w-[22rem] font-bold">LET'S START CREATING TOGETHER</h2>
                </div>

                <div className="flex mr-14 ">

                    <div className="h-44 flex flex-col md:mt-28 mt-14 ml-14">
                        <p className={`text-2xl font-bold ${isDarkMode ? "text-[#E2DED0]" : "text-[#5C4E4E]"}`}>NAVIGATIONS</p>
                        <Link to="#About" className="text-xl w-24 font-light mt-3.5 hover-underline-custom">About me</Link>
                        <Link to="#Services" className="text-xl w-20 font-light py-1 hover-underline-custom">Services</Link>
                        <Link to="#Projects" className="text-xl w-20 font-light py-1 hover-underline-custom">Projects</Link>
                        <Link to="#" className="text-xl w-28 font-light py-1 hover-underline-custom">Contact Info</Link>
                    </div>

                    <div className={`h-36 w-44 flex flex-col justify-start items-center gap-2 md:mt-[4.5rem] mt-[1rem] `}>
                        <p className={`text-2xl font-bold ${isDarkMode ? "text-[#E2DED0]" : "text-[#5C4E4E]"} mt-10`}>SOCIALS</p>
                        <a href="mailto:rafiya.atiq97@gmail.com" className="text-xl font-light flex mt-2.5 mr-6"><i className={`fa-brands fa-google-plus text-2xl mr-2 ${isDarkMode ? "text-white" : "text-black"}`}></i> <span className="hover-underline-custom">Gmail</span></a>
                        <a href="https://www.linkedin.com/in/rafia-atiq-583013294" className="text-xl font-light"><i className={`fa-brands fa-linkedin-in text-2xl ${isDarkMode ? "text-white" : "text-black"} mr-1`}></i> <span className="hover-underline-custom">LinkedIn</span></a>
                        <a href="https://github.com/rafiaatiq" target="_blank" className="text-xl font-light mr-2 flex justify-center items-center"><i className={`fa-brands fa-github text-2xl ${isDarkMode ? "text-white" : "text-black"} mr-3`}></i><span className="hover-underline-custom"> Github </span></a>
                    </div>
                    
                    
                </div>
                

                <div className="h-36 w-62 flex flex-col justify-start items-center gap-10 md:mr-44 mt-14 mr-28">
                    <div >
                    <p className={`text-2xl font-bold ${isDarkMode ? "text-[#E2DED0]" : "text-[#5C4E4E]"} mr-10`}>GET IN TOUCH</p>
                    </div>

                    <div className="flex justify-start items-center mt-[-2rem]">
                    <a href="mailto:rafiya.atiq97@gmail.com" className="text-xl font-light">rafiya.atiq97@gmail.com</a>
                    </div>
                </div>
                
                
            </div>


            <div className="flex justify-between items-center w-full md:px-20 px-8  mt-14" >
                <div className="flex justify-center items-center gap-20">
                    <div>
                        <p className="text-xl">© 2024 <span className="font-bold">Rafia Atiq</span></p>
                        {/* <p className="text-xl font-light mb-10">Designed and developed with ❤️‍🔥</p> */}
                    </div>
                    
                    <div className="h-10 w-[30rem] flex gap-4 tracking-wider md:inline hidden">
                        <a href="#" className="text-xl  font-medium">About me</a>
                        <a href="#" className="text-xl px-4 font-medium">Services</a>
                        <a href="#" className="text-xl px-4 font-medium">Projects</a>
                        <a href="#" className="text-xl px-4 font-medium">Contact Info</a>
                    </div>
                </div>
        
                <div className="flex justfiy-center items-center md:gap-4 gap-2">
                    <Link to="#Hero" className="text-xl font-light " >Back to top</Link>
                    <i className="fa-solid fa-play rotate-[270deg] md:text-2xl text-xl"></i>         
                </div>

            </div>

            <div className={`flex justify-center items-center mt-8`} ref={collaborate}>
                <p className={`${isDarkMode ? "text-white" : "text-black"}  md:text-[9rem] font-bold text-4xl`}>LET'S COLLABORATE</p>
            </div>
        </div>
       
    )
}