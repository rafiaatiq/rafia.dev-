import { useEffect, useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

export default function IntoSlider (props) {
    const heroComp = useRef(null)
    console.log(heroComp);

    useLayoutEffect(()=> {
        let context = gsap.context(() => {
            const t1 = gsap.timeline();

            const simultaneousAnimations = gsap.timeline(); // Timeline for simultaneous animations
        
            // Define animations for simultaneous execution
            simultaneousAnimations.to( "#title-2", {
                opacity: 0,
                yPercent: "-100",
                delay: 1,
            });
        
            simultaneousAnimations.to("#intro-slider", {
                yPercent: "-100",
                duration: 1.3,
                delay:1,
            }, 0); // Start at the same time as the first animation
        
            // Add simultaneousAnimations to the main timeline
            t1.add(simultaneousAnimations, 0);

            t1.from("#Heading", {
                yPercent: "250",
                duration: 1,
                delay: -1,
                opacity: 0,
            }).from(["#rafia","#icons", "#about", "#services", "#projects", "#button", "#subhead"], {
                yPercent: "-175",
                duration: 1,
                delay: -0.5,
                opacity:0,
                // stagger:0.2,
            }).from(["#circle1","#circle2", "#circle3"], {
                xPercent: "100",
                duration: 1,
                stagger: 0.2,
            })

            // const circleTimeLine = gsap.timeline();
            
            // circleTimeLine.to(["#circle1","#circle2", "#circle3"], {
            //     yPercent: "-100",
            //     duration: 1,
            //     delay: 2,
            //     stagger: 0.2,
            // })

            // ScrollTrigger.create({
            //     trigger: ["#circle1","#circle2", "#circle3"], // ID of the trigger element
            //     start: "top center",        // Animation starts when the top of the viewport reaches the center of the trigger element
            //     end: "bottom bottom",       // Animation ends when the bottom of the viewport reaches the bottom of the trigger element
            //     animation: circleTimeLine,               // Animation timeline to play
            //     markers: true
            // });
            

        }, heroComp)

        return () => context.revert()
    }, [])

    return (
        //wrapping this in another div
        <div className="relative main" ref={heroComp}>
            {/* three h1 tags in a */}
            <div id="intro-slider" className="h-screen p-10 bg-black text-white absolute top-0 left-0 font-general font-semibold z-10 w-full flex flex-col gap-10">
                <h1 id="title-2" className="text-5xl mt-64 tracking-wider text-center">2024 Portfolio</h1>
            </div>
            {props.YoutubeAnimate}
        </div>
        
    )
}

// 5things that need to be animated
//1- the white slide
// 2- 3text messages
//3- when slide finishes the welcome messages

//id=intro-slider , id=welcome, id=title-1, id=title-2, id=title-3