import './App.css'
import Countdown from "./components/Countdown.jsx";
import CharacterCards from "./components/CharacterCards.jsx";
import MarvelF4 from './assets/images/marvel-first-steps.jpeg'

function App() {
  return (
      <div className="min-h-screen bg-ff-dark text-ff-white">
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
  )
}

export default App
