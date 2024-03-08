import { useDarkMode } from "../context/Theme";
export default function Services() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <div className={`md:h-[80vh] h-[80vh] w-full flex flex-col md:mt-[-38rem] mt-[-27rem]`} data-scroll data-scroll-speed="0.2" >

            <div className="flex justify-center items-center md:gap-8 gap-4 mt-4">
                <div className={`md:h-8 md:w-8 h-4 w-4 rounded-full ${isDarkMode ? "bg-[#5C4E4E]" : "bg-[#5C4E4E]"} mt-10`}></div>
                <div id="Services">
                    <h2 className={`${isDarkMode ? "text-white" : "text-black"} font-general font-semibold text-4xl md:text-6xl text-center mt-10`}>Services</h2>
                </div>
                <div className="md:h-8 md:w-8 h-4 w-4 rounded-full bg-[#5C4E4E] mt-12"></div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center mt-12 gap-4">

                <div className="h-auto md:h-[15rem] w-full md:w-[35rem]">
                    <p className={`font-general font-semibold px-4 md:px-12 py-4 md:py-12 text-2xl md:text-3xl ${isDarkMode ? "text-[#FBFAF5]" : "text-[#988686]"} tracking-wider`}>My Expertises</p>
                    <p className={`font-general font-light px-4 md:px-12 text-lg md:text-2xl ${isDarkMode ? "text-white" : "text-black"}`}>My expertises lie around the technical aspects of creating powerful and functional websites !!</p>
                </div>

                <div className="h-auto md:h-[15rem] w-full md:w-[39rem] md:py-12 mt-2">
                    <p className={`font-general font-semibold px-4 md:px-20 text-xl md:text-3xl ${isDarkMode ? "text-[#E2DED0]" : "text-[#5C4E4E]"}`}>FRONT END DEVELOPMENT</p>
                    <p className={`font-general font-semibold px-4 md:px-20 py-1 md:py-2.5 text-xl md:text-3xl ${isDarkMode ? "text-[#E2DED0]" : "text-[#5C4E4E]"}`}>BACKEND DEVELOPMENT</p>
                    <p className={`font-general font-semibold px-4 md:px-20 text-xl md:text-3xl ${isDarkMode ? "text-[#E2DED0]" : "text-[#5C4E4E]"}`}>VERSION CONTROL SYSTEM</p>
                    <p className={`font-general font-semibold px-4 md:px-20 py-1 md:py-2.5 text-xl md:text-3xl ${isDarkMode ? "text-[#E2DED0]" : "text-[#5C4E4E]"}`}>DATABASE MANAGEMENT</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center mt-2.5 md:gap-4">

                <div className="h-auto md:h-[15rem] w-full md:w-[35rem] mt-4 md:ml-28">
                    <p className={`font-general font-semibold px-4 md:px-12 py-4 md:py-12 text-2xl md:text-3xl ${isDarkMode ? "text-[#FBFAF5]" : "text-[#988686]"} tracking-wider`}>My Tech Stack</p>
                    <p className={`font-general font-light px-4 md:px-12 text-lg md:text-2xl ${isDarkMode ? "text-white" : "text-black"}`}>I believe in the continuous learning process and stay updated with the latest trends in the rapidly evolving tech landscape.</p>
                </div>
                
                <div className="flex gap-10 mr-24 ">
                    <div className="h-auto md:h-[20rem] md:w-[19rem] py-12">
                        <p className={`font-general font-semibold md:px-4 md:px-24 text-xl md:text-3xl ${isDarkMode ? "text-[#E2DED0]" : "text-[#5C4E4E]"}`}>JavaScript</p>
                        <p className={`font-general font-semibold md:px-4 md:px-24 py-1 md:py-2.5 text-xl md:text-3xl ${isDarkMode ? "text-[#E2DED0]" : "text-[#5C4E4E]"}`}>Git/GitHub</p>
                        <p className={`font-general font-semibold md:px-4 md:px-24 text-xl md:text-3xl ${isDarkMode ? "text-[#E2DED0]" : "text-[#5C4E4E]"}`}>React.js</p>
                        <p className={`font-general font-semibold md:px-4 md:px-24 py-1 md:py-2.5 text-xl md:text-3xl ${isDarkMode ? "text-[#E2DED0]" : "text-[#5C4E4E]"}`}>Html</p>
                        <p className={`font-general font-semibold md:px-4 md:px-24 text-xl md:text-3xl ${isDarkMode ? "text-[#E2DED0]" : "text-[#5C4E4E]"}`}>Express.js</p>
                    </div>
                    <div className="h-auto md:h-[20rem] md:w-[19rem] py-12">
                        <p className={`font-general font-semibold md:px-2 md:px-2 text-xl md:text-3xl ${isDarkMode ? "text-[#E2DED0]" : "text-[#5C4E4E]"}`}>Node.js</p>
                        <p className={`font-general font-semibold md:px-2 md:px-2 py-1 md:py-2.5 text-xl md:text-3xl ${isDarkMode ? "text-[#E2DED0]" : "text-[#5C4E4E]"}`}>MySql/Sql</p>
                        <p className={`font-general font-semibold md:px-2 md:px-2 text-xl md:text-3xl ${isDarkMode ? "text-[#E2DED0]" : "text-[#5C4E4E]"}`}>CSS</p>
                        <p className={`font-general font-semibold md:px-2 md:px-2 py-1 md:py-2.5 text-xl md:text-3xl ${isDarkMode ? "text-[#E2DED0]" : "text-[#5C4E4E]"}`}>Gsap</p>
                        <p className={`font-general font-semibold md:px-2 md:px-2 text-xl md:text-3xl ${isDarkMode ? "text-[#E2DED0]" : "text-[#5C4E4E]"}`}>MongoDB</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}
