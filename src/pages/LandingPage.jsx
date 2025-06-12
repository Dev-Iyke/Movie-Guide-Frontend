import React, { useContext } from 'react'
import { AuthContext } from '../context/features'
import '../styles/landing.css'
import Hero from '../components/home/Hero'
const LandingPage = () => {
  const user = useContext(AuthContext)
  console.log(user)
  return (
    <div>
      <Hero />
    </div>
  )
}

export default LandingPage