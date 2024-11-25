import React from 'react'
import Landing from './Pages/Landing';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import LoginForm from './Components/LoginForm.jsx';
import Registration from "./Components/Registration.jsx"

export default function () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path="/Homepage" element={<Homepage/>}/>
          <Route path="/LoginForm" element={<LoginForm/>}/>
          <Route path="/Registration" element={<Registration/>}/>
         
       
        
        </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}
