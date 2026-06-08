import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import ProjectGrid from './components/ProjectGrid'
import ProjectModal from './components/ProjectModal'
import About from './components/About'
import Skills from './components/Skills'
import Capabilities from './components/Capabilities'


import Certifications from './components/Certifications'

import Contact from './components/Contact'
import Footer from './components/Footer'
import { projects } from './data/projects'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)

  function openModal(idx) {
    setActiveProject(projects[idx])
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  function closeModal() {
    setModalOpen(false)
    setActiveProject(null)
    document.body.style.overflow = ''
  }

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') closeModal() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <ProjectModal project={activeProject} open={modalOpen} onClose={closeModal} />
      <Navbar />
      <Hero />
      <Marquee />
      <ProjectGrid onOpen={openModal} />
      <About />
      <Skills />
      <Capabilities />
      
      
      <Certifications />
      
      <Contact />
      <Footer />
    </>
  )
}
