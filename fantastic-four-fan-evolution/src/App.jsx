import './App.css'
import Countdown from "./components/Countdown.jsx";
import CharacterCards from "./components/CharacterCards.jsx";
import MarvelF4 from './assets/images/marvel-first-steps.jpeg'
import F4Logo from './assets/images/4-logo-white.jpeg'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AudioController from "./components/AudioController.jsx";

function App() {
  return (
      <>
          {/* Background Audio */}
          {/*
          <audio autoPlay loop volume="0.5">
              <source src="/The%20Fantastic%20Four_%20First%20Steps%20%20Dreamer%20%20In%20Theaters%20Friday.mp3"
                      type="audio/mpeg" />
              Your browser does not support the audio element.
          </audio>
          */}
          <AudioController />

          {/* Main App Content */}
          <Navbar />

          <div className="min-h-screen bg-ff-dark text-[#00bfff]">
              <h1 className="text-4xl text-center font-bold py-8 text-blue-400">
                  Fantastic ④ Countdown
              </h1>
              <div>
                  <img src={MarvelF4} alt="Marvel Fantastic Four" className={ "w-full h-100 object-cover mx-auto rounded-lg"}/>
              </div>
              {/*
          <span className="text-ff-flame hover:animate-pulse">Human Torch Mode</span>
          */}
              <div className="flex justify-center">
                  <Countdown />
              </div>
              <CharacterCards />
          </div>

          <Footer />
          <div className="text-center text-white py-4">

              <p className="text-xs text-gray-400 text-center mb-2"><strong>Tip: </strong>Click logo at top left to activate audio</p>
              <img src={F4Logo} alt="F4" className={ "w-10 mx-auto rounded-lg"}/>
          </div>
      </>
  )
}

export default App
