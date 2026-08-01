import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons"
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomProvider from './Provider'
import { ToastContainer } from 'react-toastify';

import MainRenders from './GaleriaRenders/MainRenders';
import Textos from './GaleriaRenders/Textos';




function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Textos />
        <Routes>
          <Route path='/' element={<MainRenders />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />

    </div>
  )
}

function newApp() {
  return (
    <CustomProvider>
      <App />
    </CustomProvider>
  )
}


export default newApp;
