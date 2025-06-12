import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import NotFoundPage from './pages/NotFoundPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import UserInfoPage from './pages/UserInfoPage'

function App() {

  return (
    <Routes>
      <Route exact path='/' element={<LandingPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route  path='/login' element={<LoginPage />} />
      <Route  path='/movies-details/:id' element={<MovieDetailsPage />} />
      <Route  path='/user' element={<UserInfoPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    
  )
}

export default App
