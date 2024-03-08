import { useLayoutEffect, useRef, useEffect } from "react"
import gsap from "gsap"
import picture from "../assets/picture.jpeg"
import '../App.css'

export default function About () {
    const component = useRef(null);
    console.log(component);

  
    useEffect(() => {
        const image = document.querySelector("#imageSection");
        // const textSection = document.querySelector("#Text-Section")

        // const timeln = gsap.timeline({paused: true});

        // timeln.fromTo(textSection, {y:0}, {y:"35vh", duration: 0.5, ease: "none"}, 0)
        // const scroll_1 =  ScrollTrigger.create({
        //     animation: timeln,
        //     trigger: image,
        //     start: "top top",
        //     end: "bottom center",
        //     scrub: true,
        // })
        
        // Define the timeline
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger:component.current, // Trigger element
                start: "-40% center", // Start animation when top of trigger element reaches the top of the viewport
                end: "bottom 20%", // End animation when bottom of trigger element reaches the center of the viewport
                scrub: true, // Smoothly scrub through animations
                // markers: true, // For debugging
            }
        });

        // Add animation to change background color
        timeline.to(component.current, {
            // backgroundColor: "#000000", // Change to white when scrolling enters the about section
            yPercent: "-100",
            duration: 10, // Adjust the duration to make the animation slower
            ease: 'power1.out' 
        })

        // .to(["#Aboutme", "#p"], {
        //     color: "#ffffff",
        //     duration: 1,
        // });

        // // Clean up
        return () => {
            timeline.kill();
        };
    }, []);


    return(
        <>
        
        <div className="md:h-[115vh] h-[100vh] w-full flex flex-col bg-black rounded-xl" ref={component} data-scroll-speed="0.01" id="About">

            <div className="flex justify-center items-center md:gap-8 gap-4 md:mt-4">
                <div className="md:h-8 md:w-8 h-4 w-4 rounded-full bg-[#E2DED0] mt-10" id="Circles" ></div>
                <div>
                    <h2 className="text-white font-general font-semibold text-4xl md:text-6xl text-center mt-10" >About me</h2>
                </div>
                <div className="md:h-8 md:w-8 h-4 w-4 rounded-full bg-[#E2DED0] mt-12" id="Circles"></div>
            </div>
        

            <div className="flex justify-center items-center md:mt-24 mt-4 gap-4 flex-col md:flex-row">
                <div className="md:h-[30rem] md:w-[22rem] h-[8rem] w-[8rem] " id="imageSection">
                    <img src={picture} className="md:h-full md:w-full h-full w-full object-cover md:rounded-none rounded-full"/>
                </div>
                <div className="md:h-3/4 md:w-3/6  md:mt-[-5rem]" id="Text-Section">
                    <p className="font-general font-semibold px-12  md:text-2xl text-xl text-[#E2DED0] tracking-widest">HELLO ,</p>
                    <p className="font-general font-light px-12 md:mt-10 md:text-2xl text-xl mt-2 text-white" id="p">I'm a self-motivated learner, currently wroking on MERN Stack Development. Proficient in front-end technologies such as HTML, CSS, and JavaScript, I enjoy bringing designs to life with clean and responsive interfaces. 💪 <br /> <br /> 
                    On the back end, I am working extensively with Node.js and Express.js, leveraging the power of MongoDB to create dynamic and scalable applications. <br /><br />
                    I am now dedicated to expanding my knowledge and skills in the field of MERN Stack Development and Front-End development.✨😃</p>
                </div>
            </div>
        </div>
         
         </>
    )
}

// bg-[#F2F2F2 