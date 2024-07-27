
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import UserRoutes from './routes/UserRoutes';
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css'

function App() {

  return (
    <>
      <Router>
      
        
        <ToastContainer autoClose={3000} />
          <Routes>
              <Route path='/*' element={<UserRoutes/>} />
          </Routes>
       
      </Router>
    </>
  )
}

export default App
