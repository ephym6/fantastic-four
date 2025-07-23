import './App.css'
import Countdown from "./components/Countdown.jsx";

function App() {
  return (
      <div className="min-h-screen bg-ff-dark text-ff-white">
          <h1 className="text-4xl text-center font-bold py-8 text-ff-blue">
              Fantastic Four: Fan Evolution
          </h1>
          <span className="text-ff-flame hover:animate-pulse">Human Torch Mode</span>

          {/* Other components */}
          <div className="flex justify-center">
              <Countdown />
          </div>
      </div>
  )
}

export default App
