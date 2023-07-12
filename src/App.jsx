
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "@madzadev/audio-player/dist/index.css";
import Player1 from './components/Player1';

function App() {


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Player Music</h1>
      <div className="card">

        <Player1 />
      </div>

    </>
  )
}

export default App
