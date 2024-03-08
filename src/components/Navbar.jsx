import {HashLink as Link} from 'react-router-hash-link'
import { useDarkMode } from "../context/Theme";

export default function Navbar () {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return(
        <div className="h-24 w-full absolute top-0 flex justify-start md:justify-around items-center" id="navbar">
                <div className="flex" id="rafia">
                    <h1 className="text-3xl md:text-4xl font-general font-semibold px-4 ">rafia.dev</h1>
                    <div className={`${isDarkMode ? "bg-white" : "bg-black"}  h-2.5 w-2.5 ml-[-0.45rem] mt-1`} id="box"></div>
                </div>

                <div className="text-2xl md:flex hidden" id="icons">
                    <a href="https://github.com/rafiaatiq" target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/rafia-atiq-583013294" target="_blank"><i className="fa-brands fa-linkedin-in ml-4"></i></a>
                    <a href="mailto:rafiya.atiq97@gmail.com" target="_blank"><i className="fa-brands fa-google-plus ml-4"></i></a>
                </div>
                
                <div className="text-xl font-general md:flex tracking-wider" >
                    <ul className="flex justify-center items-center">
                        <Link to="#About" id="about" className="hover-underline-custom md:inline hidden">About</Link>
                        <Link to="#Services" className="ml-8 hover-underline-custom md:inline hidden" id="services">Services</Link>
                        <Link to="#Projects" className="ml-8 hover-underline-custom md:inline hidden" id="projects">Projects</Link>

                        <Link to="#contact" className="md:ml-10 md:text-xl ml-24 text-lg inline" id="button">
                            <button className={`md:h-10 md:w-32 h-8 w-24 bg-white rounded-full ${isDarkMode ? "text-black" : "text-black"} `} id="button">Let's talk</button>
                        </Link>
                    </ul>
                </div>

            </div>
    )
}
//logoUnderline