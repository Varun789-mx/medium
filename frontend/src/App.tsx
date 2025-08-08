import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import LandingPage from './pages/Landing';
import Addblog from './pages/Addblog';
import BlogsPage from './pages/Blogs';
import { ProtectedRoutes } from './components/ProctedRoutes';



function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/blog/:id' element={<ProtectedRoutes>
            <BlogsPage />
          </ProtectedRoutes>} />
          <Route path='/login' element={<Login />} />
          <Route path='/Addblog' element={<ProtectedRoutes>
            <Addblog />
          </ProtectedRoutes>} />
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
