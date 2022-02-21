import './App.css';

//importamos las imagenes 
import travel__01 from "./assets/01.jpg"
import travel__02 from "./assets/02.jpg"
import travel__03 from "./assets/03.jpg"

//importamos componentes 
import Hero from './components/Hero';
import Slider from './components/Slider';
import Navbar from './components/Navbar';

//NAVBAR LINKS:
const navbarLinks = [
  {url: "#", title: "Home"},
  {url: "#", title: "Trips"},
  {url: "#", title: "Rewards"}
]

function App() {

  return (

    <div className="App">

      {/*PARAMETRO = le paso los links para el navbar */}
      <Navbar 
      navbarLinks={navbarLinks}
      />

      {/*PARAMETRO = le paso mi imagen importada (travel__01) */}
      <Hero 
        imageSrc={travel__01}
      />

      {/* PARAMETRO1 = le paso mi imagen importada (travel__02)
        PARAMETRO2 = TITULO = hardcodeo a string
        PARAMETRO3 = SUBTITULO = hardcodeo a string
       */}
      <Slider 
        imageSrc={travel__02}   
        title={"Be an explorer!"}
        subtitle={"Our platform offers a wide variety of unique travel locations!"} 
      />

      {/* PARAMETRO1 = le paso mi imagen importada (travel__02)
        PARAMETRO2 = TITULO = hardcodeo a string
        PARAMETRO3 = SUBTITULO = hardcodeo a string
      */}
      <Slider 
        imageSrc={travel__03}  
        title={"Memories for a lifetime!"} 
        subtitle={"Your dream vacation is only a few clicks away."} 
        flipped={true} //esto es para avisar que tiene que hacer flip 
      />

    </div>
    
  );

}

export default App;
