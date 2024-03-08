import Animated from './components/animated'
import './App.css'
import {  BrowserRouter } from 'react-router-dom'

import YoutubeAnimate from './components/YoutubeAnimate'
import IntoSlider from './components/IntoSlider'
import Lenis from '@studio-freight/lenis'
import { useEffect, useRef, useState } from 'react'
import { DarkModeProvider } from './context/Theme'
import Darkmode from './components/Darkmode'



function App() {
  // const [isDarkmode, setIsDarkmode] = useState(false);
  // const toggleDark = () => {
  //   setIsDarkmode(prevDarkmode => !prevDarkmode)

  // }
  // document.documentElement.classList.toggle("dark", isDarkmode);
  // // useEffect(()=>{
  //   const dark= document.querySelector("body").classList.add(".darkmode")
  //   document.querySelector('html').classList.remove(".darkmode")
  // }, [themeMode])
  // const darkTheme = () => {
  //   setThemeMode("dark")
  // }
  
  // const lightTheme = () => {
  //   setThemeMode("ligth")
  // }

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    
    )()
  }, [])

  // const lenis = new Lenis()
  // lenis.on('scroll', (e) => {
  //   // console.log(e)
  // })

  // function raf(time) {
  //   lenis.raf(time)
  //   requestAnimationFrame(raf)
  // }

  // requestAnimationFrame(raf)
 
  return (
    <DarkModeProvider>
      <BrowserRouter> 
      <IntoSlider YoutubeAnimate={ <YoutubeAnimate />}/>
     <Darkmode/>
      </BrowserRouter>
    </DarkModeProvider>
  )
}

export default App
