import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './App.css';
import myLogo from './assets/myFitRoomLogo_250.png'
import { Sparkles, Wand2 } from 'lucide-react';

function App() {
  const navigate = useNavigate();

  return (
    <div className="app">
      {/* Black Top navigate bar */}
      <header className="header">
        <div className="logo-section">
        <img src={myLogo} alt="MyFitRoom Logo" className="header-logo" />
          <span className="title">MyFitRoom</span>
        </div>
      </header>

      {/* Main content */}
      <main className="main-content">
        <div className="button-container">
          <Button 
            type="primary" 
            size="large" 
            className="nav-button"
            onClick={() => navigate('/browse-data')}
          >
            Generate my clothes
            <Sparkles className="button-icon" size={20} />
          </Button>
          <Button 
            type="primary" 
            size="large" 
            className="nav-button"
            onClick={() => navigate('/virtual-room')}
          >
            Enter my fitting room
            <Wand2 className="button-icon" size={20} />
          </Button>
        </div>
      </main>
    </div>
  );
}

export default App;




















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