// export default function Services () {
//     return(
//         <div className="h-screen w-full flex flex-col mt-4" data-scroll data-scroll-speed="0.2">

//             <div className="flex justify-center items-center gap-8 mt-4">
//                 <div className="h-8 w-8 rounded-full bg-[#5C4E4E] mt-10"></div>
//                 <div>
//                     <h2 className="text-black font-general font-semibold text-6xl text-center mt-10">Services</h2>
//                 </div>
//                 <div className="h-8 w-8 rounded-full bg-[#5C4E4E] mt-12"></div>
//             </div>
        

//             <div className="flex justify-center items-center mt-12 gap-4">

//                 <div className="h-[15rem] w-[35rem]">
//                     <p className="font-general font-semibold px-12 py-12 text-3xl text-[#988686] tracking-wider">My Expertises</p>
//                     <p className="font-general font-light px-12  text-2xl text-black ">My expertises lies around the technical aspects of creating powerful and functional websites !!</p>
//                 </div>

//                 <div className=" h-[15rem] w-[39rem]  py-12">
//                     <p className="font-general font-semibold px-20 text-3xl text-[#5C4E4E]">FRONT END DEVELOPMENT</p>
//                     <p className="font-general font-semibold px-20 py-2.5 text-3xl text-[#5C4E4E]">BACKEND DEVELOPMENT</p>
//                     <p className="font-general font-semibold px-20 text-3xl text-[#5C4E4E]">VERSION CONTROL SYSTEM</p>
//                     <p className="font-general font-semibold px-20 py-2.5 text-3xl text-[#5C4E4E]">DATABASE MANAGMENT</p>
//                 </div>
//             </div>

//             <div className="flex justify-center items-center mt-2.5 gap-4">

//                 <div className="h-[15rem] w-[35rem] ">
//                     <p className="font-general font-semibold px-12 py-12 text-3xl text-[#988686] tracking-wider">My Tech Stack</p>
//                     <p className="font-general font-light px-12  text-2xl text-black ">I believe in the continuous learning process and stay updated with the latest trends in the rapidly evolving tech landscape.</p>
//                 </div>

//                 <div className=" h-[20rem] w-[19rem]  py-12">
//                     <p className="font-general font-semibold px-20 text-3xl text-[#5C4E4E]">JavaScript</p>
//                     <p className="font-general font-semibold px-20 py-2.5 text-3xl text-[#5C4E4E]">Git/GitHub</p>
//                     <p className="font-general font-semibold px-20 text-3xl text-[#5C4E4E]">React.js</p>
//                     <p className="font-general font-semibold px-20 py-2.5 text-3xl text-[#5C4E4E]">Html</p>
//                     <p className="font-general font-semibold px-20 text-3xl text-[#5C4E4E]">Express.js</p>
//                 </div>
//                 <div className=" h-[20rem] w-[19rem] py-12">
//                     <p className="font-general font-semibold px-2 text-3xl text-[#5C4E4E]">Node.js</p>
//                     <p className="font-general font-semibold px-2 py-2.5 text-3xl text-[#5C4E4E]">MySql/Sql</p>
//                     <p className="font-general font-semibold px-2 text-3xl text-[#5C4E4E]">CSS</p>
//                     <p className="font-general font-semibold px-2 py-2.5 text-3xl text-[#5C4E4E]">Gsap</p>
//                     <p className="font-general font-semibold px-2 text-3xl text-[#5C4E4E]">MongoDB</p>
//                 </div>
//             </div>
//         </div>
//     )
// }