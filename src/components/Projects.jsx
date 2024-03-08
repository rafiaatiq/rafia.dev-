import protfolio from "../assets/protfoliobg2.jpeg"
import spotify from "../assets/SpotifyP.png"
import Airbnb from "../assets/AirbnbP.png"
import BlogApp from "../assets/BlogAppP.png"
import Netflix from "../assets/NetflixP.png"

//Define projects
const projects = [
    {
        id: 1,
        bgImage : protfolio,
        projectImg : spotify,
        mainHeading : "Cloned Spotify",
        techStack1 : "HTML",
        dot : "•",
        techStack2 :"CSS",
        subHeading : "[ Front-End Development ]"
    },
    {
        id: 2,
        bgImage : protfolio,
        projectImg : Airbnb,
        mainHeading : "Cloned Airbnb",
        techStack1 : "JavaScript ",
        dot : "•",
        techStack2 : "Node.js",
        subHeading : "[ Full Stack Development ]"
    },
    {
        id: 3,
        bgImage : protfolio,
        projectImg : BlogApp,
        mainHeading : "Blog App",
        techStack1 : "JavaScript ",
        dot : "•",
        techStack2 : "Node.js",
        subHeading : "[ Full Stack Development ]"
    },
    {
        id: 4,
        bgImage : protfolio,
        projectImg : Netflix,
        mainHeading : "Cloned Netflix",
        techStack1 : "HTML ",
        dot : "•",
        techStack2 : "CSS",
        subHeading : "[ Front-End Development ]"
    },
];

export default function Projects () {
    const firstRowProjects = projects.slice(0, 2);
    const secondRowProjects = projects.slice(2, 4);
    return (
        <div className="md:h-[173vh] h-[190vh] w-full bg-black flex flex-col md:mt-36 rounded-xl" id="Projects" >

            <div className="flex justify-center items-center md:gap-8 gap-4 mt-4">
                <div className="md:h-8 md:w-8 h-4 w-4 rounded-full bg-[#E2DED0] mt-10"></div>
                <div>
                    <h2 className="text-white font-general font-semibold text-4xl md:text-6xl text-center mt-10" id="projectHeading">Projects</h2>
                </div>
                <div className="md:h-8 md:w-8 h-4 w-4 rounded-full bg-[#E2DED0] mt-12"></div>
            </div>

            <div className="text-center text-white mt-8">
            <a href="https://github.com/rafiaatiq" target="_blank" className="md:text-2xl text-xl py-1 font-light tracking-widest"><i className="fa-brands fa-github md:text-3xl text-2xl text-white mr-2"></i> Github</a>
            </div>

            {/* row 1 */}
            <div className="flex md:flex-row flex-col justify-center items-center mt-10 gap-10">
                {firstRowProjects.map((project) => (
                    <div key={project.id}>
                    {project.id == 1 ? (
                        <>
              
                            <a href="https://rafiaatiq.github.io/Spotify-Clone/" target="_blank"><img src={project.projectImg} alt="" className="md:h-[23rem] md:w-[40rem] h-[14rem] w-[24rem] md:ml-4 ml-32 rounded-lg"/></a>

                        <div className="h-24 w-[40rem] mt-4">
                            <div className="flex justify-between items-center">
                                <p className="font-general font-semibold md:ml-8 md:text-3xl text-2xl ml-36 text-white">{project.mainHeading}</p>
                                <p className="font-general font-medium text-lg mr-36 text-white">{project.techStack1} &nbsp; {project.dot} &nbsp; {project.techStack2}</p>
                            </div>
                            <h2 className="font-general font-semibold md:px-8 py-1 px-36 text-xl text-[#988686]">{project.subHeading}</h2>
                        </div>
                        </>) : (
                            <>
                        {/* <div className="h-[20rem] w-[30rem] flex justify-center items-center"  > */}
                            <a href="https://rafiaatiq.github.io/Spotify-Clone/" target="_blank"><img src={project.projectImg} alt="" className="md:h-[18rem] md:w-[30rem] h-[14rem] w-[23rem] md:ml-4 ml-14 mt-[-2rem] rounded-lg"/></a>
                        {/* </div> */}
                        <div className="h-24 w-[30rem] mt-4" >
                            <div className="flex justify-between items-center">
                                <p className="font-general font-semibold md:ml-8 md:text-3xl text-2xl ml-14 text-white">{project.mainHeading}</p>
                                <p className="font-general font-medium md:text-xl text-lg mr-14 text-white">{project.techStack1} &nbsp; {project.dot} &nbsp; {project.techStack2}</p>
                            </div>
                            <h2 className="font-general font-semibold md:px-8 py-1 px-14 text-xl text-[#988686]">{project.subHeading}</h2>
                        </div>
                        </> )
                        }   
                    </div>
                ))}
            </div>
            {/* end row 1 */}

            {/* row 2 */}
            <div className="flex md:flex-row flex-col justify-center items-center gap-10">
            {secondRowProjects.map((project) => (
                    <div key={project.id}>
                    {project.id == 4 ? (
                        <>

                            <a href="https://rafiaatiq.github.io/Spotify-Clone/" target="_blank"><img src={project.projectImg} alt="" className="md:h-[23rem] md:w-[40rem] h-[14rem] w-[23rem] md:ml-4 ml-[8.3rem] rounded-lg"/></a>
        
                        <div className="h-24 w-[40rem] ">
                            <div className="flex justify-between items-center">
                                <p className="font-general font-semibold md:ml-8 md:text-3xl text-2xl ml-36 text-white">{project.mainHeading}</p>
                                <p className="font-general font-medium  md:text-xl text-lg mr-36 text-white">{project.techStack1} &nbsp; {project.dot} &nbsp; {project.techStack2}</p>
                            </div>
                            <h2 className="font-general font-semibold md:px-8 px-36 py-1 text-xl text-[#988686]">{project.subHeading}</h2>
                        </div>
                        </>) : (
                            <>
                        {/* <div className="h-[20rem] w-[30rem] flex justify-center items-center"  > */}
                            <a href="https://rafiaatiq.github.io/Spotify-Clone/" target="_blank"><img src={project.projectImg} alt="" className="md:h-[18rem] md:w-[30rem] md:mt-[-2rem] h-[14rem] w-[23rem] md:ml-4 ml-12  rounded-lg"/></a>
                        {/* </div> */}
                        <div className="h-24 w-[30rem] mt-4" >
                            <div className="flex justify-between items-center">
                                <p className="font-general font-semibold md:ml-8 md:text-3xl text-2xl ml-14 text-white">{project.mainHeading}</p>
                                <p className="font-general font-medium md:text-xl text-lg mr-20 text-white">{project.techStack1} &nbsp; {project.dot} &nbsp; {project.techStack2}</p>
                            </div>
                            <h2 className="font-general font-semibold md:px-8 py-1 px-14 text-xl text-[#988686]">{project.subHeading}</h2>
                        </div>
                        </> )
                        }
                    </div>
                ))}
            </div>
             {/* row 2 end */}
            

        </div>
    )
}