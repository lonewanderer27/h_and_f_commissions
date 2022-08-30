import { useState, lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import Logo from './components/Logo'
import BackButton from './components/BackButton'
import Home from './routes/Home'
import Work from './routes/Work'
import Other from './routes/Other'
import Inquiries from './routes/Inquiries'
import {Routes, Route, Link, useLocation, useNavigate} from 'react-router-dom'
import Loading from './components/Loading'
const LazyProgramming = lazy(() => import('./routes/Programming'))
const LazyArt = lazy(() => import('./routes/Art'))
const LazyAcademic = lazy(() => import('./routes/Academic'))
import './App.css'
 
function App() {
  const location = useLocation()
  const navigate = useNavigate()

  const [currentPage, changeCurrentPage] = useState("home")
  console.log(currentPage)

  function handleClick() {
    console.log("Logo was clicked!")
    changeCurrentPage("home")
  }

  return (
    <div className="App text-center position-relative">
      {window.location.pathname !== "/" && <BackButton onClick={() => navigate(-1)}/>}
      <Link to='/'>
        <Logo onClick={handleClick}/>
      </Link>
      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Home />} />
          <Route path='work' element={<Work />} />
          <Route path='academic-commissions' element={
            <Suspense fallback={< Loading/>}>
              <LazyAcademic />
            </Suspense>
          }/>
          <Route path='art-commissions' element={
            <Suspense fallback={< Loading/>}>
              <LazyArt />
            </Suspense>
          }>
          </Route>
          <Route path='programming-commisions' element={
            <Suspense fallback={< Loading/>}>
              <LazyProgramming />
            </Suspense>
          }>
          </Route>
          <Route path='other-commisions' element={<Other/>}/>
          <Route path='inquiries' element={<Inquiries />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
