import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons"
import 'aos/dist/aos.css'
import CustomProvider from './Provider'
import MainRenders from './GaleriaRenders/MainRenders';
import Textos from './GaleriaRenders/Textos';




function App() {

  return (
    <div className="App">
      <Textos />
      <MainRenders />

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
