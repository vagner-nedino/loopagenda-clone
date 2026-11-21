import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import Header from './components/header/Header'
import './components/header/Header.css'
import Principal from './components/Principal/principal'
import './components/Principal/principal.css'
function App() {


  return (
    <>
     <Header/>
     <Principal/>
    </>
  )
}

export default App

