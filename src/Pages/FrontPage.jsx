import React from 'react'
import NavBar from '../Components/NavBar'
import LandingComponent from '../Components/LandingComponent'
import TechStackComponent from '../Components/TechStackComponent'
import ProjectsComponent from '../Components/ProjectsComponent'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Connect from '../Components/Connect'
import Footer from '../Components/Footer'

export default function FrontPage() {
  return (
    <>
      <NavBar />
      <LandingComponent />
      <TechStackComponent/>
      <ProjectsComponent/>
      <About/>
      <Contact/>
      <Connect/>
      <Footer/>
    </>
  )
}
