import './App.css'
import { Paper } from '@mui/material'
import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import Navigation from './Navigation/Navigation'
import Home from './Home/Home'
import Experience from './Experience/Experience'

function App() {

  const [selected, setSelected] = useState('home');
  const navigate = useNavigate()

  useEffect(()=>{
    if (selected === 'home') {
      navigate('/')
    }
    else {
      navigate(`/${selected}`)
    }
  }, [selected])

  return (
    <Paper
      elevation={0}
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundColor: 'background.default',
      }}
    >

      <Navigation selected={selected} setSelected={setSelected} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/projects" element={<div>Projects</div>} />
        <Route path="/skills" element={<div>Skills</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </Paper>
  )
}

export default App
